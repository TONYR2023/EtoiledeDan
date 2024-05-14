import ButtonPrereserv from "../components/ButtonPrereserv";
import { Link } from "react-router-dom";
import pmr from "../assets/magazinePage/pmr.png";
import magazine2 from "./../assets/magazinePage/magazine2.png"

const PmrPage = () => {
  return (
    <main>
      <div className="backgroundImageContainer">
        <img src={pmr} alt="pmr" className="backgroundImage" />
        <div className="buttonContainer">
          <ButtonPrereserv />
        </div>
      </div>
      {/*-----------------cadre---------------*/}
      <h2 className="mt-2 mx-5 d-flex text-center">
        Découvrez notre Gîte Spacieux et Accessible aux Personnes à Mobilité
        Réduite (PMR) dans le Gard entre Nîmes, Alès et Montpellier
      </h2>
      <div className="d-flex justify-content-center">
        <hr className="separator" />
      </div>

      <div className="p-3 mx-3">
        <div>
          <div className="container-fluid py-2">
            <p className="d-flex justify-content-center" style={{fontSize:"1.8em"}}>Pourquoi choisir notre gîte ?</p>
            <div className="row my-2 mx-1 justify-content-around">
              {/*-----------------pmr---------------*/}
              <div className="card" style={{ width: "15rem" }}>
                <img
                  class="card-img-top mt-2"
                  src={magazine2}
                  alt="Card image cap"
                ></img>
                <div className="card-body">
                  <h3 className="card-title">Accessibilité PMR </h3>
                  <p className="card-text">
                    Notre gîte est spécialement conçu pour accueillir les
                    personnes à mobilité réduite, avec des aménagements adaptés
                    pour faciliter leur séjour et leur circulation.
                  </p>
                </div>
              </div>

              {/*-----------------grand volume---------------*/}
              <div className="card mx-1" style={{ width: "15rem" }}>
                <img
                  class="card-img-top mt-2"
                  src={magazine2}
                  alt="Card image cap"
                ></img>
                <div className="card-body">
                  <h3 className="card-title">De Grand Volume </h3>
                  <p className="card-text">
                    Profitez de vastes espaces intérieurs et extérieurs, offrant
                    confort et liberté pour toute la famille, y compris les
                    personnes en fauteuil roulant.
                  </p>
                </div>
              </div>

              {/*-----------------Hébergement Familial ---------------*/}
              <div className="card mx-1" style={{ width: "15rem" }}>
                <img
                  class="card-img-top mt-2"
                  src={magazine2}
                  alt="Card image cap"
                ></img>
                <div className="card-body">
                  <h3 className="card-title">Hébergement Familial </h3>
                  <p className="card-text">
                    Avec plusieurs chambres et équipements adaptés, notre gîte
                    est parfait pour des vacances en famille, permettant à tous
                    de partager des moments inoubliables ensemble.
                  </p>
                </div>
              </div>

              {/*-----------------Situation Idéale---------------*/}
              <div className="card mx-1" style={{ width: "15rem" }}>
                <img
                  class="card-img-top mt-2"
                  src={magazine2}
                  alt="Card image cap"
                ></img>
                <div className="card-body">
                  <h3 className="card-title">Situation Idéale</h3>
                  <p className="card-text">
                    Niché dans le charmant village de Crespian, notre gîte
                    bénéficie d'un cadre paisible et naturel, tout en étant à
                    proximité des attractions touristiques et des commodités de
                    Quissac(11km).
                  </p>
                </div>
              </div>

              {/*-----------------Services Personnalisés ---------------*/}
              <div className="card mx-1" style={{ width: "15rem" }}>
                <img
                  class="card-img-top mt-2"
                  src={magazine2}
                  alt="Card image cap"
                ></img>
                <div className="card-body">
                  <h3 className="card-title">Services Personnalisés </h3>
                  <p className="card-text">
                    Notre équipe ainsi que des prestataires de services dévouées
                    sont à votre disposition pour répondre à tous vos besoins et
                    rendre votre séjour aussi agréable que possible.
                  </p>
                </div>
              </div>

              {/*-----------------fin---------------*/}
              <b
                className="pt-4 d-flex justify-content-center"
               
              >
                Réservez des maintenant et offrez-vous des vacances accessibles pour tous
                et familiales inoubliables dans le Gard !
              </b>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <ButtonPrereserv />
          </div>
        </div>
      </div>
    </main>
  );
};

export default PmrPage;
