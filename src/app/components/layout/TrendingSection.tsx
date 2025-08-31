// "use client";

// import Image from "next/image";
// import React from "react";
// import { IconButton } from "../element/IconButton";
// import { ArrowRight } from "lucide-react";

// const colors = [
//   "/assets/colors/color1.png",
//   "/assets/colors/color2.png",
//   "/assets/colors/color3.png",
//   "/assets/colors/color4.png",
//   "/assets/colors/color5.png",
//   "/assets/colors/color6.png",
//   "/assets/colors/color7.png",
//   "/assets/colors/color8.png",
//   "/assets/colors/color9.png",
// ];

// export const TrendingColorsSection = () => {
//   return (
//     <section className="relative flex flex-col items-center justify-center py-20 overflow-hidden">
//       {/* Arc Container */}
//       <div className="relative w-[clamp(300px,80vw,700px)] h-[clamp(300px,80vw,700px)]">
//         {colors.map((src, index) => {
//           const angle = (index / (colors.length - 1)) * Math.PI; // spread across 180°
//           const radius = 0.45; // % of container size for responsiveness
//           const size = "clamp(70px, 20vw, 140px)";

//           return (
//             <div
//               key={index}
//               className="absolute rounded-lg overflow-hidden shadow-md"
//               style={{
//                 width: size,
//                 height: "clamp(50px, 15vw, 100px)",
//                 top: `calc(50% - ${radius * 100}% * ${Math.sin(angle)})`,
//                 left: `calc(50% + ${radius * 100}% * ${Math.cos(angle)})`,
//                 transform: "translate(-50%, -50%) rotate(-8deg)",
//               }}
//             >
//               <Image
//                 src={src}
//                 alt={`Trending color ${index + 1}`}
//                 fill
//                 className="object-cover rounded-lg"
//               />
//             </div>
//           );
//         })}

//         {/* Center Text */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-[85%] sm:max-w-lg">
//           <h4 >
//             This Season’s Trending Festive Colors
//           </h4>
//           <p >
//             From bold statements to timeless elegance, explore our curated
//             collection of festive colors making waves this season. Perfectly
//             suited for every celebration, style, and story.
//           </p>
        //   <IconButton
        //     title="Order Your Festive Favorite"
        //     icon={ArrowRight}
        //     className="w-fit px-6 sm:px-8"
        //   />
//         </div>
//       </div>

//       {/* Bottom Features */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 sm:mt-24 text-center px-6">
//         <div>
//           <h6 className="font-semibold">Curated for the Season</h6>
//           <p className="text-sm text-[var(--muted-color)]">
//             Handpicked colors inspired by the latest festive fashion trends.
//           </p>
//         </div>
//         <div>
//           <h6 className="font-semibold">Quick & Easy Ordering</h6>
//           <p className="text-sm text-[var(--muted-color)]">
//             Choose your favorite shade and get delivered in no time.
//           </p>
//         </div>
//         <div>
//           <h6 className="font-semibold">Endless Style Options</h6>
//           <p className="text-sm text-[var(--muted-color)]">
//             From rich solids to playful patterns — all in premium fabrics.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };
"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { IconButton } from "../element/IconButton";
import { ArrowRight } from "lucide-react";

const colors = [
  "/assets/colors/color1.png",
  "https://imgs.search.brave.com/BXn8miWdTnpTrmLkC1w0Xnb3OoKkYfqjiX2UvwIkB8E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu...",
  "https://imgs.search.brave.com/pw59Rxc4FDMoYc6Bom5VV2jWUDTsCvZM1e8ad8NLEck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu...",
  "https://media.istockphoto.com/id/1280738777/photo/lots-of-empty-space-for-lettering-and-design-empty-light-green-flat-minimalistic-background.jpg?s=1024x1024&w=is&k=20&c=lmc2BDlNVzusmM3I-FqM2lMpc0x6daBOwoIq7fOw2w0=",
  "https://media.istockphoto.com/id/928376866/photo/top-view-of-dark-green-velour-fabric.jpg?s=1024x1024&w=is&k=20&c=9zMEQ7I_8yMorNmpDvD_LWhBgS3g9UB3Z_co_hSqXG4=",
  "https://media.istockphoto.com/id/1169630303/photo/blue-textured-background.jpg?s=1024x1024&w=is&k=20&c=E8l7Nf49aP7AjUVLvVGKKtNDroo1Q_x8DrUVw-KlqDc=",
];

export const TrendingColorsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setRadius(width / 2.5); // radius proportional to width
      }
    }
    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center py-20">
      {/* Arc container */}
      <div
        ref={containerRef}
        className="relative w-full h-[70vh] flex items-center justify-center"
      >
        {radius > 0 &&
          colors.map((src, index) => {
            const angle = (index / (colors.length - 1)) * Math.PI; // 0 → 180°
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
          <div
  key={index}
  className="absolute w-[120px] h-[90px] rounded-lg overflow-hidden shadow-md relative"
  style={{
    transform: `translate(${x}px, ${-y}px)`,
  }}
>
  <Image
    src={src}
    alt={`Trending color ${index + 1}`}
    fill
    className="object-cover rounded-lg"
  />
</div>

            );
          })}

        {/* Center Text */}
        <div className="absolute flex flex-col items-center justify-center text-center w-[70%] max-w-xl">
          <h4 className="text-2xl md:text-3xl font-bold mb-4">
            This Season’s Trending <br /> Festive Colors
          </h4>
          <p className="text-sm md:text-lg text-[var(--muted-color)] mb-6">
            From bold statements to timeless elegance, explore our curated
            collection of festive colors making waves this season.
          </p>
          <IconButton
            title="Order Your Festive Favorite"
            icon={ArrowRight}
            className="px-6 md:px-8"
          />
        </div>
      </div>
    </section>
  );
};
