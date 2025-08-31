import Image from "next/image";
import React from "react";
import { IconButton } from "../element/IconButton";
import { ArrowRight } from "lucide-react";

interface Composition {
  percentage: string;
  label: string;
}

interface ProductCardProps {
  colors: string[];
  title: string;
  description: string;
  composition: Composition[]; // updated here
  imagePath: string;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  colors,
  title,
  description,
  composition,
  imagePath,
  onClick,
}) => {
  return (
    <div className="border border-white/20 flex flex-col justify-between gap-2 text-start rounded-[10px] p-5 bg-gradient-to-b from-white/6 to-white/2">
      {/* Title + Colors */}
      <div className="flex justify-between items-start">
        <h5>{title}</h5>
        <div className="flex items-center -space-x-2">
          {colors.slice(0, 4).map((color, index) => (
            <span
              key={index}
              className="
        w-5 h-5 
        rounded-full 
        border-2 border-[var(--background)] 
        relative z-10
      "
              style={{ backgroundColor: color, zIndex: 10 - index }}
            />
          ))}
          {colors.length > 4 && (
            <span className="ml-3 text-sm text-[var(--muted-color)]">
              +{colors.length - 4}
            </span>
          )}
        </div>
      </div>

      <p className="caption">{description}</p>

      {/* Composition Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {composition.map((item, idx) => (
          <span
            key={idx}
            className="
                px-3 py-1 
                rounded-full
                bg-[#202121]
                border border-white/20
                caption
                flex items-center gap-1
              "
          >
            <span className="caption">{item.percentage}</span>
            <span className="caption">{item.label}</span>
          </span>
        ))}
      </div>

      {/* Image */}
      <div className="w-full h-[200px] relative mb-4">
        <Image
          src={imagePath}
          alt={title}
          fill
          className="object-contain rounded"
        />
      </div>

      {/* CTA Button */}
      <IconButton
        title="Find My Match"
        icon={ArrowRight}
        onClick={onClick}
        className="w-full"
      />
    </div>
  );
};
