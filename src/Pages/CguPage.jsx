import cgu from "../assets/cgu.jpg";

const CguPage = () => {
  return (
    <>
      <div>
        <img src={cgu} className="backgroungImage" alt="salon" />
      </div>
      <h2 className="mt-2">
        Conditions Générales d'Utilisation (CGU) - Site L'Étoile de Dan
      </h2>
      <div className="card pt-3 m-5 p-4">
        <h3 className="card-subtitle">1. Acceptation des Conditions</h3>
        <p className="card-text">
          En accédant et en utilisant le site L'Étoile de Dan, vous acceptez de
          vous conformer aux présentes Conditions Générales d'Utilisation. Si
          vous n'acceptez pas ces conditions, veuillez ne pas utiliser le site.
        </p>
        <h3 className="card-subtitle">2. Informations Générales</h3>
        <p className="card-text">
          Le site L'Étoile de Dan est exploité par L'Étoile de Dan, ci-après
          dénommé "le site". Les CGU régissent l'utilisation du site, y compris
          la collecte, le stockage et l'utilisation des données.
        </p>
        <h3 className="card-subtitle">
          3. Données Personnelles et Confidentialité
        </h3>
        <p className="card-text">
          Votre utilisation du site est soumise à notre Politique de
          Confidentialité, régissant la collecte et le traitement de vos données
          personnelles. Nous nous engageons à protéger vos informations
          conformément aux lois applicables.
        </p>
        <h3 className="card-subtitle">4. Utilisation des Formulaires</h3>
        <p className="card-text">
          Le site propose des formulaires détaillés, notamment pour demander des
          informations sur le gîte et pour faire une pré-reservation en vue
          d'une location. En soumettant ces formulaires, vous consentez à
          l'utilisation de vos informations pour répondre à votre demande et
          pour vous fournir des actualités et des mises à jour pertinentes.
        </p>
        <h3 className="card-subtitle">5. Création d'un Compte Utilisateur</h3>
        <p className="card-text">
          La création d'un compte utilisateur sur le site L'Étoile de Dan est
          facultative mais peut offrir des avantages tels que la gestion des
          demandes d'information, l'accès à des offres exclusives. Vous êtes
          responsable de la confidentialité de vos informations de compte.
        </p>
        <h3 className="card-subtitle">6. Propriété Intellectuelle</h3>
        <p className="card-text">
          Le contenu du site, y compris les textes, images, logos et autres
          éléments, est la propriété intellectuelle du site. Aucune
          reproduction, distribution ou utilisation non autorisée du contenu
          n'est permise sans consentement préalable.
        </p>
        <h3 className="card-subtitle">7. Responsabilités</h3>
        <p className="card-text">
          Le site L'Étoile de Dan s'efforce de fournir des informations
          précises, mais ne garantit pas l'exactitude de toutes les données.
          Nous déclinons toute responsabilité en cas d'utilisation inappropriée
          du site ou de préjudice résultant de l'utilisation des informations
          fournies.
        </p>
        <h3 className="card-subtitle">8. Modification des CGU</h3>
        <p className="card-text">
          Le site se réserve le droit de modifier les CGU à tout moment. Les
          utilisateurs seront informés des changements, et il leur incombe de
          consulter régulièrement les CGU mises à jour.
        </p>
        <h3 className="card-subtitle">9. Droit Applicable et Juridiction</h3>
        <p className="card-text">
          Les présentes CGU sont régies par le droit en vigueur. Tout litige
          sera soumis aux tribunaux compétents du lieu où est situé le siège
          social de l'entreprise exploitant le site L'Étoile de Dan.
        </p>
        <p className="card-text">
          En utilisant le site L'Étoile de Dan, vous acceptez ces conditions et
          vous vous engagez à les respecter. Pour toute question ou
          préoccupation, veuillez nous contacter à contact@letoilededan.fr.
        </p>
      </div>
    </>
  );
};

export default CguPage;
