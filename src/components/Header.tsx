'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import AnimatedButton from './AnimatedButton';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Secteurs', href: '/secteurs' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header 
      className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-slate-200/50"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <motion.span 
              className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              ways
            </motion.span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <motion.button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="sr-only">Ouvrir le menu principal</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </motion.button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link 
                href={item.href}
                prefetch={true}
                className="relative text-sm font-semibold leading-6 text-slate-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-blue-50 group"
              >
                {item.name}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <AnimatedButton
            href="/contact"
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 font-semibold"
          >
            Devis gratuit
          </AnimatedButton>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-md px-6 py-6 sm:max-w-sm border-l border-slate-200"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                    ways
                  </span>
                </Link>
                <motion.button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-slate-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">Fermer le menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </motion.button>
              </div>
              
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-slate-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          prefetch={true}
                          className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-slate-900 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="py-6">
                    <AnimatedButton
                      href="/contact"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 font-semibold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Devis gratuit
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
