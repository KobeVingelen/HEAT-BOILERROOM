import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8" }) => {
  return (
    <Link to="/">
      <img
        src="https://i.imgur.com/vqKHoSD.png"
        alt="HEAT"
        className={className}
      />
    </Link>
  );
};

export default Logo;