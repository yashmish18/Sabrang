'use client';

import { useRouter } from 'next/navigation';
import { Ticket } from 'lucide-react'; // using Lucide for icons (make sure it's installed)

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center animate-fade-in">
        <div className="flex justify-center mb-6">
          <Ticket className="h-12 w-12 text-pink-500" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          <span className="text-white">Sabrang Cultural Event</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed">
          Experience the vibrant colors of culture, music, and art at Sabrang!
          <br />
          Register now to be a part of the most awaited cultural event of the year.
        </p>
        <div className="space-x-6">
          <button
            onClick={() => router.push('/register')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
          >
            Register
          </button>
          <button
            onClick={() => router.push('/login')}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
