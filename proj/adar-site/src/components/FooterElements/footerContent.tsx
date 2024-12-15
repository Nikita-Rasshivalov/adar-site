import phoneIcon from "../../content/phone.png";
import locationIcon from "../../content/marker.png";
import mailIcon from "../../content/mail.png";
import  contactData  from "../../assets/data/contactData.json"

function FooterContent() {
    return (
        <div className="footerContent">
            <div className="footerItem">
                <div className="footerTitle">
                    <img src={mailIcon} alt="Mail" className="icon mailIcon" />
                    <p>Почта</p>
                </div>
                <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
            </div>

            <div className="footerItem">
                <div className="footerTitle">
                    <img src={phoneIcon} alt="Phone" className="icon" />
                    <p>Позвоните нам</p>
                </div>
                {contactData.phones.map((phone, index) => (
                    <a key={index} href={`tel:${phone}`}>
                        {phone}
                    </a>
                ))}
            </div>

            <div className="footerItem">
                <div className="footerTitle">
                    <img src={locationIcon} alt="Location" className="icon" />
                    <p>Месторасположение</p>
                </div>
                <a href="home" target="_blank" rel="noopener noreferrer">
                    {contactData.location}
                </a>
            </div>
        </div>
    );
}

export default FooterContent;
