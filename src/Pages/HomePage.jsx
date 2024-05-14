import React from "react";
import home from "../assets/homePage/home.png";
import { Link } from "react-router-dom";
import "./../sass/_backgroundImage.scss";
import CarouselR from "../components/CarouselR";
import ButtonPrereserv from "../components/ButtonPrereserv";

const HomePage = () => {

  return (
    <>
      <main>
        <div className="backgroundImageContainer">
          <img src={home} alt="salon" className="backgroundImage" />
          <div className="buttonContainer">
            <ButtonPrereserv />
          </div>
        </div>

        <h2 className="mt-2">Home Page</h2>
        <div className="d-flex justify-content-center">
          <hr className="separator" />
        </div>
        {/*------------------Presentation----------------*/}
        <section className="container">
          <div className="row">
            {/*------------------Texte de Presentation----------------*/}
            <div className="col-md-6 p-3">
              <div className="container p-3 m-2">
                <p>
                  Entre Cévennes et Camargue, venez profiter de notre gîte
                  familial pour 12 personnes d’une superficie de 260 m2, de ses
                  4 chambres dont une pour les personnes en PMR. Vous disposerez
                  de sa piscine couverte et chauffée toute l’année, de son
                  jacuzzi, de sa salle de jeux avec baby-foot , borne d’arcarde
                  et billard. Venez vous détendre sur le hamac géant et dans le
                  grand jardin arboré de 2500 m2 disposant de son barbecue, son
                  boulodrome et ses transats.
                </p>

                <div className="d-flex justify-content-center">
                  <Link className="btn-enSavoirPlus" to={`/notreGite`}>
                    <span>En savoir plus</span>
                  </Link>
                </div>
              </div>
            </div>
            {/*------------------Carousel----------------*/}
            <div className="col-md-5 px-3 ">
              <div className="container p-3">
                <CarouselR />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
