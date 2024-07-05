import React from "react";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <div className="w-[1440px] h-[328px] bg-[#263238] mx-auto">
      <div className="py-16 flex items-center  justify-around">
        <div className="flex flex-col gap-[40px]">
          <img
            src="/assets/footerlogo.svg"
            alt="logo"
            className="w-[154.49px] h-[24px]"
          />
          <div className="flex flex-col gap-[8px]">
            <span className="text-[#F5F7FA] text-start font-normal text-sm leading-5">
              Copyright © 2020 Nexcent ltd.
            </span>
            <span className="text-[#F5F7FA] text-start font-normal text-sm leading-5">
              All rights reserved
            </span>
          </div>
          <div className="flex items-start gap-[16px]">
            <img
              src="/assets/insta.svg"
              alt="facebook"
              className="w-[32px] h-[32px]"
            />
            <img
              src="/assets/explore.svg"
              alt="facebook"
              className="w-[32px] h-[32px]"
            />
            <img
              src="/assets/twitter.svg"
              alt="facebook"
              className="w-[32px] h-[32px]"
            />
            <img
              src="/assets/youtube.svg"
              alt="facebook"
              className="w-[32px] h-[32px]"
            />
          </div>
        </div>
        <div className="flex w-[635px]  gap-[30px]">
          <div className="flex flex-col gap-[24px] mx-auto">
            <span className="font-semibold text-lg leading-7 text-white">
              Company
            </span>
            <div className="flex flex-col gap-[12px]">
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
          <div className="flex flex-col gap-[24px] mx-auto">
            <span className="font-semibold text-lg leading-7 text-white">
              Support
            </span>
            <div className="flex flex-col gap-[12px]">
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
          <div className="flex flex-col gap-[24px] mx-auto">
            <span className="font-semibold text-lg leading-7 text-white">
              Stay up to date
            </span>
            <div className="relative">
              <Input
                disabled
                placeholder="Your email address"
                className="w-[255px] h-[40px] rounded-[6px] !border-none  bg-[#515b60] placeholder:text-white"
              />
              <img
                src="/assets/share.svg"
                alt="arrow"
                className="absolute top-[10px] right-[10px] w-[18px] h-[18px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
