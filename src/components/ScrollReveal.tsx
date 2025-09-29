'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
}: ScrollRevealProps) {
  const getVariants = () => {
    const baseTransition = {
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    };

    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0, transition: baseTransition },
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -60 },
          visible: { opacity: 1, y: 0, transition: baseTransition },
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: -60 },
          visible: { opacity: 1, x: 0, transition: baseTransition },
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: 60 },
          visible: { opacity: 1, x: 0, transition: baseTransition },
        };
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: baseTransition },
        };
      case 'zoom':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: baseTransition },
        };
      default:
        return {
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0, transition: baseTransition },
        };
    }
  };

  return (
    <motion.div
      className={className}
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        margin: '0px 0px -100px 0px', 
        amount: 0.1 
      }}
    >
      {children}
    </motion.div>
  );
}
