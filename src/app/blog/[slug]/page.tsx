"use client";

import { useParams } from "next/navigation";
import { blogs } from "../../../../public/data/blog";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

export default function BlogPost() {
  const { slug } = useParams();

  const blog = blogs.find((post) => post.slug === slug);

  if (!blog) {
    return <p>Blog post not found!</p>;
  }

  return (
    <>
      
      <section className="bg-primary px-8 md:px-24 pt-16 md:pt-26">
        <div className="2xl:container 2xl:mx-auto flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center mb-10">
            <Link
              href="/blog"
              className="border rounded-md px-2 shadow-sm mb-1"
            >
              News
            </Link>

            <h1 className="text-3xl md:text-4xl mb-3 text-center leading-tight">
              {blog.title}
            </h1>

            <div className="text-sm uppercase text-center mb-4">
              <span className="font-medium ">{blog.author} &nbsp; </span>-
              &nbsp; {blog.date}
            </div>
          </div>

          <div className="w-full h-full overflow-hidden px-10">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-center rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-primary px-8 md:px-24 pt-14">
        <div className="container mx-auto max-w-5xl flex flex-col justify-center items-center">
          <div className=" flex flex-col justify-center items-center">
            <div>
              <p className="text-dark-grey mb-6">{blog.secondPara}</p>
              <p className="text-dark-grey mb-6">{blog.thirdPara}</p>
            </div>

            <div>
              <p className="text-2xl mb-10 px-5">
                " {blog.blockquote} " &nbsp;&nbsp;{" "}
                <span className="text-sm whitespace-nowrap text-dark-grey">
                  - {blog.quoteby}
                </span>
              </p>
            </div>
          </div>

          <p className="text-dark-grey">{blog.fourthPara}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-14 overflow-hidden">
          <img
            src={blog.img1}
            alt={blog.title}
            className="w-full h-full object-center rounded-2xl object-cover"
          />

          <img
            src={blog.img2}
            alt={blog.title}
            className="w-full h-full object-center rounded-2xl object-cover"
          />
        </div>

        <div>
              <p className="text-dark-grey mb-6">{blog.fifthPara}</p>
              <p className="text-dark-grey mb-6">{blog.sixthPara}</p>
            </div>

        </div>
      </section>
      <section className="bg-primary px-8 md:px-24 pt-10 pb-35">
        <div className="container mx-auto max-w-5xl">
          <div className="flex gap-5 justify-end mt-5">
            <h3 className="font-medium mb-4">Share: </h3>
            <div className="flex gap-3 mt-1">
              <a
                href="#"
                className="text-lg hover:text-dark-grey transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-lg hover:text-dark-grey transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-lg hover:text-dark-grey transition-colors duration-300"
              >
                <FaPinterestP />
              </a>
              <a
                href="#"
                className="text-lg hover:text-dark-grey transition-colors duration-300"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
