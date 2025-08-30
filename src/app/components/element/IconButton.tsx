"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface IconButtonProps {
  title: string;
  icon: LucideIcon;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary"; // You can expand this if needed
}

export const IconButton: React.FC<IconButtonProps> = ({
  title,
  icon: Icon,
  onClick,
  className = "",
  variant = "primary",
}) => {
  const baseStyle =
    "inline-flex items-center gap-2 px-6 py-2 rounded-full cursor-pointer ";

  const variants = {
    primary: "button-color text-white button-hover-color",
    secondary: "bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      <span>{title}</span>
            <Icon className="w-5 h-5" />

    </button>
  );
};
