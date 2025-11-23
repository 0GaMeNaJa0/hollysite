
import React from 'react';
import { ButtonProps } from '../types/button';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {

  const variantStyles = {
    primary: 'bg-primary text-white',
    secondary: 'border border-white  bg-white text-primary',
    danger: 'border  bg-red-600 hover:bg-red-700 text-white',
  };

  const sizeStyles = {
    sm: 'px-7 py-1.5 gap-x-1',
    md: 'px-10 py-3 gap-x-2',
    lg: 'px-12 py-4.5 gap-x-3',
  };

  const baseStyles = 'mx-auto flex justify-center items-center cursor-pointer rounded-lg font-semibold';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;