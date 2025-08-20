
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center">
      {/* Illustration */}
      <div className="relative w-full max-w-md mb-8">
        <Image
          src="/images/404.jpg"
          alt="Page Not Found"
          width={500}
          height={400}
          className="mx-auto"
          priority
        />
      </div>

      {/* Text */}
      <h1 className="text-4xl font-semibold text-gray-900 mb-2">Page Not Found</h1>
      <p className="text-dark-grey mb-6">
        Please back to homepage or check our offer
      </p>

      {/* Button */}
      <Link
        href="/"
        className="inline-flex items-center border border-black gap-2 bg-black text-white px-12 py-1.5 text-lg rounded-full font-medium shadow hover:bg-white hover:text-black transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back To Homepage
      </Link>
    </div>
  );
}
