// src/app/career/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

type Job = {
  title: string;
  location: string;
  type: string;
  income: string;
  date: string;
  link: string;
};

const jobs: Job[] = [
    { title: "E-commerce Manager", location: "Work address", type: "Full-time", income: "$20,000 - $25,000", date: "August 09 2023", link: "/career" },
    { title: "Digital Marketing Specialist", location: "Work address", type: "Full-time", income: "$20,000 - $25,000", date: "August 09 2023", link: "/career" },
    { title: "SEO Specialist", location: "Work address", type: "Full-time", income: "$20,000 - $25,000", date: "August 09 2023", link: "/career" },
    { title: "Instagram Content Executive", location: "Work address", type: "Full-time", income: "$20,000 - $25,000", date: "August 09 2023", link: "/career" },
    { title: "Video Editor Executive", location: "Work address", type: "Full-time", income: "$20,000 - $25,000", date: "August 09 2023", link: "/career" },
    { title: "Media Leader", location: "Work address", type: "Full-time", income: "$20,000 - $25,000", date: "August 09 2023", link: "/career" },
    { title: "UI/UX Designer", location: "Work address", type: "Full-time", income: "$25,000 - $30,000", date: "August 09 2023", link: "/career" },
    { title: "Frontend Developer", location: "Work address", type: "Full-time", income: "$25,000 - $30,000", date: "August 09 2023", link: "/career" },
    { title: "Backend Developer", location: "Work address", type: "Full-time", income: "$25,000 - $30,000", date: "August 09 2023", link: "/career" },
    { title: "HR Specialist", location: "Work address", type: "Full-time", income: "$20,000 - $25,000", date: "August 09 2023", link: "/career" },
  ];
  

export default function CareerPage() {
  const [visibleJobs, setVisibleJobs] = useState(6);

  const loadMore = () => {
    setVisibleJobs((prev) => Math.min(prev + 4, jobs.length));
  };

  return (
    <div className="bg-white px-4 pb-20">
        <div className="2xl:container 2xl:mx-auto">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <Link href="/" className="hover:text-md-grey">Home</Link> <span className="text-lg">›</span>{" "}
        <Link href="/" className="hover:text-md-grey">Pages</Link> <span className="text-lg">›</span> <span className="text-dark-grey">Career</span>
      </nav>

      {/* Hero Section */}
      <div className="text-center mb-20 pt-20">
        <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">Hello Guys! 👋</p>
        <h1 className="text-5xl font-semibold mb-6">Go Home We Are A Family</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Welcoming new people to our teams, each with a diverse skillset and background,
          is the catalyst for innovation and transformation.
        </p>
        <Link href="/career" className="px-12 py-3.5 bg-black uppercase font-medium text-sm border border-black text-white rounded-full hover:bg-white hover:text-black transition">
          See Available Career
        </Link>
      </div>

      {/* Job Listings */}
<div className="space-y-8">
  {jobs.slice(0, visibleJobs).map((job, idx) => (
    <div
      key={idx}
      className="flex justify-between items-center border border-light-grey p-7 odd:bg-light-grey/35 even:bg-white"
    >
      <div>
        <h2 className="font-medium text-xl mb-2">{job.title}</h2>
        <div className="text-md text-dark-grey flex justify-center items-center">
          <span className="text-2xl text-md-grey -mt-0.5">•</span>&nbsp; Location: {job.location} &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-2xl text-md-grey -mt-0.5">•</span>&nbsp; {job.type} &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-2xl text-md-grey -mt-0.5">•</span>&nbsp; Income: {job.income} &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-2xl text-md-grey -mt-0.5">•</span>&nbsp; Date: {job.date}
        </div>
      </div>
      <Link
        href={job.link}
        className="px-5 py-2.5 uppercase font-medium border border-black rounded-full bg-black text-white text-sm hover:bg-white hover:text-black transition"
      >
        View Details
      </Link>
    </div>
  ))}
</div>


      {/* Load More */}
      <div className="text-center mt-10 flex flex-col justify-center items-center">
        <span className="text-sm inline-block text-dark-grey border-b border-md-grey mb-7 pb-3 px-5">
          Showing {visibleJobs} of {jobs.length} careers
        </span>
        {visibleJobs < jobs.length && (
          <button
            onClick={loadMore}
            className="px-12 py-4 border text-xs font-bold uppercase border-black rounded-full hover:bg-black hover:text-white transition"
          >
            Load More
          </button>
        )}
      </div>
      </div>
    </div>
  );
}
