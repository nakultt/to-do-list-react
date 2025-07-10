import React, { type ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
    <button 
        {...props}
        className="w-full px-6 py-3 font-semibold text-noir-dark transition-transform duration-200 transform rounded-lg bg-gold-accent hover:bg-gold-accent hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-gold-accent"
    >
        {children}
    </button>
);

export default Button; 