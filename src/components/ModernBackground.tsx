'use client';

import { motion } from 'framer-motion';

interface ModernBackgroundProps {
  variant?: 'hero' | 'page' | 'contact' | 'blog';
  className?: string;
}

export default function ModernBackground({ 
  variant = 'page',
  className = '' 
}: ModernBackgroundProps) {
  const getGradientColors = () => {
    switch (variant) {
      case 'hero':
        return 'from-slate-900 via-blue-900 to-slate-800';
      case 'contact':
        return 'from-blue-900 via-slate-900 to-blue-800';
      case 'blog':
        return 'from-slate-800 via-blue-800 to-slate-900';
      default:
        return 'from-slate-50 via-blue-50 to-gray-100';
    }
  };

  const isDark = variant === 'hero' || variant === 'contact' || variant === 'blog';

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Gradient statique optimisé */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${getGradientColors()}`}
      />

      {/* Blobs statiques optimisés */}
      <div className="absolute inset-0">
        {/* Blob 1 - Animation réduite */}
        <motion.div
          className={`absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-20 ${
            isDark ? 'bg-blue-400' : 'bg-blue-300'
          }`}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            top: '10%',
            left: '10%',
          }}
        />

        {/* Blob 2 - Statique */}
        <div
          className={`absolute w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-15 ${
            isDark ? 'bg-purple-400' : 'bg-purple-300'
          }`}
          style={{
            top: '60%',
            right: '15%',
          }}
        />
      </div>


      {/* Overlay pour ajuster l'opacité */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-black/20' 
          : 'bg-white/40'
      }`} />
    </div>
  );
}
