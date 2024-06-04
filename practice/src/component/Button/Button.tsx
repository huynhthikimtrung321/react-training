import { MouseEvent } from 'react';

import './Button.css';

interface ButtonProps {
  label?: string;
  value?: string;
  hover?: 'color' | 'underline';
  color?: 'default' | 'tertiary';
  variant?: 'ghost' | 'outline';
  borderColor?: string;
  size?: 'small' | 'medium';
  isActive?: boolean;
  icon?: React.ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  variant = 'ghost',
  value,
  hover,
  color = 'default',
  size = 'medium',
  borderColor,
  label,
  isActive = false,
  icon,
}: ButtonProps) => {
  const mode = variant === 'ghost' ? 'button--ghost' : 'button--outline';
  const hoverClass = hover ? `hover-${hover}` : '';
  const colorClass = `color-${color}`;
  const activeClass = isActive ? 'button-active' : '';
  return (
    <button
      type="button"
      value={value}
      className={[
        'button-border-default',
        hoverClass,
        `button--${size}`,
        'background-color-transparent',
        'hover-cursor-pointer',
        colorClass,
        activeClass,
        mode,
      ].join(' ')}
      style={{ borderColor }}
    >
      {icon ? icon : label}
    </button>
  );
};
