"use client";

import { useTheme } from "@/app/context/ThemeProvider";
import { HeroCardContainerLeft, HeroCardContainerRight } from "@/app/utils/SvgContainer";
import { Upload, Leaf, TicketCheck, Truck, CloudUpload, Funnel } from "lucide-react";
import { TextSection } from "../ui/SectionText";
import { IconButton } from "../element/IconButton";
import { HeroCard } from "../ui/HeroCard";


export const HeroSection = () => {
  const { toggleTheme } = useTheme();
const colors = [
  "#EF4444", // Red (vibrant)
  "#F97316", // Orange
  "#FACC15", // Yellow
  "#22C55E", // Green
  "#06B6D4", // Cyan
  "#3B82F6", // Blue
  "#8B5CF6", // Violet
  "#EC4899", // Pink
];

  const cards = [
    {
      Container: (
        <HeroCardContainerLeft
          className="w-full h-full"
          imagePath="/assets/hero/card_1_bg.png"
        />
      ),
      icon: <Leaf size={30} />,
      title: "Best Quality Cloth",
      description: "Only the finest fabrics, crafted for lasting comfort.",
      height: "h-full",
    },
    {
      Container: (
        <HeroCardContainerLeft
          className="w-full h-full"
          imagePath="/assets/hero/card_2_bg.png"
        />
      ),
      title: "Trusted by Thousands",
      description: "Backed by real users",
      height: "h-[90%]",
      icon:<TicketCheck size={30}/>
    },
   {
  Container: (
    <div className="w-full bg-black rounded-[30px] py-4 px-3 h-full flex flex-col gap-2 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/hero/card_3_bg.png')" }}

    >
      {/*  */}
      <p className="font-semibold text-start flex gap-2 items-center">
        <Funnel size={30}/>
        Infinite Color Choices
      </p>

      {/* Row of  */}
      <div className="flex flex-wrap justify-between  gap-2">
        {colors.map(
          (color, i) => (
            <div
              key={i}
              className="w-[20px] h-[20px] rounded-full"
              style={{ backgroundColor: color }}
            />
          )
        )}
      </div>
    </div>
  ),
  height: "h-[70%]",
},

    {
      Container: (
        <HeroCardContainerRight
          className="w-full h-full"
          imagePath="/assets/hero/card_4_bg.png"
        />
      ),
      height: "h-[90%]",
            title: "Upload & Match Colors",
      description: "Simply upload an image, pick your shade, and go",
      icon:<CloudUpload size={30}/>
    },
    {
      Container: (
        <HeroCardContainerRight
          className="w-full h-full"
          imagePath="/assets/hero/card_5_bg.png"

        />
      ),
      height: "h-full",
            title: "Fast Delivery",
      description: "Quick, safe, and straight to your doorstep.",
      icon:<Truck size={30}/>
    },
  ];

  return (
    <div>
      {/* Top Text + Button */}
      <div className="flex flex-col gap-6 items-center relative z-10">
        <TextSection
          heading={{
            as: "h4",
            text: "Your Online Matching Center Color Match in One Click",
            breakpoints: [4],
          }}
          subtext={{
            as: "h6",
            text: "Instantly extract the perfect shade, add it to your cart, and make it yours.",
            breakpoints: [7],
          }}
        />

        <IconButton
          title="Upload Image"
          icon={Upload}
          onClick={toggleTheme}
          variant="primary"
        />
      </div>

      <div className="-mt-6 grid grid-cols-3 lg:grid-cols-5 gap-4 w-full">
        {cards.map((card, i) => (
          <div key={i} className="flex items-end w-full">
            <HeroCard
              Container={card.Container}
              icon={card.icon}
              title={card.title}
              description={card.description}
              height={card.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
