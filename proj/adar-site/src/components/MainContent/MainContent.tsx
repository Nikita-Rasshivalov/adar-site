import BeautyImg from "../../content/beautyimg.png";
import { smoothScroll } from "../../utils/smoothScroll";
import PhotoSections from "./PhotoSections";

export function MainContent() {
  return (
    <main className="main">
      <div className="wrapper">
      <div id="about-anchor"></div>
        <div className="about-section">
          <div className="about-text">
            <p className="about-subtitle">ВАШ НАДЁЖНЫЙ ПАРТНЁР</p>
            <h2 className="about-title">
              Инновационные биофармацевтические решения
            </h2>
            <p className="about-description">
              Биофармацевтическая компания, занимаемся
              биоинжинерными технологиями, разработкой новых лекарственных
              средств, изделий медицинского назначения, косметическими
              средствами содержащими биоинжинерные продукты.
            </p>
            <button onClick={() => smoothScroll("contact-anchor",200)} className="about-button">Связаться с нами</button>
          </div>
          <div className="about-image">
            <img src={BeautyImg} alt="фото" />
          </div>
        </div>
      </div>
      <PhotoSections />  
    </main>
  );
}

export default MainContent;
