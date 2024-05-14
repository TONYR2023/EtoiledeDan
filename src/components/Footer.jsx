import "./../sass/_footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-around ">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <h2>A propos</h2>
            <ul>
              <li>
                <Link to={`/cgu_cgv`}>
                  <span>CGU</span>
                </Link>
              </li>
              <li>
                <Link to={`/legal_mentions`}>
                  <span>Mentions légales</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <h2>Site Map</h2>
            <ul>
              <li>
                <Link to={`/home`}>
                  <span>Accueil</span>
                </Link>
              </li>
              <li>
                <Link to={`/notregite`}>
                  <span>Notre Gîte</span>
                </Link>
              </li>
              <li>
                <Link to={`/prestations`}>
                  <span>Prestations</span>
                </Link>
              </li>
              <li>
                <Link to={`/informations`}>
                  <span>Informations</span>
                </Link>
              </li>
              <li>
                <Link to={`/magazine`}>
                  <span>Magazine</span>
                </Link>
              </li>
              <li>
                <Link to={`/contact`}>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <h2>Contact</h2>
            <ul>
              <li>L'Étoile de Dan</li>
              <li>61, Route Départementale 6110</li>
              <li>30260 CRESPIAN</li>
              <li>FRANCE</li>
              <li>
                <a href="mailto:contact@etoilededan.fr">
                  contact@etoilededan.fr
                </a>
              </li>
              <li>
                <a href="tel:0622571552">06 22 57 15 52</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
