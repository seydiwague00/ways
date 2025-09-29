'use client';

import Hero from '@/components/Hero';
import AnimatedCard from '@/components/AnimatedCard';
import AnimatedButton from '@/components/AnimatedButton';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import { 
  ClipboardDocumentListIcon, 
  ComputerDesktopIcon, 
  ShieldCheckIcon,
  TruckIcon,
  StarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Papèterie Professionnelle',
    description: 'Fournitures de bureau de qualité pour tous vos besoins administratifs et créatifs.',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Électronique & Informatique',
    description: 'Équipements électroniques et solutions informatiques adaptées aux entreprises.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Sécurité & Surveillance',
    description: 'Solutions de sécurité avancées pour protéger vos locaux et vos données.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Livraison & Support',
    description: 'Service de livraison rapide et support technique professionnel.',
    icon: TruckIcon,
  },
];

const values = [
  {
    title: 'Expertise Reconnue',
    description: 'Plus de 15 ans d\'expérience dans l\'accompagnement des entreprises avec des solutions adaptées.'
  },
  {
    title: 'Solutions Sur Mesure',
    description: 'Chaque projet est unique, nos solutions s\'adaptent parfaitement à vos besoins spécifiques.'
  },
  {
    title: 'Support Continu',
    description: 'Un accompagnement complet de A à Z, de l\'analyse des besoins à la maintenance.'
  }
];

const testimonials = [
  {
    content: "Ways nous accompagne depuis 5 ans avec un service irréprochable. Leur réactivité et leur expertise font la différence.",
    author: "Marie Dubois",
    role: "Directrice Générale",
    company: "TechCorp Solutions"
  },
  {
    content: "La qualité des produits et la rapidité de livraison font de Ways notre partenaire privilégié pour tous nos besoins bureautiques.",
    author: "Jean Martin",
    role: "Responsable Achats",
    company: "Innovate Group"
  }
];

export default function Home() {
  return (
    <div className="relative">
      <Hero
        title="Ways"
        subtitle="Votre partenaire de confiance"
        description="Spécialiste en papèterie et électronique professionnelle, nous accompagnons les organisations dans leurs besoins quotidiens avec des solutions adaptées et un service de qualité."
        primaryCTA={{
          text: "Demander un devis",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Découvrir nos secteurs",
          href: "/secteurs"
        }}
      />

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
                Nos domaines d&apos;expertise
              </h2>
              <p className="text-xl leading-8 text-slate-600">
                Des solutions complètes pour équiper votre organisation avec les meilleurs produits du marché.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {features.map((feature, index) => (
              <AnimatedCard
                key={feature.name}
                variant="glass"
                delay={index * 0.1}
                className="p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {feature.name}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
                Nos valeurs
              </h2>
              <p className="text-xl leading-8 text-slate-600">
                Les principes qui guident notre approche et garantissent votre satisfaction.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {values.map((value, index) => (
              <AnimatedCard
                key={value.title}
                variant="elevated"
                delay={index * 0.2}
                className="p-8 text-center"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-xl font-bold text-white">{index + 1}</span>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
                Ils nous font confiance
              </h2>
              <p className="text-xl leading-8 text-slate-600">
                Découvrez les témoignages de nos clients satisfaits.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard
                key={index}
                variant="glass"
                delay={index * 0.2}
                className="p-8"
              >
                <div className="flex gap-x-1 text-yellow-400 mb-6">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <motion.div
                      key={rating}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: rating * 0.1 }}
                    >
                      <StarIcon className="h-5 w-5 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <blockquote className="text-slate-900 text-lg leading-relaxed mb-6">
                  <p>&ldquo;{testimonial.content}&rdquo;</p>
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Nos chiffres parlent d&apos;eux-mêmes
              </h2>
              <p className="text-xl text-blue-100">
                Plus de 15 ans d&apos;expérience au service des entreprises
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <AnimatedCounter value={2000} suffix="+" className="text-4xl font-bold text-white mb-2" />
              <div className="text-blue-100">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <AnimatedCounter value={98} suffix="%" className="text-4xl font-bold text-white mb-2" />
              <div className="text-blue-100">Satisfaction client</div>
            </div>
            <div className="text-center">
              <AnimatedCounter value={15} suffix="+" className="text-4xl font-bold text-white mb-2" />
              <div className="text-blue-100">Années d&apos;expérience</div>
            </div>
            <div className="text-center">
              <AnimatedCounter value={24} suffix="/7" className="text-4xl font-bold text-white mb-2" />
              <div className="text-blue-100">Support disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl leading-8 text-slate-600 mb-12 max-w-2xl mx-auto">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <AnimatedButton
                href="/contact"
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-2xl px-10 py-5 text-lg font-semibold"
              >
                <span>Demander un devis</span>
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </AnimatedButton>
              <AnimatedButton
                href="/secteurs"
                variant="ghost"
                size="lg"
                className="text-slate-600 hover:text-blue-600 px-10 py-5 text-lg font-semibold"
              >
                Découvrir nos secteurs
              </AnimatedButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
