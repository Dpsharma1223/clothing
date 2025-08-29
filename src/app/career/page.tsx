"use client";

import { useState } from "react";
import Link from "next/link";
import { jobs } from "../../../public/data/career";

export default function CareerPage() {
  const [visibleJobs, setVisibleJobs] = useState(6);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [location, setLocation] = useState("All Locations");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesDepartment =
      department === "All Departments" || job.department === department;
    const matchesLocation =
      location === "All Locations" || job.location === location;

    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const loadMore = () => {
    setVisibleJobs((prev) => Math.min(prev + 4, filteredJobs.length));
  };

  return (
    <div className="bg-white px-4 pb-15">
      <div className="2xl:container 2xl:mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6">
          <Link href="/" className="hover:text-md-grey">
            Home
          </Link>
          <span className="mx-2 text-lg">›</span>
          <Link href="/" className="hover:text-md-grey">
            Pages
          </Link>
          <span className="mx-2 text-lg">›</span>
          <span className="text-dark-grey">Career</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-20 pt-20">
          <p className="text-sm uppercase tracking-wide text-dark-grey mb-4">
            Hello Guys! 👋
          </p>
          <h1 className="text-5xl font-semibold mb-6">
            Go Home We Are A Family
          </h1>
          <p className="text-dark-grey max-w-2xl mx-auto mb-10">
            Welcoming new people to our teams, each with a diverse skillset and
            background, is the catalyst for innovation and transformation.
          </p>
          <Link
            href="/career"
            className="px-12 py-3.5 bg-black uppercase font-medium text-sm border border-black text-white rounded-full hover:bg-white hover:text-black transition"
          >
            See Available Career
          </Link>
        </div>

        {/* Filters */}
        <div className="border border-light-grey rounded-lg p-6 mb-12 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <input
            type="text"
            placeholder="Job title or keyword"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-2 border border-md-grey rounded-md px-4 py-3 text-sm focus:outline-none"
          />
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="flex-1 border border-md-grey rounded-md px-4 py-3 text-sm focus:outline-none"
          >
            <option>All Departments</option>
            <option>Development</option>
            <option>Design</option>
            <option>Marketing</option>
            <option>Media</option>
            <option>HR</option>
          </select>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 border border-md-grey rounded-md px-4 py-3 text-sm focus:outline-none"
          >
            <option>All Locations</option>
            <option>Remote</option>
            <option>India</option>
            <option>United States</option>
            <option>Europe</option>
          </select>
        </div>

        {/* Job Listings */}
        <div className="space-y-8">
          {filteredJobs.slice(0, visibleJobs).map((job) => (
            <div
              key={job.slug}
              className="flex justify-between items-center border border-light-grey p-7 odd:bg-light-grey/35 even:bg-white"
            >
              <div>
                <h2 className="font-medium text-xl mb-2">{job.title}</h2>
                <div className="text-md text-dark-grey flex flex-wrap gap-3">
                  <span>Location: {job.location}</span>
                  <span>{job.type}</span>
                  <span>Income: {job.income}</span>
                  <span>Date: {job.date}</span>
                </div>
              </div>
              <Link
                href={`/career/${job.slug}`}
                className="px-5 py-2.5 uppercase font-medium border border-black rounded-full bg-black text-white text-sm hover:bg-white hover:text-black transition"
              >
                View Details
              </Link>
            </div>
          ))}

          {/* No Jobs Found */}
          {filteredJobs.length === 0 && (
            <p className="text-center text-dark-grey mt-10">
              No jobs found matching your filters.
            </p>
          )}
        </div>

        {/* Load More Button */}
        {filteredJobs.length > visibleJobs && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="px-12 py-4 border text-xs font-bold uppercase border-black rounded-full hover:bg-black hover:text-white transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
