"use client";

import Image from "next/image";

const stats = [
  {
    id: 1,
    value: "41K+",
    label: "Happy Customer",
    desc: "Sed ut perspiciatis unde omnis iste natus sit accusantium doloremque laudantium totam.",
  },
  {
    id: 2,
    value: "21+",
    label: "Years in Business",
    desc: "Sed ut perspiciatis unde omnis iste natus sit accusantium doloremque laudantium totam.",
  },
  {
    id: 3,
    value: "98 %",
    label: "Return Clients",
    desc: "Sed ut perspiciatis unde omnis iste natus sit accusantium doloremque laudantium totam.",
  },
  {
    id: 4,
    value: "16",
    label: "Awards Won",
    desc: "Sed ut perspiciatis unde omnis iste natus sit accusantium doloremque laudantium totam.",
  },
];

export default function AboutStats() {
  return (
    <section className="bg-white pb-16">
      <div className="2xl:container 2xl:mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Image
              src="/aboutUs/about2.jpeg" 
              alt="Team working together"
              width={600}
              height={400}
              className="rounded-xl w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <Image
              src="/aboutUs/about3.jpeg" 
              alt="Team collaboration"
              width={600}
              height={400}
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 text-center">
          {stats.map((stat) => (
            <div key={stat.id}>
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="mt-2 text-lg font-medium text-gray-700">{stat.label}</p>
              <p className="mt-2 text-sm text-gray-500">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
