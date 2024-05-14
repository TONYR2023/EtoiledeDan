import { Link } from "react-router-dom";
import magazine from "../assets/magazinePage/magazine.png";
import magazine1 from "../assets/magazinePage/magazine1.png";
import magazine2 from "../assets/magazinePage/magazine2.png";
import magazine3 from "../assets/magazinePage/magazine3.png";
import "./../sass/_backgroundImage.scss";
import "./../sass/_prestations.scss";
import ButtonPrereserv from "../components/ButtonPrereserv";

const MagazinePage = () => {
  return (
    <>
      <main>
        <div className="backgroundImageContainer">
          <img src={magazine} alt="magazine" className="backgroundImage" />
          <div className="buttonContainer">
            <ButtonPrereserv />
          </div>
        </div>

        <h2 className="mt-2">Magazine</h2>
        <div className="d-flex justify-content-center">
          <hr className="separator" />
        </div>

        <div className="container-fluid">
          <div className="row my-2 mx-1 justify-content-around">
            {/*---------------PMR---------------*/}
            <div className="cadre col-md-3 mb-2">
              <div className="d-flex justify-content-center">
                <img src={magazine1} alt="hostellerie" className="presta-img" />
              </div>
              <div>
                <h3>
                  Découvrez notre Gîte Spacieux et Accessible aux Personnes à
                  Mobilité Réduite (PMR) dans le Gard entre Nîmes, Alès et
                  Montpellier
                </h3>
                <b className="m-2">Pourquoi choisir notre gîte ?</b>
                <p className="m-2">
                  Notre gîte est spécialement conçu pour accueillir les
                  personnes à mobilité réduite, avec des aménagements adaptés
                  pour faciliter leur séjour et leur circulation.
                </p>
                <Link className="btn-enSavoirPlus" to={`/pmr`}>
                  <span>En savoir plus</span>
                </Link>
              </div>
            </div>

            {/*---------------Architecture---------------*/}
            <div className="cadre col-md-3 mb-2">
              <div className="d-flex justify-content-center">
                <img src={magazine2} alt="hostellerie" className="presta-img" />
              </div>

              <div>
                <h3>
                  Découvrez notre Gîte avec ses volumes, son architecture, sa
                  localité et ses espaces sécurisés dans le sud de la France
                </h3>
                <b className="m-2">Pourquoi choisir notre gîte ?</b>
                <p className="m-2">
                  Notre gîte est spécialement conçu pour accueillir les
                  personnes à mobilité réduite, avec des aménagements adaptés
                  pour faciliter leur séjour et leur circulation.
                </p>
              </div>

              <div className="mt-5">
                <Link className="btn-enSavoirPlus" to={`/notreGite`}>
                  <span>En savoir plus</span>
                </Link>
              </div>
            </div>

            {/*---------------Architecture---------------*/}
            <div className="cadre col-md-3 mb-2">
              <div className="d-flex justify-content-center">
                <img src={magazine3} alt="hostellerie" className="presta-img" />
              </div>
              <div>
                <h3>
                  Découvrez notre gîte haut de gamme, conçu pour offrir un
                  confort exceptionnel et luxueux à 12 personnes.
                </h3>
                <b className="m-2">Pourquoi choisir notre gîte ?</b>
                <p className="m-2">
                  Notre gîte est spécialement conçu pour accueillir les
                  personnes à mobilité réduite, avec des aménagements adaptés
                  pour faciliter leur séjour et leur circulation.
                </p>
                <div className="mt-5">
                  <Link className="btn-enSavoirPlus" to={`/notreGite`}>
                    <span>En savoir plus</span>
                  </Link>
                </div>
              </div>
            </div>

            {/*---------------fin---------------*/}
          </div>
        </div>
      </main>
    </>
  );
};

export default MagazinePage;
