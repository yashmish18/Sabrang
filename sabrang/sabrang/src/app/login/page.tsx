'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      setError('⚠️ Please enter both name and phone number.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError('⚠️ Phone number must be 10 digits.');
      return;
    }

    // Store in localStorage
    localStorage.setItem('userName', name.trim());
    localStorage.setItem('userPhone', phone.trim());

    // Redirect to event details
    router.push('/event-details');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center px-4">
      <div className="bg-white/5 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-md border border-white/10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-8">
          Login to <span className="text-pink-500">Sabrang 2025</span>
        </h2>

        <form onSubmit={handleSubmit} noValidate>
          {error && (
            <p className="text-red-400 text-sm font-semibold mb-4 text-center">
              {error}
            </p>
          )}

          <label htmlFor="name" className="block text-white mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-4 mb-4 rounded-lg bg-white/10 text-white placeholder-white/60 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />

          <label htmlFor="phone" className="block text-white mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="10 digit number"
            pattern="\d{10}"
            className="w-full p-4 mb-6 rounded-lg bg-white/10 text-white placeholder-white/60 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg text-lg font-bold bg-pink-600 hover:bg-pink-700 text-white transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
