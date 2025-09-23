'use client';
import { useAuth } from '@/hooks/useAuth';
import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AppPage() {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.replace('/'); 
        }
    }, [user, loading, router]);

    if (loading) return <p>Loading...</p>;
    if (!user) return null; // リダイレクト中は何も表示しない

    return (
        <section className="space-y-6">
            <h2 className="text-xl font-semibold">Todo</h2>
            <TodoForm />
            <TodoList />
        </section>
    );
}
