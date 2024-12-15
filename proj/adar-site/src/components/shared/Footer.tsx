import FooterContent from "../FooterElements/footerContent";
import ContactForm from "../Forms/ContactForm";
import Logo from "../../content/logo.png";

function Footer() {
  return (
    <footer className="footer" id="contact-anchor">
      <div className="feedback-title">
          <h2>Обратная связь</h2>
        </div>
      <div className="wrapper-center">
        <ContactForm />
        <FooterContent />
      </div>
      <div className="bottom-logo-wrapper">      
      <div className="logoImgTxt">
      <h3 className="companyName">ADAR-ST</h3>
        <img src={Logo} alt="logo" className="companyLogo" />
      </div></div>
    </footer>
  );
}

export default Footer;
