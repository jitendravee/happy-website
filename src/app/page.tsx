"use client";

import { MoveUpRight } from "lucide-react";
import { IconButton } from "./components/element/IconButton";
import { HeroSection } from "./components/layout/HeroLayout";
import { HowItWorksSection } from "./components/layout/HowItWorksLayout";
import { ProductsLayout } from "./components/layout/ProductsLayout";
import { TrendingColorsSection } from "./components/layout/TrendingSection";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-10 gap-10 text-center max-w-7xl mx-auto">
      <HeroSection />
     <HowItWorksSection />
     <IconButton title="Try Now" icon={MoveUpRight } />
     <ProductsLayout />
     <TrendingColorsSection />

      </div>
  );
}
