import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Secteurs', href: '/secteurs' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function StaticHeader() {
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-slate-200/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              ways
            </span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 hover:text-blue-600 transition-colors"
          >
            <span className="sr-only">Ouvrir le menu principal</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
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
          <Link
            href="/contact"
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 font-semibold rounded-xl text-sm hover:shadow-lg transition-shadow"
          >
            Devis gratuit
          </Link>
        </div>
      </nav>
    </header>
  );
}
