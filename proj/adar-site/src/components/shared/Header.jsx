import Logo from "../../content/logo.png";
import React, { useState, useEffect } from "react";
import { smoothScroll } from "../../utils/smoothScroll";


function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 200); // Устанавливаем порог для скрытия midTitle
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header"  id="home-anchor">
      <div className="navigationPanel">
        <div className="logoImgTxt">
        <h3 className="companyName">ADAR-ST</h3>
          <img src={Logo} alt="logo" className="companyLogo" />
         
        </div>
        <nav className="nav">
          <button onClick={() => smoothScroll("home-anchor",200)}  className="nav-link">
            Домой
          </button>
          <button  onClick={() => smoothScroll("about-anchor",200)} className="nav-link">
            О нас
          </button>
          <button onClick={() => smoothScroll("service-anchor",50)} className="nav-link">
            Услуги
          </button>
          <button onClick={() => smoothScroll("contact-anchor",200)} className="contact-button">
            Связь
          </button>
        </nav>
      </div>
      <div className={`midTitleScrolled ${isScrolled ? "scrolled" : ""}`}>
        <div className="mid-section">
          <h1 className="mid-title">ADAR-ST</h1>
          <p className="mid-subtitle">Красота и здоровье с профессионалами</p>
          <button onClick={() => smoothScroll("service-anchor",50)} className="mid-button">Услуги</button>
        </div>
      </div>
    </header>
  );
}

export default Header;