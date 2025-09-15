import React from 'react';

export function Button({ children, className = '', variant = 'default', size = 'default', ...props }) {
  const baseClasses = 'inline-flex items-center justify-center font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 disabled:opacity-50 disabled:pointer-events-none transform hover:scale-105';
  
  const variants = {
    default: 'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'hover:bg-primary/10 hover:text-primary',
    link: 'underline-offset-4 hover:underline text-primary'
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