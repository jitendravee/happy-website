import Image from "next/image";
import React from "react";

export const SvgContainer = () => {
  return <div>SvgContainer</div>;
};
export const MainLogo = () => {
  return (
    <Image
      src="assets/logo/main_logo.svg"
      alt="main_happy_logo"
      width={80}
      height={50}
    />
  );
};
export const HeroCardContainerRight = ({ className = "",imagePath ="" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 290 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Define the clipping path */}
      <defs>
        <clipPath id="clip-path-right">
          <path d="M282 30C282 13.4315 268.569 0 252 0H169.825C159.797 0 150.607 5.59327 146 14.5V14.5C141.393 23.4067 132.203 29 122.175 29H30C13.4315 29 0 42.4315 0 59V450C0 466.569 13.4315 480 30 480H252C268.569 480 282 466.569 282 450V30Z" />
        </clipPath>
      </defs>

      {/* Base fill (black) */}
      <path
        d="M282 30C282 13.4315 268.569 0 252 0H169.825C159.797 0 150.607 5.59327 146 14.5V14.5C141.393 23.4067 132.203 29 122.175 29H30C13.4315 29 0 42.4315 0 59V450C0 466.569 13.4315 480 30 480H252C268.569 480 282 466.569 282 450V30Z"
        fill="black"
      />

      {/* Gradient overlay */}
      <path
        d="M282 30C282 13.4315 268.569 0 252 0H169.825C159.797 0 150.607 5.59327 146 14.5V14.5C141.393 23.4067 132.203 29 122.175 29H30C13.4315 29 0 42.4315 0 59V450C0 466.569 13.4315 480 30 480H252C268.569 480 282 466.569 282 450V30Z"
        fill="url(#paint0_linear_218_351)"
      />

      {/* Background image clipped */}
      <image
        href={imagePath} // Replace with your image
        width="290"
        height="480"
        clipPath="url(#clip-path-right)"
        preserveAspectRatio="none"
      />

      {/* Gradient definition */}
      <defs>
        <linearGradient
          id="paint0_linear_218_351"
          x1="141"
          y1="0"
          x2="141"
          y2="480"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0.5" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const HeroCardContainerLeft = ({ className = "",imagePath ="" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 290 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Define the clipping path */}
      <defs>
        <clipPath id="clip-path">
          <path d="M0 30C0 13.4315 13.4315 0 30 0H112.175C122.203 0 131.393 5.59327 136 14.5V14.5C140.607 23.4067 149.797 29 159.825 29H252C268.569 29 282 42.4315 282 59V450C282 466.569 268.569 480 252 480H30C13.4315 480 0 466.569 0 450V30Z" />
        </clipPath>
      </defs>

      {/* Image inside the SVG, clipped by the path */}

      <path
        d="M0 30C0 13.4315 13.4315 0 30 0H112.175C122.203 0 131.393 5.59327 136 14.5V14.5C140.607 23.4067 149.797 29 159.825 29H252C268.569 29 282 42.4315 282 59V450C282 466.569 268.569 480 252 480H30C13.4315 480 0 466.569 0 450V30Z"
        fill="black"
      />
      <path
        d="M0 30C0 13.4315 13.4315 0 30 0H112.175C122.203 0 131.393 5.59327 136 14.5V14.5C140.607 23.4067 149.797 29 159.825 29H252C268.569 29 282 42.4315 282 59V450C282 466.569 268.569 480 252 480H30C13.4315 480 0 466.569 0 450V30Z"
        fill="url(#paint0_linear_218_351)"
      />

      <image
        href={imagePath} // Replace with the correct image path
        width="290"
        height="480"
        clipPath="url(#clip-path)" // Apply the clipping path
        preserveAspectRatio="none"
      />
      <defs>
        <linearGradient
          id="paint0_linear_218_351"
          x1="141"
          y1="0"
          x2="141"
          y2="480"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0.5" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
