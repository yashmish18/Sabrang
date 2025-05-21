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
    setSubmitted(false); // hide message if user edits
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
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-lg"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-black mb-8">
          Register for <span className="text-blue-600">Sabrang 2025</span>
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-4 mb-6 border border-gray-300 rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full font-semibold py-3 rounded-lg transition-all duration-300
            ${isFormValid ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}
        >
          Submit
        </button>

        {submitted && (
          <p className="text-green-600 font-semibold text-center mt-6">Account Created!</p>
        )}
      </form>
    </div>
  );
}
