"use client";

import { useParams } from "next/navigation";
import { portfolios } from "../../../../public/data/portfolio";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

export default function BlogPost() {
  const { slug } = useParams();

  const portfolio = portfolios.find((post) => post.slug === slug);

  if (!portfolio) {
    return <p>Blog post not found!</p>;
  }

  return (
    <>
      <section className="bg-primary px-8 md:px-24 pt-16 md:pt-26">
        <div className="2xl:container 2xl:mx-auto flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center mb-8">
            <Link
              href="/blog"
              className="border rounded-md px-2 shadow-sm mb-2"
            >
              {portfolio.category}
            </Link>

            <h1 className="text-3xl md:text-4xl mb-2 font-medium text-center leading-tight">
              {portfolio.title}
            </h1>

            <div className="text-sm uppercase text-center">
              <span className="font-medium ">{portfolio.author} &nbsp; </span>-
              &nbsp; {portfolio.pub_date} &nbsp; - &nbsp; {portfolio.comments}{" "}
              COMMENTS
            </div>
          </div>

          <div className="w-full h-full overflow-hidden px-10">
            <img
              src={portfolio.image}
              alt={portfolio.title}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        <div className="container mx-auto max-w-4xl flex flex-col justify-center items-center mt-12">
          <div className=" flex flex-col justify-center items-center">
            <p className="text-dark-grey mb-6">{portfolio.desc}</p>
            <div className="bg-light-grey/30 rounded-xl p-6 w-full mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {/* Client */}
                <div>
                  <p className="text-dark-grey text-[0.72rem]">Client</p>
                  <p className="">
                    Frank Angel/FA Corporation
                  </p>
                </div>

                {/* Role */}
                <div>
                  <p className="text-dark-grey text-[0.72rem]">Role</p>
                  <p className="">Branding</p>
                </div>

                {/* Date */}
                <div>
                  <p className="text-dark-grey text-[0.72rem]">Date</p>
                  <p className="">Mar 25 2023</p>
                </div>
              </div>
            </div>
            <p className="text-dark-grey">{portfolio.secondPara}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 overflow-hidden">
            <img
              src={portfolio.img1}
              alt={portfolio.title}
              className="w-full h-full object-center object-cover"
            />

            <img
              src={portfolio.img2}
              alt={portfolio.title}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <p className="text-dark-grey mb-6">{portfolio.thirdPara}</p>
        </div>
      </section>
      <section className="bg-primary px-8 md:px-24 pt-10 pb-35">
        <div className="container mx-auto max-w-4xl">
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
