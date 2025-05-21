'use client';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="text-center mt-24">
      <h1 className="text-5xl font-bold mb-10">
        Welcome to Sabrang 2025
      </h1>
      <button
        onClick={() => router.push('/register')}
        className="mr-5 px-6 py-2 bg-blue-500 text-white rounded"
      >
        Register
      </button>
      <button
        onClick={() => router.push('/login')}
        className="px-6 py-2 bg-green-500 text-white rounded"
      >
        Login
      </button>
    </div>
  );
}
