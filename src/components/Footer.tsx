import React from "react";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <div className="w-full bg-[#263238]">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          <div className="flex flex-col items-center md:items-start gap-12 md:w-1/4">
            <img
              src="/assets/footerlogo.svg"
              alt="logo"
              className="w-[154.49px] h-[24px]"
            />
            <div className="flex flex-col md:flex-row md:gap-x-8 items-center">
              <span className="text-[#F5F7FA] text-center md:text-left font-normal text-sm leading-5">
                Copyright © 2024 Nexcent Ltd.
              </span>
              <span className="text-[#F5F7FA] text-center md:text-left font-normal text-sm leading-5">
                All rights reserved
              </span>
            </div>
            <div className="flex gap-4 mt-4">
              <img
                src="/assets/insta.svg"
                alt="instagram"
                className="w-[32px] h-[32px]"
              />
              <img
                src="/assets/explore.svg"
                alt="explore"
                className="w-[32px] h-[32px]"
              />
              <img
                src="/assets/twitter.svg"
                alt="twitter"
                className="w-[32px] h-[32px]"
              />
              <img
                src="/assets/youtube.svg"
                alt="youtube"
                className="w-[32px] h-[32px]"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-x-12 w-full md:w-auto">
            <div className="flex flex-col gap-4 md:w-1/3">
              <span className="font-semibold text-lg leading-7 text-white">
                Company
              </span>
              <div className="flex flex-col gap-2">
                <span className="font-normal text-sm leading-5 text-[#F5F7FA]">
                  About us
                </span>
                <span className="font-normal text-sm leading-5 text-[#F5F7FA]">
                  Blog
                </span>
                <span className="font-normal text-sm leading-5 text-[#F5F7FA]">
                  Contact us
                </span>
                <span className="font-normal text-sm leading-5 text-[#F5F7FA]">
                  Pricing
                </span>
                <span className="font-normal text-sm leading-5 text-[#F5F7FA]">
                  Testimonials
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:w-1/3">
              <span className="font-semibold text-lg leading-7 text-white">
                Support
              </span>
              <div className="flex flex-col gap-2">
                <span className="font-normal text-sm leading-5 text-[#F5F7FA]">
                  Help center
                </span>
                <span className="font-normal text-sm leading-5 text-[#F5F7FA]">
                  Terms of service
                </span>
                <span className="font-normal text-sm leading-5 text-[#F5F7FA]">
                  Legal
                </span>
                <span className="font-normal text-sm leading-5 text-[#F5F7FA]">
                  Privacy policy
                </span>
                <span className="font-normal text-sm leading-5 text-[#F5F7FA]">
                  Status
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:w-1/3">
              <span className="font-semibold text-lg leading-7 text-white">
                Stay up to date
              </span>
              <div className="relative">
                <Input
                  disabled
                  placeholder="Your email address"
                  className="w-full h-10 lg:w-[150px] rounded-md !border-none bg-[#515b60] text-white placeholder-[#F5F7FA] px-4"
                />
                <img
                  src="/assets/share.svg"
                  alt="arrow"
                  className="absolute top-2 right-2 w-4 h-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
