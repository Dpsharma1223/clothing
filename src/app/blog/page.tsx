"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { blogs } from "../../../public/data/blog";

const ITEMS_PER_PAGE = 4;

export default function BlogLists() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);

  const paginatedBlogs = blogs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="bg-white">
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="relative w-full h-full overflow-hidden bg-[url(/banners/shopbanner.jpeg)] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 nset-0 text-center px-6 py-15">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[2.7em] font-semibold text-white mb-4"
            >
              News
            </motion.h1>
          </div>
        </motion.div>
      </div>

      <section className="bg-primary text-white py-16 md:py-26 px-4 md:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {paginatedBlogs.map((blog) => (
              <div key={blog.id}>
                <div className="overflow-hidden w-full">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full max-w-[850px] h-full max-h-[400px] object-cover rounded-md transition duration-700 hover:scale-105"
                  />
                </div>
                <p className="text-sm text-black uppercase tracking-widest mt-7 mb-2">
                POST BY {blog.author} - {blog.date} &nbsp;
                </p>
                <h2 className="text-lg md:text-2xl font-[450] text-black mb-2">
                  {blog.title}
                </h2>
                
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-block text-sm underline text-black"
                >
                  Continue Reading
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center gap-2 pt-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="border border-dark-grey px-3 py-2 hover:border-hero hover:bg-hero"
              disabled={currentPage === 1}
            >
              ←
            </button>
            {[...Array(totalPages)].map((_, idx) => {
              const pageNum = idx + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-4 py-2 border ${
                    currentPage === pageNum
                      ? "border-hero bg-hero"
                      : "border-dark-grey hover:border-hero hover:bg-hero"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="border border-dark-grey px-3 py-2 hover:border-hero hover:bg-hero"
              disabled={currentPage === totalPages}
            >
              →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
