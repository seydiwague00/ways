'use client';

import { useState } from 'react';
import AnimatedButton from './AnimatedButton';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  requestType: 'contact' | 'quote';
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    requestType: 'contact',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          requestType: 'contact',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.error || 'Erreur lors de l&apos;envoi');
      }
    } catch (error) {
      console.error('Erreur lors de l&apos;envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Type de demande */}
      <div>
        <label className="text-base font-semibold text-gray-900">Type de demande</label>
        <fieldset className="mt-4">
          <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
            <div className="flex items-center">
              <input
                id="contact"
                name="requestType"
                type="radio"
                value="contact"
                checked={formData.requestType === 'contact'}
                onChange={handleInputChange}
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
              />
              <label htmlFor="contact" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                Contact simple
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="quote"
                name="requestType"
                type="radio"
                value="quote"
                checked={formData.requestType === 'quote'}
                onChange={handleInputChange}
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
              />
              <label htmlFor="quote" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                Demande de devis
              </label>
            </div>
          </div>
        </fieldset>
      </div>

      {/* Informations personnelles */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
            Prénom *
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              value={formData.firstName}
              onChange={handleInputChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
            Nom *
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              value={formData.lastName}
              onChange={handleInputChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email *
        </label>
        <div className="mt-2">
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
            Téléphone
          </label>
          <div className="mt-2">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
            Entreprise
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleInputChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">
          Sujet *
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="subject"
            id="subject"
            required
            value={formData.subject}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
          Message *
        </label>
        <div className="mt-2">
          <textarea
            name="message"
            id="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            placeholder={formData.requestType === 'quote' ? 
              'Décrivez vos besoins en détail pour que nous puissions vous proposer un devis personnalisé...' :
              'Votre message...'
            }
          />
        </div>
      </div>

      {/* Messages de statut */}
      {submitStatus === 'success' && (
        <div className="rounded-md bg-green-50 p-4">
          <div className="text-sm text-green-800">
            ✓ Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="text-sm text-red-800">
            ✗ Une erreur s&apos;est produite lors de l&apos;envoi. Veuillez réessayer.
          </div>
        </div>
      )}

      <div>
        <AnimatedButton
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white"
        >
          {isSubmitting ? 'Envoi en cours...' : 
           formData.requestType === 'quote' ? 'Demander un devis' : 'Envoyer le message'}
        </AnimatedButton>
      </div>

      <p className="text-sm text-gray-500">
        * Champs obligatoires. Vos données personnelles sont protégées et ne seront utilisées que pour traiter votre demande.
      </p>
    </form>
  );
}
