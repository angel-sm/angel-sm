import React from "react";

interface BadgeProps {
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <div className="badge bg-stone-200 rounded-xl px-3 py-1 text-xs flex items-center">
      <span className="">{text}</span>
    </div>
  );
};

export default Badge;
