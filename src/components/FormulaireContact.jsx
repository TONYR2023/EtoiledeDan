import React, { useState } from "react";

const FormulaireContact = () => {
  const [validationErrors, setValidationErrors] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const nom = formData.get("nom");
    const prenom = formData.get("prenom");
    const email = formData.get("email");
    const telephone = formData.get("telephone");
    const description = formData.get("description");

    // Valider les données avant de les soumettre
    if (!validateNom(nom) || !validatePrenom(prenom) || !validateEmail(email) || !validateTelephone(telephone)) {
      // Si les données ne sont pas valides, ne pas soumettre le formulaire
      return;
    }

    // Soumettre le formulaire
    form.reset();

    console.log(
      `Nom: ${nom} Prénom: ${prenom} Email: ${email} Téléphone: ${telephone} Description: ${description}`
    );
  };

  const validateNom = (nom) => {
    // Votre expression régulière pour valider le nom
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ-]+$/;
    if (!regex.test(nom)) {
      setValidationErrors((prevState) => ({
        ...prevState,
        nom: "Nom invalide.",
      }));
      return false;
    }
    setValidationErrors((prevState) => ({ ...prevState, nom: "" }));
    return true;
  };

  const validatePrenom = (prenom) => {
    // Votre expression régulière pour valider le prénom
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ-]+$/;
    if (!regex.test(prenom)) {
      setValidationErrors((prevState) => ({
        ...prevState,
        prenom: "Prénom invalide.",
      }));
      return false;
    }
    setValidationErrors((prevState) => ({ ...prevState, prenom: "" }));
    return true;
  };

  const validateEmail = (email) => {
    // Votre expression régulière pour valider l'email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setValidationErrors((prevState) => ({
        ...prevState,
        email: "Email invalide.",
      }));
      return false;
    }
    setValidationErrors((prevState) => ({ ...prevState, email: "" }));
    return true;
  };

  const validateTelephone = (telephone) => {
    // Votre expression régulière pour valider le numéro de téléphone
    const regex = /^\d{10}$/;
    if (!regex.test(telephone)) {
      setValidationErrors((prevState) => ({
        ...prevState,
        telephone: "Numéro de téléphone invalide.",
      }));
      return false;
    }
    setValidationErrors((prevState) => ({ ...prevState, telephone: "" }));
    return true;
  };

  const validateDescription = (description) => {
    // Votre expression régulière pour valider la description
    // Vous pouvez ajuster cette validation selon vos besoins
    if (description.trim() === "") {
      setValidationErrors((prevState) => ({
        ...prevState,
        description: "Veuillez entrer une description.",
      }));
      return false;
    }
    setValidationErrors((prevState) => ({ ...prevState, description: "" }));
    return true;
  };


  return (
    <>
      <div className="d-flex text-align-center">
        <div className="card p-2" style={{ width: "50em" }}>
          <h3>Informations Personnelles</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Nom
                </span>
              </div>
              <input
                type="text"
                id="nom"
                name="nom"
                className={`form-control ${
                  validationErrors.nom ? "is-invalid" : "is-valid"
                }`}
                placeholder="Entrez votre nom"
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Prenom
                </span>
              </div>
              <input
                type="text"
                id="prenom"
                name="prenom"
                className="form-control"
                placeholder="Entrez votre prénom"
              />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Email
                </span>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Entrez votre email"
              />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Telephone
                </span>
              </div>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                className="form-control"
                placeholder="Entrez votre téléphone"
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Ecrivez-nous
                </span>
              </div>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="3"
              ></textarea>
            </div>

            <div>
              <button type="submit" className="form-control">
                ENVOYER
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormulaireContact;
