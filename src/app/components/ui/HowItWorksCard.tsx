import Image from "next/image";
import React from "react";

interface HowItWorksCardProps {
  idx: number | string;
  title: string;
  description: string;
  imagePath: string;
}

export const HowItWorksCard: React.FC<HowItWorksCardProps> = ({
  idx,
  title,
  description,
  imagePath,
}) => {
  return (
    <div
      className="
     border border-white/20 rounded-[10px] p-5 bg-gradient-to-b from-white/6 to-white/2'
      "
    >
      <div className="flex items-center gap-4 mb-3">
        <span
          className="
    w-8 h-8               
    flex items-center justify-center 
  bg-white text-black
    rounded-full 
    font-semibold
  "
        >
          {idx}
        </span>

        <h6>{title}</h6>
      </div>

      <div className="w-full h-[280px] relative mb-3">
        <Image src={imagePath} alt={title} fill className="object-contain" />
      </div>

      <p className="">{description}</p>
    </div>
  );
};
