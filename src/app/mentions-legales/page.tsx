import ModernPageWrapper from '@/components/ModernPageWrapper';

export default function MentionsLegales() {
  return (
    <ModernPageWrapper variant="page">
      <div className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Mentions légales
        </h1>
        
        <div className="mt-10 max-w-2xl">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Informations sur l&apos;entreprise
            </h2>
            <div className="space-y-2">
              <p><strong>Raison sociale :</strong> Ways SARL</p>
              <p><strong>Siège social :</strong> 123 Rue de la République, 75001 Paris, France</p>
              <p><strong>SIRET :</strong> 123 456 789 00012</p>
              <p><strong>RCS :</strong> Paris B 123 456 789</p>
              <p><strong>Capital social :</strong> 50 000 €</p>
              <p><strong>TVA intracommunautaire :</strong> FR12 123456789</p>
              <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
              <p><strong>Email :</strong> contact@ways.fr</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Directeur de la publication
            </h2>
            <p>M. Jean Dupont, Gérant de la société Ways SARL</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Hébergement du site
            </h2>
            <div className="space-y-2">
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
              <p><strong>Site web :</strong> https://vercel.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Propriété intellectuelle
            </h2>
            <p className="mb-4">
              L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, etc.) est protégé par le droit d&apos;auteur et appartient à Ways SARL ou à ses partenaires.
            </p>
            <p className="mb-4">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Ways SARL.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Responsabilité
            </h2>
            <p className="mb-4">
              Ways SARL s&apos;efforce de fournir sur le site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
            <p className="mb-4">
              Tous les informations indiquées sur le site sont données à titre indicatif, et sont susceptibles d&apos;évoluer. Par ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Liens hypertextes
            </h2>
            <p className="mb-4">
              Le site peut contenir des liens hypertextes vers d&apos;autres sites présents sur le réseau Internet. Les liens vers ces autres ressources vous font quitter le site.
            </p>
            <p className="mb-4">
              Il est possible de créer un lien vers la page de présentation de ce site sans autorisation expresse de Ways SARL. Aucune autorisation ou demande d&apos;information préalable ne peut être exigée par l&apos;éditeur à l&apos;égard d&apos;un site qui souhaite établir un lien vers le site de l&apos;éditeur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Droit applicable et juridiction compétente
            </h2>
            <p className="mb-4">
              Tout litige en relation avec l&apos;utilisation du site est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact
            </h2>
            <p className="mb-4">
              Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :
            </p>
            <div className="space-y-2">
              <p><strong>Par email :</strong> contact@ways.fr</p>
              <p><strong>Par téléphone :</strong> +33 1 23 45 67 89</p>
              <p><strong>Par courrier :</strong> Ways SARL, 123 Rue de la République, 75001 Paris, France</p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </div>
      </div>
    </ModernPageWrapper>
  );
}
