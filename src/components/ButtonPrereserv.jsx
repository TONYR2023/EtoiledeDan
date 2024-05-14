import "./../sass/_preReserv.scss";
import { Link } from "react-router-dom";

const ButtonPrereserv = () => {
  return (

      <div className="buttonPreresev-form d-flex justify-content-center align-items-center flex-column">
        Pré-Réservez votre sejour
        <Link to={"/pre_reserv"}>
          <button type="button" className="btn-form">
            <b> PRÉ-RÉSERVATION</b>
          </button>
        </Link>
      </div>

  );
};

export default ButtonPrereserv;

