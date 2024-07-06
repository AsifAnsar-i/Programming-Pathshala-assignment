import React from "react";

import {Club} from "lucide-react"
const HelpSection = () => {
  return (
    <div className="w-full h-[288px] bg-[#F5F7FA]">
      <div className="flex items-center justify-around py-14 px-14">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-[36px]  text-[#4D4D4D] leading-[44px] text-start">
            Helping a local
          </p>
          <p className="font-semibold text-[36px]  text-[#4CAF4F] leading-[44px] text-start">
            business reinvent itself
          </p>
          <p className="font-normal text-[#18191F]  text-xs leading-6 text-start">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="max-w-[540px] grid grid-cols-2 gap-x-20 gap-y-6">
          <div className="flex items-start  gap-3">
            <img
              src="/assets/grp.svg"
              alt="help"
              className="w-[48px] h-[48px] mt-3.5"
            />
            <div className="flex flex-col gap-1 ">
              <p className="font-semibold text-[25px]  text-[#4D4D4D] leading-[44px] text-start">
                2,245,341
              </p>
              <p className="font-normal text-[#717171]  text-sm leading-6 text-start">
                Members
              </p>
            </div>
          </div>
          <div className="flex items-start  gap-3">
          <Club className="w-[48px] h-[48px] mt-3.5 text-[#4CAF4F]" />
           
            <div className="flex flex-col ">
              <p className="font-semibold text-[25px]  text-[#4D4D4D] leading-[44px] text-start">
                46,328
              </p>
              <p className="font-normal text-[#717171]  text-sm leading-6 text-start">
                Clubs
              </p>
            </div>
          </div>
          <div className="flex items-start  gap-3">
            <img
              src="/assets/click.svg"
              alt="help"
              className="w-[48px] h-[48px] mt-3.5"
            />
            <div className="flex flex-col  ">
              <p className="font-semibold text-[25px]  text-[#4D4D4D] leading-[44px] text-start">
                828,867
              </p>
              <p className="font-normal text-[#717171]  text-sm leading-6 text-start">
                Event Bookings
              </p>
            </div>
          </div>
          <div className="flex items-start  gap-3">
            <img
              src="/assets/card.svg"
              alt="help"
              className="w-[48px] h-[48px] mt-3.5"
            />
            <div className="flex flex-col  ">
              <p className="font-semibold text-[25px]  text-[#4D4D4D] leading-[44px] text-start">
                1,926,436
              </p>
              <p className="font-normal text-[#717171]  text-sm leading-6 text-start">
                Payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
