"use client";

import Image from "next/image";

export default function OurStore() {
  const stores = [
    {
      name: "South Fulon",
      image: "/ourStores/store1.jpg",
      address: "268 St, South New York/NY 98944, United States",
      phone: "+222–1800–2628",
      email: "Support@example.com",
      hours1: "Mon – Friday: 9:00am – 6:00pm",
      hours2: "Saturday – Sunday: 10:00am – 5:00pm",
    },
    {
      name: "Place Ste-Foy",
      image: "/ourStores/store2.jpg",
      address: "268 St, South New York/NY 98944, United States",
      phone: "+222–1800–2628",
      email: "Support@example.com",
      hours1: "Mon – Friday: 9:00am – 6:00pm",
      hours2: "Saturday – Sunday: 10:00am – 5:00pm",
    },
    {
      name: "Martin Place",
      image: "/ourStores/store3.jpg",
      address: "268 St, South New York/NY 98944, United States",
      phone: "+222–1800–2628",
      email: "Support@example.com",
      hours1: "Mon – Friday: 9:00am – 6:00pm",
      hours2: "Saturday – Sunday: 10:00am – 5:00pm",
    },
    {
      name: "Martin Place",
      image: "/ourStores/store4.jpg",
      address: "268 St, South New York/NY 98944, United States",
      phone: "+222–1800–2628",
      email: "Support@example.com",
      hours1: "Mon – Friday: 9:00am – 6:00pm",
      hours2: "Saturday – Sunday: 10:00am – 5:00pm",
    },
    {
      name: "Southland Park",
      image: "/ourStores/store5.jpg",
      address: "268 St, South New York/NY 98944, United States",
      phone: "+222–1800–2628",
      email: "Support@example.com",
      hours1: "Mon – Friday: 9:00am – 6:00pm",
      hours2: "Saturday – Sunday: 10:00am – 5:00pm",
    },
    {
      name: "Port Melbourne",
      image: "/ourStores/store6.jpg",
      address: "268 St, South New York/NY 98944, United States",
      phone: "+222–1800–2628",
      email: "Support@example.com",
      hours1: "Mon – Friday: 9:00am – 6:00pm",
      hours2: "Saturday – Sunday: 10:00am – 5:00pm",
    },
  ];

  return (
    <section className="py-18 px-1 bg-white">
        <div className="2xl:container 2xl:mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-semibold mb-2">Our Stores</h1>
        <p className="text-gray-500 text-sm">
          Home <span className="mx-1">›</span> Pages <span className="mx-1">›</span> Our Stores
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {stores.map((store, index) => (
          <div key={index} className="flex flex-col items-start">
            <div className="w-full h-64 relative rounded-lg overflow-hidden">
              <Image
                src={store.image}
                alt={store.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl font-medium">{store.name}</h3>
            <p className="text-gray-500">{store.address}</p>
            <p className="text-gray-500">{store.phone}</p>
            <p className="text-gray-500">{store.email}</p>
            <p className="text-gray-500">{store.hours1}</p>
            <p className="text-gray-500">{store.hours2}</p>
            <button className="mt-4 px-13 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
              GET DIRECTIONS
            </button>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
