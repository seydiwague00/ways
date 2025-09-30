'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'elevated' | 'bordered';
  hover?: boolean;
  delay?: number;
}

export default function AnimatedCard({
  children,
  className = '',
  variant = 'default',
  hover = true,
  delay = 0,
}: AnimatedCardProps) {
  const variantClasses = {
    default: 'bg-white shadow-lg border border-gray-100',
    glass: 'bg-white/80 backdrop-blur-sm shadow-xl border border-white/20',
    elevated: 'bg-white shadow-2xl border-0',
    bordered: 'bg-white border-2 border-blue-100 shadow-md',
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const hoverVariants = hover ? {
    whileHover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: 'easeOut' as const,
      },
    },
    whileTap: {
      scale: 0.98,
    },
  } : {};

  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${variantClasses[variant]} ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      {...hoverVariants}
    >
      {/* Effet de brillance subtile */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0"
        whileHover={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      />
      
      {/* Contenu de la carte */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
