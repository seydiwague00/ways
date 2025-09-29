'use client';

import { ReactNode } from 'react';
import ModernBackground from './ModernBackground';

interface ModernPageWrapperProps {
  children: ReactNode;
  variant?: 'hero' | 'page' | 'contact' | 'blog';
  className?: string;
}

export default function ModernPageWrapper({ 
  children, 
  variant = 'page',
  className = '' 
}: ModernPageWrapperProps) {
  return (
    <div className={`relative ${className}`}>
      <ModernBackground variant={variant} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
