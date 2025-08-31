import React from "react";

interface HeroCardProps {
  Container: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  height?: string; 
}

export const HeroCard: React.FC<HeroCardProps> = ({
  Container,
  icon,
  title,
  description,
  height = "h-full", // fallback
}) => {
  return (
    <div className={`relative flex flex-col w-full ${height}`}>
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        {/* Background content */}
        {Container}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Content */}
        {(title || description || icon) && (
          <div className="absolute bottom-0 left-0 right-0 text-start gap-4 py-4 px-3 flex flex-row text-white z-10">
            {icon && <div>{icon}</div>}
            <div className="flex flex-col gap-1">
              {title && <p className="font-semibold">{title}</p>}
              {description && <p className="caption">{description}</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
