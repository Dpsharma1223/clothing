"use client";

import React from "react";

const ContactForm: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-medium mb-10">
          Have an question? Contact us!
        </h2>
        <form className="space-y-6 flex flex-col">
          {/* Name & Email */}
          <div className="flex w-full flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 rounded-full border border-gray-200 px-6 py-3 focus:outline-none focus:border-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 rounded-full border border-gray-200 px-6 py-3 focus:outline-none focus:border-black"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-full border border-gray-200 px-6 py-3 focus:outline-none focus:border-black"
          />

          {/* Comment */}
          <textarea
            placeholder="Write Your Comment..."
            rows={7}
            className="w-full rounded-2xl border border-gray-200 px-6 py-3 focus:outline-none focus:border-black"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-auto text-xs hover:bg-white hover:text-black border bg-black text-white font-semibold px-12 py-4 rounded-full transition"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

