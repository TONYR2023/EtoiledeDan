import gite from "../assets/gitePage/gite.png";
import "./../sass/_backgroundImage.scss";
import { MdOutlineAccessible } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { FaKitchenSet } from "react-icons/fa6";
import { MdOutlineKitchen } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { TbSportBillard } from "react-icons/tb";
import { FaShower } from "react-icons/fa";
import { GiBarbecue } from "react-icons/gi";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaWifi } from "react-icons/fa";
import { LuBath } from "react-icons/lu";
import { TbToiletPaper } from "react-icons/tb";
import ButtonPrereserv from "../components/ButtonPrereserv";
import prestations1 from "./../assets/prestationsPage/prestations1.png";
import plan from "./../assets/gitePage/Plan.jpg";

const NotreGitePage = () => {
  return (
    <>
      <main>
        <div className="backgroundImageContainer">
          <img src={gite} alt="gite" className="backgroundImage" />
          <div className="buttonContainer">
            <ButtonPrereserv />
          </div>
        </div>

        <h2 className="mt-2">Notre Gîte</h2>
        <div className="d-flex justify-content-center">
          <hr className="separator" />
        </div>

        {/*------------------Presentation----------------*/}
        <section className="container">
          <div className="row">
            {/*------------------La maison----------------*/}
            <div className="cadre col-md-5 p-4 mx-2">
              <h3 className="d-flex justify-content-around">
                La Maison
                <MdOutlineAccessible />
                <IoBedOutline />
                <MdOutlinePool />
                <CgGames />
                <FaWifi />
              </h3>

              <p>
                <b>
                  Notre maison d’architecte combine design, modernité et
                  caractère{" "}
                </b>
                pour vous apporter tout le confort durant votre séjour. Ses
                terrasses, son salon, sa salle de jeu et sa piscine sont
                notamment conçus pour{" "}
                <b> accueillir les Personnes à Mobilité Réduite</b> tout en
                mettant à disposition une suite adaptée dont l’accès est
                facilité grâce à sa rampe PMR.
              </p>
              <img
                src={prestations1}
                alt=""
                style={{
                  width: "10em",
                  float: "right",
                  shapeOutside: "margin-box",
                  margin: "0 20px 5px 0",
                  borderRadius: "50%",
                }}
              ></img>

              <p>
                La pièce à vivre de 75 m2 est aménagée avec : <br />- Une
                cuisine entièrement équipée avec son réfrigérateur américain, sa
                cave à vin, son grand îlot central, etc. <br />- Un salon avec
                sa télévision très grand écran, <br />- Une salle à manger avec
                sa grande table pouvant accueillir 12 convives, <br />- un
                billard et un hamac géant, idéal pour la détente. <br />
                Poursuivez cette douceur de vivre dans l’espace ludique :<br />-
                Avec sa piscine intérieure et sa baie aquarium, <br />- Une
                salle de jeux disposant : d’un baby-foot, d’une borne arcade et
                d’une table de jeux.
              </p>
              <img
                src={prestations1}
                alt=""
                style={{
                  width: "10em",
                  float: "left",
                  shapeOutside: "margin-box",
                  margin: "0 20px 5px 0",
                  borderRadius: "50%",
                }}
              ></img>
              <p>
                Pour accueillir jusqu’à{" "}
                <b>
                  12 résidents, le gîte dispose de 4 chambres et de 3 Salles
                  d’eau{" "}
                </b>
                avec douche à l’italienne :
                <br />- Une suite parentale équipée PMR avec son lit en 160x200,
                son dressing et sa salle d’eau privative <br />
                - Une chambre double avec son lit en 160x200 <br />
                - Deux chambres quadruples avec dressing, idéales pour les
                familles, puisqu’en plus de leur lit en 160x200, l’une est
                équipée de 2 fauteuils convertibles 1 place tandis que l’autre
                dispose d’un canapé convertible 2 places. <br />- Enfin, l’une
                des trois terrasses dispose d’une cuisine d’été équipée d’un
                BBQ.
              </p>
            </div>
            {/*------------------Separation---------------*/}
            <div className="col-md-1"></div>

            {/*------------------Le Jardin----------------*/}
            <div className="cadre col-md-5 mx-2">
              <h3 className="container p-3">
                Le Jardin
                <MdOutlineAccessible />
              </h3>
              <img
                src={prestations1}
                alt="jardin"
                style={{
                  width: "10em",
                  float: "left",
                  shapeOutside: "margin-box",
                  margin: "0 20px 5px 0",
                  borderRadius: "50%",
                }}
              ></img>
              <p>
                Le jardin arboré de 2500 m2 dispose : <br />
                - D’un salon de jardin <br />
                - D’un grand garage avec 2 abris de voitures (équipés de 2
                bornes de charge) dans lesquels peuvent stationner 4 véhicules à
                <br />
                - L’arrière de la maison, d’une aire de stationnement pour 2
                véhicules directement en contact avec la rampe PMR, <br />
                - D’un magnifique boulodrome, <br />
                - D’une table de ping-pong, <br />
                - D’un trampoline réservé aux enfants
              </p>

              {/*------------------Le Plan----------------*/}
              <h3 className="container p-3">Le Plan</h3>
              <img
                src={plan}
                alt="plan"
                style={{
                  width: "100%",
                  paddingBottom: "1em",
                }}
              ></img>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NotreGitePage;
