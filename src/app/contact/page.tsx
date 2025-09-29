'use client';

import { motion } from 'framer-motion';
import ModernPageWrapper from '@/components/ModernPageWrapper';
import AnimatedCard from '@/components/AnimatedCard';
import AnimatedButton from '@/components/AnimatedButton';
import ScrollReveal from '@/components/ScrollReveal';
import ContactForm from '@/components/ContactForm';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const contactInfo = [
  {
    title: 'Téléphone',
    icon: PhoneIcon,
    details: ['+33 1 23 45 67 89', 'Lun-Ven 9h-18h']
  },
  {
    title: 'Email',
    icon: EnvelopeIcon,
    details: ['contact@ways-pro.fr', 'Réponse sous 24h']
  },
  {
    title: 'Adresse',
    icon: MapPinIcon,
    details: ['123 Avenue des Entreprises', '75001 Paris, France']
  }
];

const faqs = [
  {
    question: 'Quels sont vos délais de livraison ?',
    answer: 'Nous livrons généralement sous 24-48h en région parisienne et sous 3-5 jours ouvrés en France métropolitaine.'
  },
  {
    question: 'Proposez-vous des contrats de maintenance ?',
    answer: 'Oui, nous proposons des contrats de maintenance préventive et curative pour tous nos équipements électroniques et informatiques.'
  },
  {
    question: 'Comment obtenir un devis personnalisé ?',
    answer: 'Utilisez notre formulaire de contact en sélectionnant "Demande de devis" et décrivez vos besoins. Nous vous répondrons sous 24h avec une proposition détaillée.'
  },
  {
    question: 'Travaillez-vous avec les petites entreprises ?',
    answer: 'Absolument ! Nous accompagnons les entreprises de toutes tailles, des startups aux grandes corporations, avec des solutions adaptées à chaque budget.'
  }
];

const supportOptions = [
  {
    title: 'Support Technique',
    description: 'Assistance technique disponible du lundi au vendredi',
    time: '9h00 - 18h00',
    icon: ShieldCheckIcon,
    color: 'blue'
  },
  {
    title: 'Chat en Ligne',
    description: 'Chat en ligne disponible du lundi au vendredi',
    time: '9h00 - 17h00',
    icon: ChatBubbleLeftRightIcon,
    color: 'green'
  }
];

export default function Contact() {
  return (
    <ModernPageWrapper variant="contact">
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-16 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 text-white">
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold tracking-tight sm:text-7xl mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Contactez-nous
              </span>
            </h1>
            <p className="text-xl leading-8 text-blue-100 max-w-3xl mx-auto">
              Une question, un projet, une demande de devis ? Notre équipe d&apos;experts est à votre écoute pour vous accompagner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <AnimatedCard variant="glass" className="p-8">
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">
                    Envoyez-nous un message
                  </h2>
                  <ContactForm />
                </AnimatedCard>
              </ScrollReveal>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <ScrollReveal direction="right">
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-8">
                    Nos coordonnées
                  </h2>
                  
                  {contactInfo.map((info) => (
                    <div
                      key={info.title}
                      className="p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-slate-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Map Placeholder */}
                  <AnimatedCard variant="glass" className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">
                      Nous localiser
                    </h3>
                    <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPinIcon className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                        <span className="text-blue-700 font-medium">Carte interactive</span>
                      </div>
                    </div>
                  </AnimatedCard>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">
                Questions fréquentes
              </h2>
              <p className="text-xl text-slate-600">
                Trouvez rapidement les réponses à vos questions
              </p>
            </div>
          </ScrollReveal>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedCard
                key={index}
                variant="bordered"
                delay={index * 0.1}
                className="p-8"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">
                Autres moyens de nous contacter
              </h2>
              <p className="text-xl text-slate-600">
                Choisissez le canal qui vous convient le mieux
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supportOptions.map((option, index) => (
              <AnimatedCard
                key={option.title}
                variant="glass"
                delay={index * 0.2}
                className="p-8 text-center"
              >
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${
                  option.color === 'blue' ? 'from-blue-500 to-blue-600' : 'from-green-500 to-green-600'
                } shadow-lg mb-6`}>
                  <option.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {option.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {option.description}
                </p>
                <p className={`font-semibold ${
                  option.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                }`}>
                  {option.time}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Notre équipe est là pour vous accompagner dans la réalisation de vos projets. Contactez-nous dès maintenant !
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <AnimatedButton
                href="/secteurs"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-50 px-10 py-5 text-lg font-semibold"
              >
                Découvrir nos services
              </AnimatedButton>
              <AnimatedButton
                href="/blog"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-10 py-5 text-lg font-semibold"
              >
                Lire nos actualités
              </AnimatedButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </ModernPageWrapper>
  );
}
