"use client";

import React from "react";
import Link from "next/link";

export default function MyAccountPage() {
  return (
    <div className="px-6 py-20 pb-29 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center mb-15">
          {/* Page Title */}
          <h1 className="text-3xl font-bold mb-5 text-center md:text-left">
            Login
          </h1>
          {/* Breadcrumb */}
          <div className="text-sm text-md-grey">
            <Link href="/" className="text-black">
              Home
            </Link>{" "}
            <span className="mx-1 text-lg">›</span> <span>Account</span>
          </div>
        </div>

        {/* Main Container */}
        <div className="grid md:grid-cols-2 gap-20">
          {/* Login Form */}
          <div>
            <h2 className="text-2xl font-medium mb-6">Login</h2>
            <form className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Email <span className="text-red">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email*"
                  className="mt-2 w-full rounded-full border placeholder:text-sm placeholder:text-dark-grey border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Password <span className="text-red">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Password*"
                  className="mt-2 w-full rounded-full border placeholder:text-sm placeholder:text-dark-grey border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                  required
                />
              </div>

              {/* Forgot Password */}
              <div className="mb-8">
                <Link
                  href="/forgot-password"
                  className="text-sm text-dark-grey hover:text-black"
                >
                  Forgot your password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-full border text-sm border-black bg-black py-3.5 text-white font-medium hover:bg-white hover:text-black transition-colors duration-500"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* New Customer Section */}
          <div>
            <h2 className="text-2xl font-medium mb-6">New Customer</h2>
            <p className="text-dark-grey text-sm mb-6">
              Sign up for early Sale access plus tailored new arrivals, trends
              and promotions. To opt out, click unsubscribe in our emails.
            </p>
            <Link
              href="/register"
              className="block w-full text-center bg-black text-sm text-white rounded-full border border-black py-3.5 font-medium hover:bg-white hover:text-black transition-colors duration-500"
            >
              CREATE ACCOUNT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
