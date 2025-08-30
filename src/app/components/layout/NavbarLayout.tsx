import { MainLogo } from "@/app/utils/SvgContainer";
import { CircleUserRound, ShoppingCart } from "lucide-react";
import React from "react";

const NAV_LINKS = ["Home", "How It Works", "Products", "Trending", "Store"];

export const NavbarLayout = () => {
  return (
    <nav className="p-4 secondary-bg w-full  flex items-center justify-between">
      {/* Wrapper to balance left, middle, right */}
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <MainLogo />
        </div>

        <ul className="flex gap-8 body absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((item) => (
            <li
              key={item}
              className=" cursor-pointer hover:text-primary-color transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>

        <ul className="flex gap-6 items-center flex-shrink-0">
          <li className="flex items-start gap-2 cursor-pointer hover:text-primary-color transition-colors">
            <ShoppingCart size={20} /> Cart
          </li>
          <li className="flex items-start gap-2 cursor-pointer hover:text-primary-color transition-colors">
            <CircleUserRound size={20} /> Account
          </li>
        </ul>
      </div>
    </nav>
  );
};
