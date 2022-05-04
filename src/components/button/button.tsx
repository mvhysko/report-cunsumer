import { FC } from 'react';

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      style={{cursor: 'pointer'}}
      {...props}
    >
      {children}
    </button>
  );
}
