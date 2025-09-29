'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}: AnimatedButtonProps) {
  const baseClasses = 'relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 overflow-hidden group';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl border-0',
    secondary: 'bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-lg hover:shadow-xl border-0',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent',
    ghost: 'text-blue-600 hover:bg-blue-50 bg-transparent border-0',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const buttonContent = (
    <>
      {/* Effet de brillance au survol */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
        whileHover={{
          translateX: '200%',
        }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
        }}
      />
      
      {/* Contenu du bouton */}
      <motion.span
        className="relative z-10 flex items-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.span>
    </>
  );

  const motionProps = {
    whileHover: { 
      scale: 1.05,
      y: -2,
    },
    whileTap: { 
      scale: 0.95,
      y: 0,
    },
    transition: {
      type: 'spring' as const,
      stiffness: 400,
      damping: 17,
    },
  };

  if (disabled) {
    return (
      <button
        className={`${classes} opacity-50 cursor-not-allowed`}
        disabled
      >
        {buttonContent}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href}>
        <motion.div
          className={classes}
          {...motionProps}
        >
          {buttonContent}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  );
}
