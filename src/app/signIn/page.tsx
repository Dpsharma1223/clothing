
"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignInPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // ✅ Here you can add API call to your backend
  };

  return (
    <div className="bg-white px-4 py-12">
        <div className="max-w-2xl mx-auto">
      {/* Heading */}
      <h1 className="text-4xl font-semibold text-center mb-2">Create account</h1>
      <div className="text-sm text-md-grey text-center mb-8">
        <Link href="/" className="text-black hover:text-dark-grey">Home</Link>
        <span className="mx-1 text-lg">›</span>
        <span>Create Account</span>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium mb-1">First name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-full px-4 py-3 placeholder:text-sm placeholder:text-dark-grey focus:outline-none focus:ring-[1px] focus:ring-black"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Last name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-full px-4 py-3 placeholder:text-sm placeholder:text-dark-grey focus:outline-none focus:ring-[1px] focus:ring-black"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your email*"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-full px-4 py-3 placeholder:text-sm placeholder:text-dark-grey focus:outline-none focus:ring-[1px] focus:ring-black"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password*"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-full px-4 py-3 placeholder:text-sm placeholder:text-dark-grey focus:outline-none focus:ring-[1px] focus:ring-black"
          />
        </div>

        {/* Info Text */}
        <p className="text-xs text-gray-500 mt-2">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account and for other purposes
          described in our privacy policy.
        </p>

        {/* Buttons */}
        <button
          type="submit"
          className="w-full bg-black border text-sm hover:bg-white hover:text-black text-white border-black  py-4 rounded-full font-semibold mt-4"
        >
          CREATE ACCOUNT
        </button>

        <Link
          href="/myAccount"
          className="block text-sm w-full text-center hover:bg-black hover:text-white border border-black py-4 rounded-full font-semibold mt-2"
        >
          LOG IN
        </Link>
      </form>
      </div>
    </div>
  );
}
