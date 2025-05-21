'use client'; // This makes the page a client component in Next.js 13+

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !phone.trim()) {
      setError('Please enter both name and phone number.');
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError('Phone number must be 10 digits.');
      return;
    }

    // Save user info to localStorage (or sessionStorage)
    localStorage.setItem('userName', name.trim());
    localStorage.setItem('userPhone', phone.trim());

    // Redirect to event details page (adjust route if needed)
    router.push('/event-details');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', boxShadow: '0 0 10px #aaa', borderRadius: '8px', backgroundColor: '#f0f8ff', fontFamily: 'Arial, sans-serif' }}>
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-8">Login</h2>
      <form onSubmit={handleSubmit} noValidate>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <label htmlFor="name" style={{color: 'black'}}>Enter your name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          required
          style={{ width: '100%', padding: '10px', margin: '8px 0', borderRadius: '5px', border: '1px solid #ccc',color: 'grey' }}
        />

        <label htmlFor="phone" style={{color: 'black'}}>Enter your phone number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          pattern="\d{10}"
          placeholder="10 digit number"
          required
          style={{ width: '100%', padding: '10px', margin: '8px 0', borderRadius: '5px', border: '1px solid #ccc',color: 'grey'  }}
        />

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
