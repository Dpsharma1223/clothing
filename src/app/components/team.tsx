// components/Team.tsx
"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "Nimrod Barshad",
    title: "Founder/CEO",
    image: "/aboutUs/about-us-team-1.jpg",
  },
  {
    name: "Claude K. Amadeo",
    title: "Sales Director",
    image: "/aboutUs/about-us-team-2.jpg",
  },
  {
    name: "Linda M. Dugan",
    title: "Manager",
    image: "/aboutUs/about-us-team-3.jpg",
  },
  {
    name: "Mark Pocket",
    title: "Product Manager",
    image: "/aboutUs/about-us-team-4.jpg",
  },
];

export default function Team() {
  return (
    <section className="py-16 bg-white">
      <div className="2xl:container 2xl:mx-auto px-4 ">
        <h2 className="text-4xl font-bold mb-12 text-center">The Leader Board Of Our Company</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
