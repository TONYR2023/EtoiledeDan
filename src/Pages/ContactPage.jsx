import contact from "./../assets/contactPage/contact.png";
import FormulaireContact from "../components/FormulaireContact";
import "./../sass/_backgroundImage.scss";
import ButtonPrereserv from "../components/ButtonPrereserv";

const ContactPage = () => {
  return (
    <>
      <main>
        <div className="backgroundImageContainer">
          <img src={contact} alt="contact" className="backgroundImage" />
          <div className="buttonContainer">
            <ButtonPrereserv />
          </div>
        </div>

        <h2 className="mt-2">Contact</h2>
        <div className="d-flex justify-content-center">
          <hr className="separator" />
        </div>
        <div className="d-flex justify-content-center">
          <FormulaireContact />
        </div>
      </main>
    </>
  );
};

export default ContactPage;
