"use client";

import { Upload } from "lucide-react";
import { IconButton } from "./components/element/IconButton";
import { TextSection } from "./components/ui/SectionText";
import { useTheme } from "./context/ThemeProvider";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center pt-4 gap-6 px-4 text-center">
      <div className="flex flex-col gap-6 items-center">
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
    
    </div>
  );
}
