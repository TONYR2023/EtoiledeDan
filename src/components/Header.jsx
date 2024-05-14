import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";
import "./../sass/_header.scss";

function Header({isLoggedIn}) {
 // connexion unique
  let pathLogged = isLoggedIn ? "/logout" : "/login";
  function logInOutLink(login) {
    if (login) {
      return (
        <>
          <span> Déconnexion</span>
        </>
      );
    } else
      return (
        <>
          <span> Connexion</span>
        </>
      );
  }

 const [openCloseMenuState, setOpenCloseMenuState] = useState("inactive");
  /**
   *
   * burger fonction open/close
   */
  function openCloseMenu() {
    const classAction =
      openCloseMenuState === "inactive" ? "active" : "inactive";
    setOpenCloseMenuState(classAction);
  }

  return (
    <>
      {/* Header Top */}
      <div className="header-top">
        <div className="contact-info">
          <span>
            <FaUser />
            <Link
              className="loggin text-decoration-none text-white"
              to={pathLogged}
            >
              {isLoggedIn ? logInOutLink(true) : logInOutLink(false)}
            </Link>
          </span>
          <span>
            <MdPhoneAndroid />
            <a href="tel:0622571552">06 22 57 15 52</a>
          </span>
          <span>
            <FaEnvelope />
            <a href="mailto:contact@etoilededan.fr">contact@etoilededan.fr</a>
          </span>
        </div>
      </div>

      {/* Logo + NavBar */}
      <div className="header">
        <div className="d-flex ">
          {/* Logo */}
          <Link to={"/"}>
            <img className="logo-edd" src={logo} alt="Logo 'L étoile de Dan' - retour accueil" />
          </Link>

          {/* NavBar */}
          <nav
            id="nav"
            className={`${openCloseMenuState}
            d-flex
            align-items-center`}
            onClick={openCloseMenu}
          >
            <ul className="d-flex gap-4">
              <li onClick={openCloseMenu}>
                <Link to={"/home"}>
                  <span>Accueil</span>
                </Link>
              </li>

              <li onClick={openCloseMenu}>
                <Link to={"/notreGite"}>
                  <span>Notre Gite</span>
                </Link>
              </li>

              <li onClick={openCloseMenu}>
                <Link to={"/prestations"}>
                  <span>Prestations</span>
                </Link>
              </li>

              <li onClick={openCloseMenu}>
                <Link to={"/tourisme"}>
                  <span>Tourisme</span>
                </Link>
              </li>

              <li onClick={openCloseMenu}>
                <Link to={"/informations"}>
                  <span> Informations</span>
                </Link>
              </li>

              <li onClick={openCloseMenu}>
                <Link to={"/magazine"}>
                  <span> Magazine </span>
                </Link>
              </li>

              <li onClick={openCloseMenu}>
                <Link to={"/contact"}>
                  <span> Contact </span>
                </Link>
              </li>
            </ul>
            <div id="icons" onClick={openCloseMenu}></div>
          </nav>
        </div>
      </div>
      <div className="visually-hidden">
        <h1 className="text-center">L'Étoile de Dan</h1>
      </div>
    </>
  );
}

export default Header;
