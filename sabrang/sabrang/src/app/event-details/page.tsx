'use client';

export default function EventDetailsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-pink-500">
          Event Descriptions
        </h1>

        <section className="bg-white/5 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-md">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">🎨 Recreation – Upcycling & Product Pitching</h2>
          <p className="text-white/90 text-lg leading-relaxed">
            Transform the ordinary into the extraordinary at <strong>Recreation</strong> – the ultimate upcycling and product pitching event at <span className="text-pink-400 font-semibold">#Sabrang2024</span>! 🌍 Showcase your creativity and resourcefulness as you craft unique items from waste for a chance to win a prize pool of <strong>₹7,500</strong>! Get ready to pitch your innovative creations and make sustainability shine. Stay tuned for updates! 🔥
          </p>
        </section>

        <section className="bg-white/5 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-md">
          <h2 className="text-2xl font-bold text-green-400 mb-4">📈 Seal the Deal – Market & Stock Trading</h2>
          <p className="text-white/90 text-lg leading-relaxed">
            Step into the world of high-stakes trading at <strong>Seal the Deal</strong> – the market and stock trading event at <span className="text-pink-400 font-semibold">#Sabrang2024</span>! 💹 Test your financial savvy and strategic thinking for a chance to win a prize pool of <strong>₹4,500</strong>! Whether you're a trading pro or a beginner, this is your moment to make your best moves. Stay tuned for updates and get ready to strike it rich! 🔥💰
          </p>
        </section>
      </div>
    </div>
  );
}
