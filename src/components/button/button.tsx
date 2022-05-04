import React from 'react';

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button style={{ cursor: 'pointer' }} {...props}>
      {children}
    </button>
  );
};
