import React from "react";
import { TextSection } from "../ui/SectionText";
import { ProductCard } from "../ui/ProductCard";

const products = [
  {
    title: "Ashtar",
    description:
      "Luxurious weave with breathable softness, perfect for versatile styling from relaxed everyday looks to formal occasions.",
    colors: ["#F59E0B", "#2563EB", "#9333EA", "#16A34A", "#000000"],
    composition: [
      { percentage: "80%", label: "Cotton" },
      { percentage: "20%", label: "Polyester" },
    ],
    imagePath: "/assets/product/ashtar.png",
  },
  {
    title: "Butter Crap",
    description:
      "Smooth, buttery texture and durable comfort, crafted for effortless wear in every season and daily lifestyle.",
    colors: [
      "#F59E0B",
      "#2563EB",
      "#9333EA",
      "#16A34A",
      "#000000",
      "#FFFFFF",
    ],
    composition: [
      { percentage: "80%", label: "Cotton" },
      { percentage: "20%", label: "Polyester" },
    ],
    imagePath: "/assets/product/crap.png",
  },
  {
    title: "Plain Satin",
    description:
      "Lustrous finish with elegant drape, designed for standout moments, special events, and timeless style statements.",
    colors: [
      "#F59E0B",
      "#2563EB",
      "#9333EA",
      "#16A34A",
      "#000000",
      "#FFFFFF",
    ],
    composition: [
      { percentage: "80%", label: "Cotton" },
      { percentage: "20%", label: "Polyester" },
    ],
    imagePath: "/assets/product/satin.png",
  },
];

export const ProductsLayout = () => {
  return (
    <section className="w-full flex flex-col gap-10">
      <TextSection
        heading={{
          as: "h5",
          text: "Meet Your Matching Products",
          breakpoints: [],
        }}
        subtext={{
          as: "h6",
          text: "Explore our curated selection, crafted to perfectly match your style and preferences.",
          breakpoints: [],
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            colors={product.colors}
            composition={product.composition}
            imagePath={product.imagePath}
            onClick={() => console.log(`${product.title} clicked!`)}
          />
        ))}
      </div>
    </section>
  );
};
