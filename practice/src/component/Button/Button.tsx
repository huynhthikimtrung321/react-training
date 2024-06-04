import './Button.css';
import { MouseEvent } from 'react';

interface ButtonProps {
  value?: string;
  label?: string;
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
  hover,
  color = 'default',
  size = 'medium',
  borderColor,
  label,
  value,
  isActive = false,
  icon,
  onClick,
}: ButtonProps) => {
  const mode = variant === 'ghost' ? 'button--ghost' : 'button--outline';
  const hoverClass = hover ? `hover-${hover}` : '';
  const colorClass = `color-${color}`;
  const activeClass = isActive ? 'button-active' : '';
  return (
    <button
      type="button"
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
      value={value}
      style={{ borderColor }}
      onClick={onClick}
    >
      {icon ? icon : label}
    </button>
  );
};
