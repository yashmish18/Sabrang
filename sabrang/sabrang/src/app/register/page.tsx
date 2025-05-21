'use client';

import { useState } from 'react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const allFilled = Object.values(formData).every((val) => val.trim() !== '');
    if (!allFilled) return;

    setSubmitted(true);
    console.log('Form submitted:', formData);
  };

  const isFormValid = Object.values(formData).every((val) => val.trim() !== '');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl p-10 w-full max-w-md border border-white/10"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-8">
          Register for <span className="text-pink-500">Sabrang 2025</span>
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-4 mb-4 border border-gray-600 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-4 mb-6 border border-gray-600 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />

        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full py-3 rounded-lg text-lg font-bold transition-all duration-300
            ${isFormValid
              ? 'bg-pink-600 hover:bg-pink-700 text-white'
              : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
        >
          Submit
        </button>

        {submitted && (
          <p className="text-green-400 font-semibold text-center mt-6">🎉 Account Created!</p>
        )}
      </form>
    </div>
  );
}
