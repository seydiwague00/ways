'use client';

import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';
import ModernBackground from './ModernBackground';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function Hero({ 
  title, 
  subtitle, 
  description, 
  primaryCTA, 
  secondaryCTA 
}: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Animated Background */}
      <ModernBackground variant="hero" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 text-center">
        <div className="space-y-8">
          {/* Badge animé */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
          >
            <span className="text-sm font-medium text-white flex items-center gap-2">
              ✨ Votre partenaire de confiance depuis 2010
            </span>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl font-bold tracking-tight text-white sm:text-8xl lg:text-9xl"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          {subtitle && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-3xl font-semibold text-blue-100 sm:text-4xl lg:text-5xl"
            >
              {subtitle}
            </motion.h2>
          )}
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-200 lg:text-2xl"
          >
            {description}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            {primaryCTA && (
              <AnimatedButton
                href={primaryCTA.href}
                size="lg"
                className="bg-gradient-to-r from-white to-blue-50 text-blue-600 hover:shadow-2xl px-10 py-5 text-lg font-semibold"
              >
                {primaryCTA.text}
              </AnimatedButton>
            )}
            {secondaryCTA && (
              <AnimatedButton
                href={secondaryCTA.href}
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-5 text-lg font-semibold backdrop-blur-sm"
              >
                {secondaryCTA.text}
              </AnimatedButton>
            )}
          </motion.div>

          {/* Stats rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 pt-8 border-t border-white/20"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2000+</div>
              <div className="text-sm text-blue-200">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-sm text-blue-200">Années d&apos;expérience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-sm text-blue-200">Satisfaction client</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator animé */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer">
          <span className="text-sm font-medium">Découvrir</span>
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{
                y: [0, 16, 0],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
          <ChevronDownIcon className="w-4 h-4" />
        </div>
      </motion.div>
    </div>
  );
}
