'use client';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase.client';
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

export default function TodoForm() {
    const [text, setText] = useState('');
    const { user } = useAuth();

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user || !text.trim()) return;
        console.log(user.uid, text);
        await addDoc(collection(db(), 'todos'), {
            uid: user.uid,
            text: text.trim(),
            done: false,
            createdAt: serverTimestamp(),
        });
        setText('');
    };

    return (
        <form onSubmit={submit} className="flex gap-2">
            <input
                className="border border-gray-300 px-3 py-2 rounded grow"
                placeholder="やること"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className="rounded-lg px-4 py-2 border bg-sky-500 text-white" type="submit">追加</button>
        </form>
    );
}