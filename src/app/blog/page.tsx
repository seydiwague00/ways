'use client';

import { motion } from 'framer-motion';
import ModernPageWrapper from '@/components/ModernPageWrapper';
import AnimatedCard from '@/components/AnimatedCard';
import AnimatedButton from '@/components/AnimatedButton';
import ScrollReveal from '@/components/ScrollReveal';
import { CalendarIcon, UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const categories = ['Tous', 'Technologie', 'Bureautique', 'Conseils', 'Actualités'];

const articles = [
  {
    id: 1,
    title: 'Les tendances technologiques 2024 pour les entreprises',
    excerpt: 'Découvrez les innovations qui transformeront votre environnement de travail cette année.',
    content: 'L\'année 2024 marque un tournant dans l\'adoption des nouvelles technologies en entreprise...',
    author: 'Sophie Martin',
    date: '2024-01-15',
    category: 'Technologie',
    readTime: '5 min',
    featured: true
  },
  {
    id: 2,
    title: 'Comment optimiser votre espace de travail moderne',
    excerpt: 'Guide pratique pour créer un environnement de travail productif et ergonomique.',
    content: 'Un espace de travail bien organisé est la clé de la productivité...',
    author: 'Pierre Durand',
    date: '2024-01-10',
    category: 'Bureautique',
    readTime: '7 min',
    featured: false
  },
  {
    id: 3,
    title: 'Sécurité informatique : les bonnes pratiques',
    excerpt: 'Protégez vos données et systèmes avec ces conseils d\'experts en cybersécurité.',
    content: 'La sécurité informatique n\'a jamais été aussi cruciale pour les entreprises...',
    author: 'Marie Leroy',
    date: '2024-01-05',
    category: 'Conseils',
    readTime: '6 min',
    featured: false
  },
  {
    id: 4,
    title: 'Nouveautés produits : notre sélection du mois',
    excerpt: 'Découvrez les derniers équipements que nous avons sélectionnés pour vous.',
    content: 'Ce mois-ci, nous vous présentons une sélection d\'équipements innovants...',
    author: 'Thomas Bernard',
    date: '2024-01-01',
    category: 'Actualités',
    readTime: '4 min',
    featured: false
  },
  {
    id: 5,
    title: 'L\'importance de la maintenance préventive',
    excerpt: 'Pourquoi anticiper les pannes peut vous faire économiser temps et argent.',
    content: 'La maintenance préventive est souvent négligée par les entreprises...',
    author: 'Julie Moreau',
    date: '2023-12-28',
    category: 'Conseils',
    readTime: '5 min',
    featured: false
  },
  {
    id: 6,
    title: 'Télétravail : équiper efficacement vos collaborateurs',
    excerpt: 'Les équipements essentiels pour un télétravail productif et confortable.',
    content: 'Le télétravail s\'est démocratisé et nécessite des équipements adaptés...',
    author: 'Antoine Petit',
    date: '2023-12-25',
    category: 'Bureautique',
    readTime: '6 min',
    featured: false
  }
];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function Blog() {
  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <ModernPageWrapper variant="blog">
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-16 bg-gradient-to-br from-slate-800 via-blue-800 to-slate-900 text-white">
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold tracking-tight sm:text-7xl mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Blog & Actualités
              </span>
            </h1>
            <p className="text-xl leading-8 text-blue-100 max-w-3xl mx-auto">
              Restez informé des dernières tendances, conseils d&apos;experts et actualités du secteur avec nos articles spécialisés.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    category === 'Tous'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                      : 'bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 border border-slate-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">
                  Article à la une
                </h2>
              </div>
            </ScrollReveal>
            
            <AnimatedCard variant="elevated" className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="p-8">
                  <div className="aspect-[16/9] bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-8 flex items-center justify-center">
                    <span className="text-blue-700 font-medium">Image article principal</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {featuredArticle.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{formatDate(featuredArticle.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <UserIcon className="h-4 w-4" />
                      <span>{featuredArticle.author}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{featuredArticle.readTime} de lecture</span>
                    <AnimatedButton
                      href={`/blog/${featuredArticle.id}`}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                    >
                      <span>Lire l&apos;article</span>
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">
                Derniers articles
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <AnimatedCard
                key={article.id}
                variant="glass"
                delay={index * 0.1}
                className="overflow-hidden"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <span className="text-slate-500">Image {article.title}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="h-3 w-3" />
                      <span>{formatDate(article.date)}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <UserIcon className="h-3 w-3" />
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <AnimatedButton
                      href={`/blog/${article.id}`}
                      variant="ghost"
                      className="text-blue-600 hover:text-blue-700 p-2"
                    >
                      <ArrowRightIcon className="w-4 h-4" />
                    </AnimatedButton>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Restez informé
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Abonnez-vous à notre newsletter pour recevoir nos derniers articles et conseils d&apos;experts directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg border-0 text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <AnimatedButton
                className="bg-white text-blue-600 hover:bg-gray-50 px-6 py-3 font-semibold whitespace-nowrap"
              >
                S&apos;abonner
              </AnimatedButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </ModernPageWrapper>
  );
}
