import React from 'react';

export function Button({ children, className = '', variant = 'default', size = 'default', ...props }) {
  const baseClasses = 'inline-flex items-center justify-center font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-secondary/20 disabled:opacity-50 disabled:pointer-events-none transform hover:scale-105';
  
  const variants = {
    default: 'bg-secondary text-white hover:bg-secondary/90 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white',
    ghost: 'hover:bg-secondary/10 hover:text-secondary',
    link: 'underline-offset-4 hover:underline text-secondary'
  };
  
  const sizes = {
    default: 'h-12 py-3 px-6 rounded-xl',
    sm: 'h-10 px-4 rounded-lg',
    lg: 'h-14 px-8 rounded-xl text-lg',
    icon: 'h-12 w-12 rounded-xl'
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}