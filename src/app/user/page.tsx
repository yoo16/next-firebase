'use client';

import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase.client";
import { useAuth } from "@/hooks/useAuth"; // Firebase Auth で現在ログイン中のユーザーを取得
import { useRouter } from "next/navigation";

export default function UserProfile() {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.replace('/');
        }
        console.log(user);
    }, [user, loading, router]);


    if (loading) {
        return <p className="text-gray-500 text-sm">読み込み中...</p>;
    }

    return (
        <div className="p-4 border rounded shadow-md max-w-sm">
            <div className="flex items-center gap-3">
                <div>
                    <h2 className="font-bold text-lg">{user?.displayName}</h2>
                    <p className="text-sm text-gray-600">{user?.email}</p>
                </div>
            </div>
        </div>
    );
}