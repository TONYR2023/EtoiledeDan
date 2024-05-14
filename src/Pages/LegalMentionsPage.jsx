import mentionsLegales from "./../assets/mentionsLegales.jpg"

const LegalMentionsPage = () => {
  return (
    <><div>
      <img src={ mentionsLegales } className="backgroungImage" alt="salon" />
      </div>
      <h2>Mentions Légales</h2>
      <div className="card pt-3 m-5 p-4">
        <h3 className="card-subtitle">1. Informations Légales</h3>
        <p className="card-text">
          Le site L'Étoile de Dan est édité par TONY R, une société BNC non
          soumis à la TVA, immatriculée au Registre du Commerce et des Sociétés
          sous le numéro N° de SIRET : 499676336000. Le siège social est situé à
          63 route de laverune 34070 Montpellier.
        </p>
        <h3 className="card-subtitle">2. Représentant Légal</h3>
        <p className="card-text">
          Le représentant légal de TONY R est M.BOURDEAU Anthony, agissant en
          qualité de PDG, joignable à l'adresse 63 route de laverune 34070
          Montpellier et par courriel à tonyr2004@neuf.fr.
        </p>
        <h3 className="card-subtitle">3. Hébergement du Site</h3>
        <p className="card-text">
          Le site VeloMobile est hébergé par [Nom de l'hébergeur], dont le siège
          social est situé à [adresse] et joignable à l'adresse e-mail suivante
          : [adresse e-mail].
        </p>
        <h3 className="card-subtitle">4. Propriété Intellectuelle</h3>
        <p className="card-text">
          Le site et son contenu sont la propriété exclusive de L'Étoile de Dan
          et sont protégés par les lois sur la propriété intellectuelle. Toute
          reproduction, distribution ou utilisation non autorisée du contenu est
          strictement interdite.
        </p>
        <h3 className="card-subtitle">
          5. Collecte et Traitement des Données Personnelles
        </h3>
        <p className="card-text">
          La collecte et le traitement des données personnelles sur le site
          L'Étoile de Dan sont réalisés conformément à la Politique de
          Confidentialité accessible [lien vers la Politique de
          Confidentialité].
        </p>
        <h3 className="card-subtitle">6. Cookies</h3>
        <p className="card-text">
          Le site peut utiliser des cookies pour améliorer l'expérience de
          l'utilisateur. Les utilisateurs ont la possibilité de désactiver les
          cookies dans les paramètres de leur navigateur.
        </p>
        <h3 className="card-subtitle">7. Responsabilité</h3>
        <p className="card-text">
          Malgré tous les efforts déployés pour assurer l'exactitude des
          informations, TONY R décline toute responsabilité en cas d'erreurs ou
          d'omissions sur le site. Les utilisateurs sont invités à nous signaler
          toute inexactitude.
        </p>
        <h3 className="card-subtitle">8. Liens Hypertextes</h3>
        <p className="card-text">
          Le site peut contenir des liens hypertextes vers des sites tiers. TONY
          R n'assume aucune responsabilité quant au contenu de ces sites.
        </p>
        <h3 className="card-subtitle">9. Droit Applicable et Juridiction</h3>
        <p className="card-text">
          Les présentes mentions légales sont régies par le droit en vigueur.
          Tout litige sera soumis aux tribunaux compétents du lieu où est situé
          le siège social de L'Étoile de Dan.
        </p>
        <h3 className="card-subtitle">10. Contact</h3>
        <p className="card-text">
          Pour toute question ou préoccupation concernant le site L'Étoile de
          Dan, veuillez nous contacter à l'adresse suivante : 61, route
          Départementale 6110 30260 Crespian ou par courriel à
          contact@etoilededan.fr.
        </p>
        <p className="card-text">Fait à Montpellier, le 31/05/2024.</p>
        <p className="card-text">M.BOURDEAU Anthony</p>
      </div>
    </>
  );
};

export default LegalMentionsPage;
