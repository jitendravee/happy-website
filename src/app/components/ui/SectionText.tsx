"use client";

import { HeadTextBuilder } from "@/app/utils/HeadTextBuilder";
import { SubTextBuilder } from "@/app/utils/SubTextBuilder";
import React from "react";


type SectionTextLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

interface TextSectionProps {
  heading: {
    as?: SectionTextLevel;
    text: string;
    breakpoints?: number[];
  };
  subtext: {
    as?: SectionTextLevel;
    text: string;
    breakpoints?: number[];
  };
  className?: string; 
}

export const TextSection: React.FC<TextSectionProps> = ({
  heading,
  subtext,
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-center gap-2 text-center ${className}`}>
      <HeadTextBuilder
        as={heading.as}
        text={heading.text}
        breakpoints={heading.breakpoints}
        className="font-bold"
      />
      <SubTextBuilder
        as={subtext.as}
        text={subtext.text}
        breakpoints={subtext.breakpoints}
      />
    </div>
  );
};
