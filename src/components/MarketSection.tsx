import React from "react";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const MarketSection = () => {
  return (
    <div className="w-full h-[700px]">
      <div className="flex flex-col items-center gap-16 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-[628px] text-center mb-6">
          <p className="font-semibold text-3xl text-[#4D4D4D] leading-[44px]">
            Caring is the new marketing
          </p>
          <p className="font-normal text-[#18191F] text-sm leading-6">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="relative">
            <img
              src="/assets/img1.jpg"
              alt="hero"
              className="w-full rounded-[8px] object-cover"
            />
            <div className="absolute -bottom-20 left-0 right-0 bg-[#F5F7FA] px-4 py-5 w-[317px] mx-auto shadow-lg rounded-[8px]">
              <p className="text-[#717171] font-semibold text-lg mb-3">
                Creating Streamlined Safeguarding Processes with OneRen
              </p>
              <div className="flex items-center justify-center">
                <span className="text-[#4CAF4F]">Read more</span>
                <MoveRight className="text-[#4CAF4F] ml-2" size={24} />
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/assets/img2.jpg"
              alt="hero"
              className="w-full rounded-[8px] object-cover"
            />
            <div className="absolute -bottom-20 left-0 right-0 bg-[#F5F7FA] px-4 py-5 w-[317px]  mx-auto shadow-lg rounded-[8px]">
              <p className="text-[#717171] font-semibold text-lg mb-3">
                What are your safeguarding responsibilities and how can you
                manage them?
              </p>
              <div className="flex items-center justify-center">
                <span className="text-[#4CAF4F]">Read more</span>
                <MoveRight className="text-[#4CAF4F] ml-2" size={24} />
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/assets/img3.jpg"
              alt="hero"
              className="w-full rounded-[8px] object-cover"
            />
            <div className="absolute -bottom-20 left-0 right-0 bg-[#F5F7FA] px-4 py-5 w-[317px] mx-auto shadow-lg rounded-[8px]">
              <p className="text-[#717171] font-semibold text-lg mb-3">
                Revamping the Membership Model with Triathlon Australia
              </p>
              <div className="flex items-center justify-center">
                <span className="text-[#4CAF4F]">Read more</span>
                <MoveRight className="text-[#4CAF4F] ml-2" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSection;
