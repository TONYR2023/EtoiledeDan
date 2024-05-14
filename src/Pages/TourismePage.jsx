import "./../sass/_backgroundImage.scss";
import ButtonPrereserv from "../components/ButtonPrereserv";
import tourisme from "../assets/tourismePage/tourisme.png";
import carte from "../assets/tourismePage/carte.jpg";

const TourismePage = () => {
  return (
    <main>
      <div className="backgroundImageContainer">
        <img src={tourisme} alt="tourisme" className="backgroundImage" />
        <div className="buttonContainer">
          <ButtonPrereserv />
        </div>
      </div>

      <h2 className="mt-2">Tourisme</h2>
      <div className="d-flex justify-content-center">
        <hr className="separator" />
      </div>

      {/*------------------Presentation----------------*/}
      <div className="container-fluid">
        <div className="row justify-content-around mx-1">
          {/*---------------Tarif---------------*/}
          <div className=".col-6 col-md-6 pt-2">
            <div className="justify-content-center">
              {/*---------------Nature préservée et Paysages Envoûtants---------------*/}
              <div className="cadre p-2 mb-2">
                <h3>Nature préservée et Paysages Envoûtants</h3>
                <p className="m-2">
                  Immergez-vous dans la beauté sauvage de la nature en explorant
                  les environs de Crespian. À moins de 50 km, vous trouverez des
                  sites naturels d'une beauté à couper le souffle, tels que les
                  majestueuses Gorges du Gardon et les paisibles étendues des
                  Cévennes. Parcourez des sentiers de randonnée pittoresques,
                  découvrez des panoramas à couper le souffle et laissez-vous
                  envoûter par la tranquillité de la campagne environnante.
                </p>
                <a href="https://www.gorgesdugardon.fr/">Gorges du Gardon</a>
                <br />
                <a href="https://randonnee-occitanie.com/">
                  Randonnées cevennes
                </a>
                <br />
                <a href="https://www.cevennes-tourisme.fr/">
                  offfice de tourisme des Cevennes
                </a>
                <br />
                <a href="https://www.cevennes-tourisme.fr/">
                  parc nationnal des cevennes
                </a>
                <br />
                <a href="https://www.cevennes-tourisme.fr/">
                  Reserve naturelle du Scamandre
                </a>
              </div>

              {/*---------------Patrimoine Culturel et Historique Richissime---------------*/}
              <div className="cadre p-2 mb-2">
                <h3>Patrimoine Culturel et Historique Richissime</h3>
                <p className="m-2">
                  Plongez dans l'histoire fascinante de la région en explorant
                  ses nombreux sites historiques et culturels. À proximité de
                  Crespian, vous pourrez visiter des joyaux architecturaux tels
                  que le Pont du Gard, un chef-d'œuvre de l'ingénierie romaine
                  classé au patrimoine mondial de l'UNESCO, ou encore le
                  magnifique Château de Portes, témoin de l'époque médiévale.
                  Imprégnez-vous de l'atmosphère chargée d'histoire des villages
                  pittoresques de la région et découvrez les traditions
                  séculaires qui perdurent encore aujourd'hui.
                </p>
                <a href="https://pontdugard.fr/fr">pont du gard</a>
                <br />
                <a href="https://chateau-portes.org/">château de Portes</a>
                <br />
                <a href="https://chateau-portes.org/">Nîmes</a>
                <br />
                <a href="https://chateau-portes.org/">Aigues-Mortes</a>
              </div>

              {/*---------------Activités et Loisirs pour Tous---------------*/}
              <div className="cadre p-2 mb-2">
                <h3>Activités et Loisirs pour Tous</h3>
                <p className="m-2">
                  Que vous soyez amateur de plein air, passionné d'histoire ou
                  simplement en quête de détente, la région autour de Crespian
                  offre une multitude d'activités et de loisirs pour tous les
                  goûts. Partez en excursion en kayak sur le Gardon, explorez
                  des grottes préhistoriques fascinantes, flânez dans les
                  marchés animés ou détendez-vous simplement au bord de l'eau
                  sous le doux soleil du sud de la France. ot la grande motte
                </p>
                <a href="https://ot-sommieres.com/marches">Montpellier</a>
                <br />
                <a href="https://sommieres.fr/">
                  Office de Tourisme de sommiere{" "}
                </a>
                <a href="https://www.canoe-france.com/gardon-parcours-tarifs/">
                  kayak gardon
                </a>
                <a href="https://www.lagrandemotte.com/">
                  Office de tourisme de la grande motte
                </a>{" "}
                <br />
                <a href="https://chateau-portes.org/">
                  Accrobranche roc de massereau
                </a>
              </div>

              {/*---------------Gastronomie et Art de Vivre---------------*/}
              <div className="cadre p-2 mb-2">
                <h3>Gastronomie et Art de Vivre</h3>
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
                  Marché de sommiere
                </a>
                <br />
                <a href="">Miellerie de Clairan</a>
                <a href="">Domaine de la Gravette</a>
                <a href="https://ot-sommieres.com/marches">
                  Etang de Thau
                </a>
                <br />
              </div>
            </div>
          </div>

          {/*---------------carte---------------*/}
          <div className=" .col-6 col-md-5">
            <div>
              <h3>Carte</h3>
              <img
                src={carte}
                alt="carte"
                className="img-fluid"
                style={{ width: "100vw", borderRadius: "0.5em" }}
              />
            </div>
          </div>

          {/*---------------fin---------------*/}
        </div>
      </div>
    </main>
  );
};

export default TourismePage;
