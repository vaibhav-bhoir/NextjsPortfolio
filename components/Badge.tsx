import React from 'react';

interface BadgeProps {
  data: {
    title: string;
    image_url?: string;
  };
}

const Badge: React.FC<BadgeProps> = ({ data }) => {
  const { title } = data;

  return (
    <div>
      <h6
        className={`inline-block bg-transparent border px-3 py-1.5 rounded-full text-md font-semibold tracking-wide uppercase`}
      >
        {title}
      </h6>
    </div>
  );
};

export default Badge;
