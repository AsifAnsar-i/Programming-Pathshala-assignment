import React from "react";

const Community = () => {
  return (
    <div className="w-full h-auto py-6">
      <div className="flex flex-col gap-6 sm:gap-8 py-6">
        <div className="flex flex-col text-center gap-2">
          <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#4D4D4D] leading-tight lg:leading-[44px]">
            Manage your entire community
          </p>
          <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#4D4D4D] leading-tight lg:leading-[44px]">
            in a single system
          </p>
          <p className="font-normal text-[#18191F] text-sm sm:text-base lg:text-lg leading-6 text-center mt-3">
            Who is Nextcent suitable for?
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-10 lg:px-20">
          {[
            {
              src: "/assets/commu1.svg",
              title: "Membership Organisations",
              description:
                "Our membership management software provides full automation of membership renewals and payments",
            },
            {
              src: "/assets/commu2.svg",
              title: "National Associations",
              description:
                "Our membership management software provides full automation of membership renewals and payments",
            },
            {
              src: "/assets/commu3.svg",
              title: "Clubs And Groups",
              description:
                "Our membership management software provides full automation of membership renewals and payments",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col max-w-xs gap-2 items-center border shadow-sm rounded-lg p-6"
            >
              <img src={item.src} alt="community" className="w-16 h-14" />
              <p className="font-semibold text-xl sm:text-2xl lg:text-3xl text-[#4D4D4D] leading-tight text-center">
                {item.title}
              </p>
              <p className="font-normal text-[#18191F] text-xs sm:text-sm lg:text-base leading-5 sm:leading-6 text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
