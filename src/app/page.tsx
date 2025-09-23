import LoginForm from '@/components/LoginForm';

export default function Home() {
  // Client only components handle auth state.
  return (
    <section className="space-y-6">
      <LoginForm />
    </section>
  );
}