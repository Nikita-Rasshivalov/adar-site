import photoData from "../../assets/data/photoData.json"

function PhotoSections() {
  return (
    <div className="photo-sections" id="service-anchor">
      {photoData.sections.map((section, sectionIndex) => (
        <section className="section" key={sectionIndex}>
          <h2 className="section-title">{section.title}</h2>
          <div className="photo-grid">
            {section.photos.map((photo, photoIndex) => (
              <div className="photo-item" key={photoIndex}>
                <img src={photo.src} alt={photo.alt} />
                <p className="photo-caption">{photo.caption}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default PhotoSections;
