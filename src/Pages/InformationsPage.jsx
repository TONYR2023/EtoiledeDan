import "./../sass/_backgroundImage.scss";
import ButtonPrereserv from "../components/ButtonPrereserv";
import informations from "../assets/informationsPage/informations.png";
import assurance from "./../assets/informationsPage/assurance.png";
import proximite from "./../assets/informationsPage/proximite.png";
import CarouselR from "../components/CarouselR";

const InformationsPage = () => {
  return (
    <main>
      <div className="backgroundImageContainer">
        <img src={informations} alt="tourisme" className="backgroundImage" />
        <div className="buttonContainer">
          <ButtonPrereserv />
        </div>
      </div>

      <h2 className="mt-2">Informations</h2>
      <div className="d-flex justify-content-center">
        <hr className="separator" />
      </div>

      {/*------------------Presentation----------------*/}

      <div className="container-fluid">
        <div className="row justify-content-around mx-1">
          {/*---------------Tarif---------------*/}
          <div className="cadre .col-6 col-md-5 pt-2 mb-2">
            <div className="justify-content-center">
              <div>
                <h3>Tarif</h3>
                {/*---------------hors saison---------------*/}
                <p className="cadre p-2">
                  <b>
                    <u>Hors saison : </u>
                  </b>
                  <p>
                    - A la semaine : <b> 3810 TTC / 3175 HT</b>
                  </p>
                  <p>
                    - Du vendredi soir au lundi matin (3 nuits) ou
                    <br /> du lundi soir au vendredi matin (4 nuits) :
                    <b> 2490€ TTC / 2075 HT</b>
                  </p>
                </p>

                {/*---------------basse saison---------------*/}
                <p>
                  <p className=" cadre p-2">
                    <b>
                      <u>Petites vacances + mois de mai : </u>
                    </b>
                    <p>
                      - A la semaine : <b> 4410€ TTC / 3675€ HT</b>
                    </p>
                    <p>
                      - Du vendredi soir au lundi matin (3 nuits) ou
                      <br /> du lundi soir au vendredi matin (4 nuits):
                      <b> 2868€ TTC / 2390€ HT</b>
                    </p>
                  </p>
                </p>

                {/*---------------pleine saison---------------*/}
                <p>
                  <p className="cadre p-2">
                    <b>
                      <u>
                        Vacances d’été (location à la semaine uniquement) :{" "}
                      </u>
                    </b>
                    <p>
                      - A la semaine : <b> 4410€ TTC / 3675€ HT</b>
                    </p>
                  </p>
                </p>
                {/*---------------fin---------------*/}
              </div>
            </div>
          </div>

          {/*---------------Assurance---------------*/}
          <div className="cadre .col-6 col-md-6 pt-2 mb-2">
            <div className="d-flex justify-content-center">
              <div>
                <h3>Assurance</h3>
                <img
                  src={assurance}
                  alt=""
                  style={{
                    width: "10em",
                    float: "left",
                    shapeOutside: "margin-box",
                    margin: "0 20px 5px 0",
                    borderRadius: "50%",
                  }}
                ></img>
                <p className="m-2">
                  Plongez dans un séjour de confort et de tranquillité avec
                  notre service d'hostellerie. Nos chambres accueillantes sont
                  conçues pour offrir une expérience de repos exceptionnelle,
                  alliant élégance et fonctionnalité. Que ce soit pour une
                  escapade romantique, des vacances en famille ou un voyage
                  d'affaires, notre établissement saura répondre à tous vos
                  besoins avec soin et attention. De plus, le linge est fournis
                  ainsi que le menage en fin de sejour.
                </p>
              </div>
            </div>
          </div>

          {/*---------------fin---------------*/}
        </div>
      </div>

      {/*------------------Presentation----------------*/}

      <div className="container-fluid">
        <div className="row justify-content-around mx-1">
          {/*---------------Services de proximité---------------*/}
          <div className="cadre .col-6 col-md-5 pt-2 mt-2">
            <div className="justify-content-center">
              <div>
                <h3>Services de Proximité</h3>
                <img
                  src={proximite}
                  alt=""
                  style={{
                    width: "10em",
                    float: "right",
                    shapeOutside: "margin-box",
                    margin: "0 20px 5px 0",
                    borderRadius: "50%",
                  }}
                ></img>
                <p className="m-2">
                  Laissez-vous séduire par les délices culinaires de la région
                  et savourez une cuisine authentique et raffinée. Explorez les
                  marchés locaux où vous pourrez déguster des produits du
                  terroir frais et savoureux, tels que les vins renommés de la
                  région, les fromages artisanaux et les spécialités
                  gastronomiques régionales. Vivez l'art de vivre à la française
                  en vous attablant à de charmants bistrots ou en dégustant un
                  pique-nique dans un cadre enchanteur.
                </p>
                <a href="https://ot-sommieres.com/marches">
                  Marché de sommieres
                </a>
                <br />
                <a href="">Boulangerie ebiopi</a>
                <br />
                <a href="">Pharmacie de Quissac</a>
                <br />
                <a href="">Carrefour Market Villevieille</a>

                {/*---------------fin---------------*/}
              </div>
            </div>
          </div>

          {/*---------------Galerie Photos---------------*/}
          <div className="cadre .col-6 col-md-6 mt-2 pt-2">
            <div className="d-flex justify-content-center">
              <div>
                <h3>Galerie Photos</h3>
                <CarouselR />
              </div>
            </div>
          </div>

          {/*---------------fin---------------*/}
        </div>
      </div>
    </main>
  );
};

export default InformationsPage;
