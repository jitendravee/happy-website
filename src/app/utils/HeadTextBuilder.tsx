import React from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

interface HeadTextBuilderProps {
  as?: HeadingLevel;
  text: string;
  className?: string;
  breakpoints?: number[];
}

export const HeadTextBuilder: React.FC<HeadTextBuilderProps> = ({
  as: Tag = "p",
  text,
  className = "",
  breakpoints = [],
}) => {
  const words = text.split(" ");
  const elements: React.ReactNode[] = [];

  words.forEach((word, index) => {
    elements.push(word);
    if (index < words.length - 1) {
      elements.push(" ");
    }
    if (breakpoints.includes(index + 1)) {
      elements.push(<br key={`br-${index}`} />);
    }
  });

  return <Tag className={`primary-text  ${className} text-center`}>{elements}</Tag>;
};
