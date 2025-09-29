import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configuration du transporteur email
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true pour 465, false pour autres ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      company, 
      requestType, 
      subject, 
      message 
    } = body;

    // Validation des champs requis
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    // Préparation du contenu de l'email
    const emailSubject = `[${requestType === 'quote' ? 'DEVIS' : 'CONTACT'}] ${subject}`;
    
    const emailContent = `
      <h2>Nouvelle ${requestType === 'quote' ? 'demande de devis' : 'demande de contact'}</h2>
      
      <h3>Informations du contact :</h3>
      <ul>
        <li><strong>Nom :</strong> ${firstName} ${lastName}</li>
        <li><strong>Email :</strong> ${email}</li>
        <li><strong>Téléphone :</strong> ${phone || 'Non renseigné'}</li>
        <li><strong>Entreprise :</strong> ${company || 'Non renseignée'}</li>
      </ul>
      
      <h3>Sujet :</h3>
      <p>${subject}</p>
      
      <h3>Message :</h3>
      <p style="white-space: pre-wrap;">${message}</p>
      
      <hr>
      <p><small>Message envoyé depuis le site web Ways le ${new Date().toLocaleString('fr-FR')}</small></p>
    `;

    // Configuration de l'email
    const mailOptions = {
      from: `"Site Web Ways" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'contact@ways.fr',
      subject: emailSubject,
      html: emailContent,
      replyTo: email,
    };

    // Email de confirmation pour l'utilisateur
    const confirmationMailOptions = {
      from: `"Ways" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Confirmation de réception - ${subject}`,
      html: `
        <h2>Bonjour ${firstName},</h2>
        
        <p>Nous avons bien reçu votre ${requestType === 'quote' ? 'demande de devis' : 'message'} et nous vous en remercions.</p>
        
        <p>Notre équipe va examiner votre demande et vous répondra dans les plus brefs délais, généralement sous 24 heures ouvrées.</p>
        
        <h3>Récapitulatif de votre demande :</h3>
        <ul>
          <li><strong>Sujet :</strong> ${subject}</li>
          <li><strong>Type :</strong> ${requestType === 'quote' ? 'Demande de devis' : 'Contact simple'}</li>
          <li><strong>Date :</strong> ${new Date().toLocaleString('fr-FR')}</li>
        </ul>
        
        <p>Si vous avez des questions urgentes, n'hésitez pas à nous contacter directement au +33 1 23 45 67 89.</p>
        
        <p>Cordialement,<br>L'équipe Ways</p>
        
        <hr>
        <p><small>Ceci est un email automatique, merci de ne pas y répondre directement.</small></p>
      `,
    };

    // Envoi des emails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(confirmationMailOptions)
    ]);

    return NextResponse.json(
      { message: 'Message envoyé avec succès' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}
