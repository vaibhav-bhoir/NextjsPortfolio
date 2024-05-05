import React from 'react';

interface BadgeProps {
  data: {
    title: string;
    image_url?: string;
  };
}

const getRandomColor = () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'indigo', 'pink', 'teal'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const Badge: React.FC<BadgeProps> = ({ data }) => {
  const { title } = data;
  const randomColor = getRandomColor();

  return (
    <div>
      <h6
        className={`inline-block bg-transparent border border-${randomColor}-500 text-${randomColor}-500 px-3 py-1.5 rounded-full text-md font-semibold tracking-wide uppercase`}
      >
        {title}
      </h6>
    </div>
  );
};

export default Badge;
