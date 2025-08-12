"use client";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[59vh] flex items-center justify-center bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto md:text-lg leading-relaxed">
          A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-black text-sm font-medium py-3 px-12 rounded-full hover:bg-gray-200 transition">
            VIEW MORE
          </button>
          <button className="border border-white text-white text-sm font-medium py-3 px-12 rounded-full hover:bg-white hover:text-black transition">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
}
