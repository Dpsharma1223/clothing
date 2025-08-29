import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { jobs } from "../../../../public/data/career";

type Props = {
  params: { slug: string };
};

export default function CareerDetail({ params }: Props) {
  const job = jobs.find((j) => j.slug === params.slug);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Job not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16 px-6 md:px-16">
        <Link
          href="/career"
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg mb-6"
        >
          <ArrowLeft size={18} /> Back to All Openings
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold">{job.title}</h1>
        <div className="flex flex-wrap gap-6 mt-4 text-sm text-gray-200">
          <span>{job.location}</span>
          <span>• {job.type}</span>
          <span>• {job.department}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 py-12 px-6 md:px-12 pb-20">
        {/* Job Details */}
        <div className="md:col-span-3">
          <h2 className="text-xl font-semibold text-dark-grey mb-4">Job Description</h2>
          <p className="text-gray-700 mb-6">{job.description}</p>

          <h3 className="text-lg font-semibold text-dark-grey mb-2">Responsibilities</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            {job.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold text-dark-grey mb-2">Qualifications</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {job.qualifications.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </div>

        {/* Application Form */}
        <div className="md:col-span-2 bg-light-grey/35 p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-6">Apply for this role</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-[0.5px] border-dark-grey focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="john.doe@example.com"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-[0.5px] border-dark-grey focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-[0.5px] border-dark-grey focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-[0.5px] border-dark-grey focus:ring-black">
                <option>Select or search country...</option>
                <option>United States</option>
                <option>Canada</option>
                <option>India</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Resume/CV</label>
              <div className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500 cursor-pointer hover:border-black">
                Drop files to attach, or <span className="text-blue-600">browse</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter (Optional)</label>
              <textarea
                placeholder="Tell us about yourself..."
                rows={4}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-[0.5px] border-dark-grey focus:ring-black"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3.5 text-sm uppercase rounded-full font-medium hover:bg-white hover:text-black border transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
