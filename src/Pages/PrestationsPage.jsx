import "./../sass/_prestations.scss";
import "./../sass/_backgroundImage.scss";

import prestation from "../assets/prestationsPage/prestations.png";
import prestation5 from "../assets/prestationsPage/prestations5.png";
import prestation4 from "../assets/prestationsPage/prestations4.png";
import prestation3 from "../assets/prestationsPage/prestations3.png";
import prestation2 from "../assets/prestationsPage/prestations2.png";
import prestation1 from "../assets/prestationsPage/prestations1.png";
import { IoBedOutline } from "react-icons/io5";
import { PiWineLight } from "react-icons/pi";
import { TbMassage } from "react-icons/tb";
import { LuChefHat } from "react-icons/lu";
import { IoTrailSignOutline } from "react-icons/io5";

import ButtonPrereserv from "../components/ButtonPrereserv";

const PrestationsPage = () => {
  return (
    <>
      <main>
        <div className="backgroundImageContainer">
          <img src={prestation} alt="massage" className="backgroundImage" />
          <div className="buttonContainer">
            <ButtonPrereserv />
          </div>
        </div>

        <h2 className="mt-2">Prestations</h2>
        <div className="d-flex justify-content-center">
          <hr className="separator" />
        </div>

        {/*------------------Presentation----------------*/}
        <div>
          <div className=" mx-4">
            <p className="align-items-center text-center ">
              Découvrez nos prestations variées pour un séjour inoubliable :
            </p>
            <p className="align-items-center text-center">
              Notre service d'hostellerie confortable, des dégustations de plats
              régionaux, des massages relaxants, un chef à domicile pour des
              repas gastronomiques et des visites touristiques pour explorer
              notre région.
            </p>
            <p className="align-items-center text-center">
              Profitez d'une expérience unique et personnalisée avec nous.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <hr className="separator" />
          </div>

          {/*------------------Presentation----------------*/}
          <div className="container-fluid">
            <div className="row my-2 mx-1 justify-content-around ">
              {/*---------------hostelerie---------------*/}
              <div className="cadre col-md-2 mb-2">
                <div className="d-flex justify-content-center">
                  <img
                    src={prestation2}
                    alt="hostellerie"
                    className="presta-img"
                  />
                </div>
                <div>
                  <h3>
                    Hostelerie <IoBedOutline />
                  </h3>
                  <p className="m-2">
                    Plongez dans un séjour offrant confort et tranquillité avec
                    notre service d'hostellerie. Nos chambres accueillantes sont
                    conçues pour offrir une expérience de repos exceptionnel,
                    alliant élégance et fonctionnalité. Que ce soit pour une
                    escapade romantique, des vacances en famille, un moment
                    « farniente » ou un séminaire d’entreprise, notre
                    établissement saura répondre à tous vos besoins.
                  </p>
                </div>
              </div>

              {/*---------------degustation---------------*/}
              <div className="cadre col-md-2 mb-2">
                <div className="d-flex justify-content-center">
                  <img
                    src={prestation1}
                    alt="degustation"
                    className="presta-img"
                  />
                </div>
                <div>
                  <h3>
                    Degustation <PiWineLight />
                  </h3>
                  <p className="m-2">
                    Sous la direction du service de dégustation de Florence
                    DELMAS (Degustez Sud), laissez vos papilles voyager à travers une explosion
                    de saveurs. Elle vous fera découvrir le meilleur de la
                    viticulture et des spécialités culinaires régionales, en
                    mettant en valeur les produits locaux frais et de saison. De
                    la première bouchée au dernier verre, chaque moment sera une
                    célébration épicurienne de la gastronomie.
                  </p>
                  <a href="http://degustezsud.com">Degustez Sud</a>
                </div>
              </div>

              {/*---------------Massage---------------*/}
              <div className="cadre col-md-2 mb-2">
                <div className="d-flex justify-content-center">
                  <img src={prestation3} alt="massage" className="presta-img" />
                </div>
                <div>
                  <h3>
                    Massage <TbMassage />
                  </h3>
                  <p className="m-2">
                    A 5 minutes à pied du gîte, ressourcez vous en vous offrant
                    un moment de détente et de bien-être absolu grâce au spa
                    privatif, au sauna et aux massages proposés par OC’TAO. Vous
                    y découvrirez un havre de paix où vous pourrez vous
                    abandonner à leurs mains expertes pour soulager le stress et
                    les tensions. Laissez-vous envelopper par des techniques de
                    massage apaisantes qui vous laisseront revitalisé et
                    régénéré.
                  </p>
                </div>
              </div>

              {/*---------------Chef à domicile---------------*/}
              <div className="cadre col-md-2 mb-2">
                <div className="d-flex justify-content-center">
                  <img src={prestation4} alt="chef" className="presta-img" />
                </div>
                <div>
                  <h3>
                    Chef à Domicile <LuChefHat />
                  </h3>
                  <p className="m-2">
                    Avec takeachef et l’un de ses 78 chefs à domicile,
                    personnalisez votre menu pour transformer votre séjour en
                    une expérience gastronomique inoubliable. Ces chefs
                    professionnels viendront directement dans votre logement
                    pour préparer des repas sur mesure, adaptés à vos goûts et
                    préférences. Que ce soit pour une occasion spéciale ou
                    simplement pour savourer un dîner exclusif dans le confort
                    de votre chez-vous, vivez une expérience culinaire
                    exceptionnelle !
                  </p>
                </div>
              </div>

              {/*---------------découverte touristique---------------*/}
              <div className="cadre col-md-2 mb-2">
                <div className="d-flex justify-content-center">
                  <img
                    src={prestation5}
                    alt="tourisme"
                    className="presta-img"
                  />
                </div>
                <div>
                  <h3>
                    Découverte Touristique <IoTrailSignOutline />
                  </h3>
                  <p className="m-2">
                    Explorez les trésors cachés de notre région avec notre
                    service de découverte touristique. Nos guides locaux
                    passionnés vous emmèneront à la rencontre des sites
                    emblématiques, des paysages spectaculaires et des traditions
                    authentiques de notre destination. Que vous soyez amateur
                    d'aventure, de culture ou de nature, notre service de
                    découverte touristique vous promet des moments de découverte
                    et d’émerveillement.
                  </p>
                </div>
              </div>

              {/*---------------fin---------------*/}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrestationsPage;
