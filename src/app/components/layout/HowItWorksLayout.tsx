import React from "react";
import { TextSection } from "../ui/SectionText";
import { HowItWorksCard } from "../ui/HowItWorksCard";


const steps = [
  {
    idx: 1,
    title: "Upload & Pick Your Shade",
    description:
      "Snap or upload a photo. We detect your unique color in seconds.",
    imagePath: "/assets/how_it_works/upload.png",
  },
  {
    idx: 2,
    title: "Match & Add to Your Cart",
    description:
      "See fabrics that perfectly match your shade and add them to your cart.",
    imagePath: "/assets/how_it_works/cart.png",
  },
  {
    idx: 3,
    title: "Checkout & Celebrate Your Look",
    description: "Place your order and rock your perfectly matched look.",
    imagePath: "/assets/how_it_works/card.png",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="w-full flex flex-col gap-10">
      <TextSection
        heading={{
          as: "h5",
          text: "Find Your Perfect Fabric Match",
          breakpoints: [],
        }}
        subtext={{
          as: "h6",
          text: "in 3 Easy Steps",
          breakpoints: [],
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {steps.map((step) => (
          <HowItWorksCard
            key={step.idx}
            idx={step.idx}
            title={step.title}
            description={step.description}
            imagePath={step.imagePath}
          />
        ))}
      </div>
    </section>
  );
};
