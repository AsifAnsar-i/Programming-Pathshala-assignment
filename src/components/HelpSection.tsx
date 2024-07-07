"use client";
import React, { useState, useEffect, useRef } from "react";
import { Club } from "lucide-react";
import Image from "next/image";

interface HelpSectionProps {

}

const HelpSection: React.FC<HelpSectionProps> = () => {

  const [members, setMembers] = useState<number>(0);
  const [clubs, setClubs] = useState<number>(0);
  const [eventBookings, setEventBookings] = useState<number>(0);
  const [payments, setPayments] = useState<number>(0);

 
  const sectionRef = useRef<HTMLDivElement>(null);


  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          animateCounters();
          observer.unobserve(sectionRef.current!);
        }
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

 
  const animateCounters = () => {
    const animate = (targetValue: number, setterFunction: React.Dispatch<React.SetStateAction<number>>) => {
      let start = 0;
      const step = Math.ceil(targetValue / 100); 
      const timer = setInterval(() => {
        start += step;
        setterFunction(start);
        if (start >= targetValue) {
          clearInterval(timer);
          setterFunction(targetValue);
        }
      }, 20); 
    };


    animate(2245341, setMembers);
    animate(46328, setClubs);
    animate(828867, setEventBookings);
    animate(1926436, setPayments);
  };

  return (
    <div ref={sectionRef} className="w-full h-auto bg-[#F5F7FA] py-10 lg:py-14">
      <div className="flex flex-col lg:flex-row items-center justify-around px-6 lg:px-14">
        <div className="flex flex-col gap-6 lg:gap-1 max-w-full lg:max-w-[540px]">
          <p className="font-semibold text-2xl lg:text-3xl text-[#4D4D4D] leading-tight text-center lg:text-start">
            Helping a local business reinvent itself
          </p>
          <p className="font-semibold text-2xl lg:text-3xl text-[#4CAF4F] leading-tight text-center lg:text-start">
            with hard work and dedication
          </p>
          <p className="font-normal text-[#18191F] text-xs lg:text-sm leading-6 text-center lg:text-start">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-20 mt-6 lg:mt-0">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/grp.svg"
              alt="help"
              className="w-12 h-12 lg:w-[48px] lg:h-[48px]"
            />
            <div className="flex flex-col">
              <p className="font-semibold text-lg lg:text-[25px] text-[#4D4D4D] leading-tight">
                {isIntersecting ? members : 0}
              </p>
              <p className="font-normal text-[#717171] text-sm lg:text-base leading-6">
                Members
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Club className="w-12 h-12 lg:w-[48px] lg:h-[48px] text-[#4CAF4F]" />
            <div className="flex flex-col">
              <p className="font-semibold text-lg lg:text-[25px] text-[#4D4D4D] leading-tight">
                {isIntersecting ? clubs : 0}
              </p>
              <p className="font-normal text-[#717171] text-sm lg:text-base leading-6">
                Clubs
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/assets/click.svg"
              alt="help"
              className="w-12 h-12 lg:w-[48px] lg:h-[48px]"
            />
            <div className="flex flex-col">
              <p className="font-semibold text-lg lg:text-[25px] text-[#4D4D4D] leading-tight">
                {isIntersecting ? eventBookings : 0}
              </p>
              <p className="font-normal text-[#717171] text-sm lg:text-base leading-6">
                Event Bookings
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/assets/card.svg"
              alt="help"
              className="w-12 h-12 lg:w-[48px] lg:h-[48px]"
            />
            <div className="flex flex-col">
              <p className="font-semibold text-lg lg:text-[25px] text-[#4D4D4D] leading-tight">
                {isIntersecting ? payments : 0}
              </p>
              <p className="font-normal text-[#717171] text-sm lg:text-base leading-6">
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
