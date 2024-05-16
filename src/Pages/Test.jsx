import React, { useState } from "react";
import magazine from "../assets/magazinePage/magazine.png";
import Calendar from "@demark-pro/react-booking-calendar";

const Test = () => {
  // changement d'état de la selection des dates
  const [selectedDates, setSelectedDates] = useState([]);
  const [price, setPrice] = useState(0); // État pour stocker le prix

  // Définir le prix HT comme état
  const [priceHT, setPriceHT] = useState(0);

  const reserved = [
    {
      startDate: new Date(2024, 4, 15),
      endDate: new Date(2024, 4, 22),
    },
    {
      startDate: new Date(2024, 5, 20),
      endDate: new Date(2024, 5, 22),
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
    const jourNonPossibleHs = [2, 3, , 4, 5];
    const jourNonPossiblePs = [0, 1, 2, 3, 4];

    let totalPrice1 = 3810;
    let totalPrice3 = 4410;
    //hors saison
    if (![6, 7].includes(startDate.getMonth())) {
      console.log("numberOfDays : ", numberOfDays);
      switch (true) {
        //case 1 semaine
        case numberOfDays === 8 && startDay === 6 && endDay === 6:
          console.log("prix", totalPrice1);
          return totalPrice1;
        //case 2 semaines
        case numberOfDays === 15 && startDay === 6 && endDay === 6:
          console.log("prix", totalPrice1 * 2);
          return totalPrice1 * 2;
        //case 4 premiers jours ou 3 derniers jours
        case (startDay === 5 && endDay === 1) ||
          (startDay === 1 && endDay === 5):
          const totalPrice2 = 2490;
          console.log("prix", totalPrice2);
          return totalPrice2;
        case jourNonPossibleHs.includes(numberOfDays):
          return alert(
            "vous devez choisir des dates comprenant : \n" +
              "- Une semaine complète : du samedi soir au Samedi matin  \n" +
              "- Les 4 premiers jours de la semaine : du Lundi soir au Vendredi matin \n" +
              "- Le week-end : du Vendredi soir au Lundi matin "
          );

        default:
          return alert(
            "vous devez choisir des dates comprenant : \n" +
              "- Une semaine complète : du samedi soir au Samedi matin  \n" +
              "- Les 4 premiers jours de la semaine : du Lundi soir au Vendredi matin \n" +
              "- Le week-end : du Vendredi soir au Lundi matin "
          );
    
      }
    }
    //pleine saison
    else if ([6, 7].includes(startDate.getMonth())) {
      console.log("numberOfDays : ", numberOfDays);
      switch (true) {
        //case 1 semaine
        case numberOfDays === 8 && startDay === 6 && endDay === 6:
          console.log("prix", totalPrice3);
          return totalPrice3;
        //case 2 semaines
        case numberOfDays === 15 && startDay === 6 && endDay === 6:
          console.log("prix", totalPrice3 * 2);
          return totalPrice3 * 2;

        case jourNonPossiblePs.includes(numberOfDays):
          return alert(
            "vous devez choisir des dates comprenant une semaine complète \n" +
              "- Du samedi soir au Samedi matin \n" +
              "- Pour plus de 2 semaines, veuillez nous contacter directement par email"
          );
        default:
          return alert(
            "vous devez choisir des dates comprenant une semaine complète \n" +
              "- Du samedi soir au Samedi matin \n" +
              "- Pour plus de 2 semaines, veuillez nous contacter directement par email"
          );
      }
    }
  };

  //Vacance HS et dates specifique à définir

  // selection des dates pour afficher le prix en fonction des dates
  const handleChange = (dates) => {
    setSelectedDates(dates);
    console.log("dates:", dates);
    const totalPrice = calculatePrice(dates); // Passer les dates sélectionnées à calculatePrice
    console.log("Updated price:", totalPrice); // Vérifier la mise à jour du prix
    setPrice(totalPrice);
  };

  // Evenement sur la Checkbox
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      // Calculer le prix HT en soustrayant la TVA (20%) du prix total
      const totalPriceHT = price / 1.2; // Soustraire 20% du prix total
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

  // bouton valider
  const handleSubmit = () => {
    const formData = {
      selectedDates: selectedDates,
      price: price,
    };
    fetch("/api/reservation", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        // Vérifier si la requête a réussi (status 2xx)
        if (!response.ok) {
          throw new Error("Erreur lors de la requête au serveur");
        }
        // Réinitialiser les états si nécessaire
        setSelectedDates([]);
        setPrice(0);
      })
      .catch((error) => {
        // Gérer les erreurs de requête
        console.error("Erreur lors de la requête au serveur:", error);
      });
  };

  return (
    <>
      <main>
        <div className="backgroundImageContainer">
          <img src={magazine} alt="magazine" className="backgroundImage" />
          <div className="buttonContainer"></div>
        </div>
        <h2 className="mt-2">Magazine</h2>
        <div className="d-flex justify-content-center">
          <hr className="separator" />
        </div>
        {/*-----------------Calendrier ------------*/}
        <div className="d-flex row justify-content-center">
          <section className="card" style={{ width: "30em" }}>
            <Calendar
              selected={selectedDates}
              onChange={handleChange}
              onOverbook={(e, err) => alert(err)}
              range={true}
              reserved={reserved}
            />
          </section>

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
        </div>
        <button type="button" onClick={handleSubmit}>
          valider
        </button>
      </main>
    </>
  );
};

export default Test;
