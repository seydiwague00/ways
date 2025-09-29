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
      {/* Gradient animé principal */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${getGradientColors()}`}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />

      {/* Blobs animés */}
      <div className="absolute inset-0">
        {/* Blob 1 */}
        <motion.div
          className={`absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-30 ${
            isDark ? 'bg-blue-400' : 'bg-blue-300'
          }`}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            top: '10%',
            left: '10%',
          }}
        />

        {/* Blob 2 */}
        <motion.div
          className={`absolute w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-25 ${
            isDark ? 'bg-purple-400' : 'bg-purple-300'
          }`}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          style={{
            top: '60%',
            right: '15%',
          }}
        />

        {/* Blob 3 */}
        <motion.div
          className={`absolute w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 ${
            isDark ? 'bg-indigo-400' : 'bg-indigo-300'
          }`}
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
          style={{
            bottom: '20%',
            left: '20%',
          }}
        />
      </div>

      {/* Particules flottantes subtiles */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              isDark ? 'bg-white/20' : 'bg-gray-400/30'
            }`}
            animate={{
              y: [0, -15, 0],
              x: [0, Math.sin(i) * 8, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.8,
            }}
            style={{
              top: `${15 + (i * 10)}%`,
              left: `${10 + (i * 9)}%`,
            }}
          />
        ))}

      {/* Overlay pour ajuster l'opacité */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-black/20' 
          : 'bg-white/40'
      }`} />
    </div>
  );
}
