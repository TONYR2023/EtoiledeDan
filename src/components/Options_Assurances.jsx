import { useState } from "react";
import "./../sass/_options.scss";
import { Link } from "react-router-dom";

const Options_Assurances = () => {
  const [count, setCount] = useState(8);
  const [total, setTotal] = useState(200);
  const [openBreakfast, setopenBreakfast] = useState(false);
  const [openGuide, setopenGuide] = useState(false);

  const prixDej = 25;
  //Fonction pour incrementer le compteur
  const increment = () => {
    if (count < 12) {
      setCount((prevCount) => prevCount + 1);
      setTotal((prevTotal) => prevTotal + prixDej);
    }
  };

  // Fonction pour décrémenter le compteur
  const decrement = () => {
    if (count > 8) {
      setCount((prevCount) => prevCount - 1);
      setTotal((prevTotal) => prevTotal - prixDej);
    }
  };

  // Fonction pour ouvrir ou fermer la checkbox Breakfast
  const handlecheckboxBreakfast = () => {
    setopenBreakfast(!openBreakfast);
  };

  // Fonction pour ouvrir ou fermer la checkbox Visite Guidée
  const handlecheckboxGuide = () => {
    setopenGuide(!openGuide);
  };

  return (
    <div className="bla">
      <h4>Options</h4>
      {/*----------------- Proposées par L’Étoile de Dan ------------*/}

      <p>
        <strong>
          <u> Proposées par L’Étoile de Dan</u>
        </strong>
        <Link className="btn-plus" to={`/informations`}>
          <span> En savoir plus</span>
        </Link>
      </p>
      {/*-----------------Petit dejeuner ------------*/}
      <div>
        <input
          type="checkbox"
          id="breakfast"
          checked={openBreakfast}
          onChange={handlecheckboxBreakfast}
        />
        <label htmlFor="breakfast">Petit Dejeuner</label>
      </div>
      {openBreakfast && (
        <>
          <p>
            <b>- Petit déjeuner par jour</b> (minimum de 8 personnes)
          </p>
          <div>
            <p>
              Nombre de personnes : {count}
              <button onClick={increment} className="mx-1 btn-reduit">
                ▲
              </button>
              <button onClick={decrement} className="btn-reduit">
                ▼
              </button>
              <div className="my-2 text-end">
                <b className="bla">
                  Prix : {total} € / jours
                </b>
              </div>
            </p>
          </div>
        </>
      )}

      {/*-----------------Guide Touristique------------*/}
      <div>
        <input
          type="checkbox"
          id="visite"
          checked={openGuide}
          onChange={handlecheckboxGuide}
        />
        <label htmlFor="visite">Visite Guidée</label>
      </div>
      <div>
        {openGuide && (
          <>
            <p>
              <b>- Guide Touristique</b> (maximum 8 personnes) <br />A définir
              avec L'étoile de Dan
            </p>
          </>
        )}
      </div>

      {/*------------------ Proposées par Les Prestataires---------------- */}
      <div className="mt-4">
        <p>
          <strong>
            <u> Proposées par nos prestataires</u>
          </strong>
          <Link className="btn-plus" to={`/prestations`}>
            <span>En savoir plus</span>
          </Link>
        </p>

        <div>
          <input type="checkbox" id="degustation" />
          <label htmlFor="degustation"> Service de Dégustation</label>
        </div>
        <div>
          <input type="checkbox" id="massage" />
          <label htmlFor="massage"> Service de Massage</label>
        </div>
        <div>
          <input type="checkbox" id="chef" />
          <label htmlFor="chef">Service de Chef à domicile</label>
        </div>
      </div>
    </div>
  );
};
export default Options_Assurances;
