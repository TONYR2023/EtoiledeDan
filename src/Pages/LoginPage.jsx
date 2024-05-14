import RemoteData from "../services/RemoteData";
import contact from "./../assets/contactPage/contact.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState([]);
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  const soumettreFormulaire = async (event) => {
    event.preventDefault();
    try {
      // Vérification de l'utilisateur via un service
      const estConnecte = await RemoteData.isLogged(login, motDePasse);
      console.log("Est connecté ?", estConnecte);
      setIsLoggedIn(estConnecte);
      if (estConnecte) {
        console.log("Redirection vers une page modification du calendrier");
        navigate("/test");
      }
    } catch (erreur) {
      console.error("Erreur :", erreur);
      alert("message erreur");
    }
  };

  return (
    <main>
      <div className="backgroundImageContainer">
        <img src={contact} alt="contact" className="backgroundImage" />
        <div className="buttonContainer"></div>
      </div>

      <h2 className="mt-2">Formulaire de Connexion</h2>
      <div className="d-flex justify-content-center">
        <hr className="separator" />
      </div>
      <section>
        <form className="card p-2 mx-4 bg-light" onSubmit={soumettreFormulaire}>
          <div className="body-card">
            <label htmlFor="login">Identifiant</label>
            <input
              type="text"
              id="login"
              className="form-control"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
            <label htmlFor="motDePasse">Mot de passe</label>
            <input
              type="password"
              id="motDePasse"
              className="form-control"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              required
            />
          </div>
          <div className="body-card d-flex justify-content-center mt-2">
            <button className="btn btn-primary" type="submit">
              Envoyer
            </button>
          </div>
        </form>
        <br />
      </section>
    </main>
  );
};

export default LoginPage;
