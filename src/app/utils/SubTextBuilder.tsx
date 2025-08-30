import React from "react";

type SubingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

interface SubTextBuilderProps {
  as?: SubingLevel;
  text: string;
  className?: string;
  breakpoints?: number[];
}

export const SubTextBuilder: React.FC<SubTextBuilderProps> = ({
  as: Tag = "p", // changed from "body" to "p"
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

  return <Tag className={`secondary-text ${className} text-center`}>{elements}</Tag>;
};
