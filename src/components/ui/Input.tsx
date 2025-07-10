import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = (props) => (
    <input 
        {...props}
        className="w-full px-4 py-3 text-lg bg-purple-50 border border-gold-accent rounded-lg focus:ring-4 focus:ring-gold-accent focus:border-gold-accent focus:outline-none"
    />
);

export default Input; 