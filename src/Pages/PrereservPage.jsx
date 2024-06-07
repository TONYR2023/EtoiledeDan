import React, { useState } from "react";
import Calendar from "@demark-pro/react-booking-calendar";
import gite from "../assets/gitePage/gite.png";
import "./../sass/_preReserv.scss";
import FormulaireContact from "../components/FormulaireContact";
import Options from "../components/Options";
import { useOutletContext } from "react-router-dom";

const Prereserv = () => {
  const [selectedDates, setSelectedDates] = useState([]); //Etat pour selectionner les dates avec le range
  const [price, setPrice] = useState(0); // État pour stocker le prix
  const [isLoggedIn, setIsLoggedIn] = useOutletContext();

  // Définir les dates réservées
  const reserved = [
    {
      startDate: new Date(2024, 6, 2),
      endDate: new Date(2024, 6, 12),
    },
    {
      startDate: new Date(2024, 7, 2),
      endDate: new Date(2024, 7, 12),
    },
  ];

  const calculatePrice = (dates) => {
    // Calculer le nombre de jours sélectionnés
    const startDate = new Date(dates[0]);
    const endDate = new Date(dates[dates.length - 1]);
    const timeDiff = Math.abs(endDate - startDate);

    // Convertir en jours
    const numberOfDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    //conversion des boutons debut et fin
    const startDay = startDate.getDay();
    console.log("start :", startDay);
    const endDay = endDate.getDay();
    console.log("end :", endDay);

    // jours non possible
    const jourNonPossibleHs = [1, 2, 3, 6];
    const jourNonPossiblePs = [2, 3, 4, 5, 6];

    //hors saison
    if (![6, 7].includes(startDate.getMonth())) {
      switch (true) {
        //case semaine
        case numberOfDays === 7 && startDay === 1 && endDay === 0:
          const totalPrice1 = 3600;
          console.log("prix", totalPrice1);
          return totalPrice1;
        //case 4 premiers jours ou 3 derniers jours
        case (startDay === 1 && endDay === 4) ||
          (startDay === 5 && endDay === 0):
          const totalPrice2 = 2280;
          console.log("prix", totalPrice2);
          return totalPrice2;
        case jourNonPossibleHs.includes(numberOfDays):
          return alert(
            "vous devez choisir des dates comprenant une semaine complète, ou les 4 premiers jours(du lundi au jeudi), ou les 3 derniers jours de la semaine(du vendredi au dimanche"
          );
        default:
          return alert(
            "vous devez choisir des dates comprenant une semaine complète, ou les 4 premiers jours(du lundi au jeudi), ou les 3 derniers jours de la semaine(du vendredi au dimanche"
          );
      }
    }
    //pleine saison
    else if ([6, 7].includes(startDate.getMonth())) {
      console.log("pleine saison:", startDate.getMonth());
      switch (true) {
        //case semaine
        case numberOfDays === 7 && startDay === 1 && endDay === 0:
          const totalPrice3 = 4800;
          console.log("prix", totalPrice3);
          return totalPrice3;
        case jourNonPossiblePs.includes(numberOfDays):
          return alert(
            "vous devez choisir des dates comprenant une semaine complète"
          );
        default:
          return alert(
            "vous devez choisir une semaine complète, du lundi au dimanche "
          );
      }
    }
  };

  // selection des dates pour afficher le prix
  const handleChange = (dates) => {
    setSelectedDates(dates);
    console.log("dates:", dates);
    const totalPrice = calculatePrice(dates); // Passer les dates sélectionnées à calculatePrice
    console.log("Updated price:", totalPrice); // Vérifier la mise à jour du prix
    setPrice(totalPrice);
  };

  // Définir le prix HT comme état
  const [priceHT, setPriceHT] = useState(0);

  // Evenement sur la Checkbox
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      // Calculer le prix HT en soustrayant la TVA (20%) du prix total
      const totalPriceHT = price * 0.8; // Soustraire 20% du prix total
      setPriceHT(totalPriceHT);
      console.log("Prix HT:", totalPriceHT);
    } else {
      // Si la case est décochée, réinitialiser le prix HT à 0
      setPriceHT(0);
    }
  };

  // reinitialiser le calendrier
  const handleReset = () => {
    setSelectedDates([]);
    setPrice(0);
    setPriceHT(0);
  };

  return (
    <>
      <main>
        <div className="backgroundImageContainer">
          <img src={gite} alt="gite" className="backgroundImage" />
          <div className="buttonContainer"></div>
        </div>

        <h2 className="mt-2">Pré-Réserver votre Séjour</h2>
        <div className="d-flex justify-content-center">
          <hr className="separator" />
        </div>

        <section className="container-fluid">
          <div className="row">
            {/*------------------bloc1----------------*/}

            <div className="col-md-4">
              <h3 className="visually-hidden">Calendrier</h3>
              {/*------------------Calendrier----------------*/}
              {/*a definir pour choisir les dates de reservations */}

              <section className="calendar">
                <div className="calendarContainer">
                  <Calendar
                    selected={selectedDates}
                    onChange={handleChange}
                    onOverbook={(e, err) => alert(err)}
                    //    disabled={(date, state) => !state.isSameMonth}
                    reserved={reserved}
                    //    variant="events"
                    dateFnsOptions={{ weekStartsOn: 1 }}
                    range={true}
                  />
                </div>
                {/*------button reinitialisation calendrier-------*/}
                <div className="d-flex justify-content-center">
                  <button
                    onClick={handleReset}
                    className="but-reset btn-warning mt-1"
                  >
                    Réinitialiser le calendrier
                  </button>
                </div>
                {/*------Prix TTC-------*/}
                <div className="cadres mt-2">
                  <p>PRIX TTC : {price}€</p>
                </div>
                {/*------checkbox Prix HT-------*/}
                <div>
                  <p>
                    Convertir le prix en HT
                    <input
                      type="checkbox"
                      className="checkboxHt"
                      onChange={handleCheckboxChange}
                    />
                    PRIX HT : {priceHT}€
                  </p>
                </div>
                {/*------Nos prix comprennent-------*/}
                <div className="comprend">
                  <p className="mt-2">
                    Nos prix comprennent :<br />
                    - Le linge de maison <br />- Le ménage en fin de séjour
                  </p>
                </div>
              </section>
            </div>
            {/*------------------bloc2----------------*/}
            <div className="col-md-4">
              <h3 className="visually-hidden">Options & Assurance</h3>
              {/*------------------options----------------*/}
              <section className="center">
                <Options />
              </section>
            </div>
            {/*------------------bloc3----------------*/}
            <div className="col-md-4 mt-2 ">
              <h3 className="visually-hidden">Formulaire de Contact</h3>
              {/*------------------options----------------*/}

              <div className="bloc2 mt-4">
                <FormulaireContact />
              </div>
            </div>
            {/*------------------fin----------------*/}
          </div>
        </section>
      </main>
    </>
  );
};

export default Prereserv;
