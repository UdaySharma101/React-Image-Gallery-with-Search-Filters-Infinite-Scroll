import React from "react";
import { BadgeCheck, Sparkles, Heart, Zap } from "lucide-react";

const features = [
  {
    icon: <BadgeCheck color="#5788ea" />,
    title: "100% Free",
    desc: "No copyright restrictions",
  },
  {
    icon: <Sparkles color="#0aae5f" />,
    title: "High Quality",
    desc: "Stunning high resolution",
  },
  {
    icon: <Heart color="#f50f6b" />,
    title: "Made with ❤️",
    desc: "By photographers",
  },
  {
    icon: <Zap color="#d6e84f" />,
    title: "Updated Daily",
    desc: "Fresh new photos",
  },
];

const HeroDiv = () => {
  return (
    <div className="w-full flex justify-center relative z-10 mt-10">
      <div className="overflow-hidden w-[92%] bg-gray-100 shadow-xl rounded-2xl py-5 ">
        
        {/* Marquee Track */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          
          {/* First Copy */}
          <div className="flex shrink-0 gap-10 px-5">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 min-w-[250px]"
              >
                {item.icon}

                <div>
                  <h1 className="font-bold text-sm sm:text-base">
                    {item.title}
                  </h1>

                  <p className="text-gray-500 text-xs sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Copy */}
          <div className="flex shrink-0 gap-10 px-5">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 min-w-[250px]"
              >
                {item.icon}

                <div>
                  <h1 className="font-bold text-sm sm:text-base">
                    {item.title}
                  </h1>

                  <p className="text-gray-500 text-xs sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroDiv;