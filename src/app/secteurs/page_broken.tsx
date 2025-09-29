'use client';

import { motion } from 'framer-motion';
import ModernPageWrapper from '@/components/ModernPageWrapper';
import AnimatedButton from '@/components/AnimatedButton';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import { 
  ClipboardDocumentListIcon, 
  ComputerDesktopIcon, 
  PrinterIcon,
  DevicePhoneMobileIcon,
  CameraIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const sectors = [
  {
    id: 'papeterie',
    title: 'Papèterie & Fournitures',
    subtitle: 'Bureau moderne et organisé',
    description: 'Équipez votre espace de travail avec des fournitures de qualité professionnelle pour une productivité optimale.',
    icon: ClipboardDocumentListIcon,
    color: 'blue',
    services: [
      'Papier et supports d\'écriture premium',
      'Solutions de classement et archivage',
      'Instruments d\'écriture professionnels',
      'Fournitures créatives et design',
      'Consommables d\'impression certifiés'
    ],
    benefits: ['Qualité garantie', 'Livraison rapide', 'Prix compétitifs'],
    stats: { clients: '500+', produits: '2000+', satisfaction: '98%' }
  },
  {
    id: 'informatique',
    title: 'Informatique & Électronique',
    subtitle: 'Technologies de pointe',
    description: 'Modernisez votre infrastructure avec des solutions technologiques adaptées aux besoins actuels de votre entreprise.',
    icon: ComputerDesktopIcon,
    color: 'indigo',
    services: [
      'Ordinateurs et stations de travail',
      'Équipements réseau et serveurs',
      'Solutions de stockage et sauvegarde',
      'Périphériques et accessoires',
      'Logiciels et licences professionnelles'
    ],
    benefits: ['Support technique', 'Garantie étendue', 'Formation incluse'],
    stats: { clients: '300+', produits: '1500+', satisfaction: '96%' }
  },
  {
    id: 'impression',
    title: 'Impression & Reprographie',
    subtitle: 'Solutions d\'impression complètes',
    description: 'De l\'impression quotidienne aux projets grand format, nous avons la solution adaptée à vos besoins.',
    icon: PrinterIcon,
    color: 'green',
    services: [
      'Imprimantes multifonctions professionnelles',
      'Cartouches et toners originaux',
      'Papiers spécialisés et supports',
      'Maintenance et contrats de service',
      'Impression grand format et signalétique'
    ],
    benefits: ['Maintenance incluse', 'Consommables garantis', 'Service 24/7'],
    stats: { clients: '400+', produits: '800+', satisfaction: '97%' }
  },
  {
    id: 'telecom',
    title: 'Télécommunications',
    subtitle: 'Communication moderne',
    description: 'Restez connecté avec des systèmes de communication fiables et performants pour vos équipes.',
    icon: DevicePhoneMobileIcon,
    color: 'purple',
    services: [
      'Téléphonie fixe et mobile d\'entreprise',
      'Systèmes de visioconférence HD',
      'Équipements audio professionnels',
      'Solutions de communication unifiée',
      'Connectivité haut débit et réseaux'
    ],
    benefits: ['Installation rapide', 'Support dédié', 'Évolutivité'],
    stats: { clients: '200+', produits: '600+', satisfaction: '95%' }
  },
  {
    id: 'securite',
    title: 'Sécurité & Surveillance',
    subtitle: 'Protection avancée',
    description: 'Sécurisez vos locaux et vos données avec nos solutions de sécurité de dernière génération.',
    icon: CameraIcon,
    color: 'red',
    services: [
      'Systèmes de vidéosurveillance IP',
      'Alarmes et détection intrusion',
      'Contrôle d\'accès biométrique',
      'Coffres-forts et armoires sécurisées',
      'Cybersécurité et protection des données'
    ],
    benefits: ['Monitoring 24/7', 'Intervention rapide', 'Conformité RGPD'],
    stats: { clients: '150+', produits: '400+', satisfaction: '99%' }
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    subtitle: 'Service d\'excellence',
    description: 'Maintenez vos équipements en parfait état avec nos services de maintenance préventive et curative.',
    icon: WrenchScrewdriverIcon,
    color: 'orange',
    services: [
      'Maintenance préventive planifiée',
      'Intervention sur site sous 4h',
      'Support technique multicanal',
      'Formation des utilisateurs',
      'Contrats de service personnalisés'
    ],
    benefits: ['Disponibilité garantie', 'Techniciens certifiés', 'Pièces d\'origine'],
    stats: { clients: '600+', interventions: '5000+', satisfaction: '98%' }
  }
];

const colorClasses = {
  blue: 'from-blue-500 to-blue-600',
  indigo: 'from-indigo-500 to-indigo-600',
  green: 'from-green-500 to-green-600',
  purple: 'from-purple-500 to-purple-600',
  red: 'from-red-500 to-red-600',
  orange: 'from-orange-500 to-orange-600'
};

export default function Secteurs() {
  return (
    <ModernPageWrapper variant="page">
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold tracking-tight sm:text-7xl mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Nos secteurs d&apos;activités
              </span>
            </h1>
            <p className="text-xl leading-8 text-blue-100 max-w-3xl mx-auto mb-8">
              Des solutions professionnelles complètes pour équiper et moderniser votre entreprise
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-400" />
                <span>6 domaines d&apos;expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-400" />
                <span>Solutions sur mesure</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-400" />
                <span>Support professionnel</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Découvrez nos expertises
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Six domaines d&apos;activité pour répondre à tous vos besoins professionnels
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/20"
              >
                {/* Header */}
                <div className="p-8 pb-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r ${colorClasses[sector.color as keyof typeof colorClasses]} shadow-lg`}>
                      <sector.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-yellow-400 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-slate-600">
                        {sector.stats.satisfaction} satisfaction
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {sector.title}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 mb-4">
                    {sector.subtitle}
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    {sector.description}
                  </p>
                </div>

                {/* Services */}
                <div className="px-8 pb-6">
                  <h4 className="font-semibold text-slate-900 mb-4">Services inclus :</h4>
                  <ul className="space-y-3">
                    {sector.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start gap-3">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="px-8 pb-6">
                  <div className="flex flex-wrap gap-2">
                    {sector.benefits.map((benefit, benefitIndex) => (
                      <span
                        key={benefitIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="px-8 pb-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">
                        {sector.stats.clients}
                      </div>
                      <div className="text-xs text-slate-500">Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">
                        {sector.stats.produits || sector.stats.interventions}
                      </div>
                      <div className="text-xs text-slate-500">
                        {sector.stats.produits ? 'Produits' : 'Interventions'}
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">
                        {sector.stats.satisfaction}
                      </div>
                      <div className="text-xs text-slate-500">Satisfaction</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="p-8 pt-0">
                  <AnimatedButton
                    href="/contact"
                    className={`w-full bg-gradient-to-r ${colorClasses[sector.color as keyof typeof colorClasses]} text-white border-0`}
                  >
                    <span>Demander un devis</span>
                    <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </AnimatedButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Pourquoi nous faire confiance ?
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Plus de 15 ans d&apos;expertise au service des entreprises
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <AnimatedCounter value={2000} suffix="+" className="text-4xl font-bold text-blue-600 mb-2" />
              <div className="text-slate-600">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <AnimatedCounter value={98} suffix="%" className="text-4xl font-bold text-green-600 mb-2" />
              <div className="text-slate-600">Taux de satisfaction</div>
            </div>
            <div className="text-center">
              <AnimatedCounter value={24} suffix="/7" className="text-4xl font-bold text-purple-600 mb-2" />
              <div className="text-slate-600">Support disponible</div>
            </div>
            <div className="text-center">
              <AnimatedCounter value={15} suffix="+" className="text-4xl font-bold text-orange-600 mb-2" />
              <div className="text-slate-600">Années d&apos;expérience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt à équiper votre entreprise ?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Contactez nos experts pour une consultation gratuite et un devis personnalisé adapté à vos besoins spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <AnimatedButton
                href="/contact"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-50 px-10 py-5 text-lg font-semibold"
              >
                Obtenir un devis gratuit
              </AnimatedButton>
              <AnimatedButton
                href="/blog"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-10 py-5 text-lg font-semibold"
              >
                Découvrir nos actualités
              </AnimatedButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </ModernPageWrapper>
  );
}
