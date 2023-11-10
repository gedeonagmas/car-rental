import { useContext } from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";
import { langContext } from "../App";

function About() {
  const lang = useContext(langContext).lang;
  return (
    <>
      <section className="about-page">
        <HeroPages name={lang === "amh" ? "ስለ እኛ" : "About"} />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={"./Employers-habesha-web.png"}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>{lang === "amh" ? "ስለ ድርጅታችን" : "About Company"}</h3>
              <h2>
                {lang === "amh"
                  ? "ልክ መንዳት እንደጀመሩ ትክክለኛ ምርጫ እንደመረጡ ያኔ ይገባዎታል።"
                  : "You start the engine and your adventure begins"}
              </h2>
              <p>
                {lang === "amh"
                  ? "ባለ ብዙ ምርጫ የሆንው ድርጅታችን ሁልጊዜም የዕርስዎን ፍላጎት ለማሟላት ቀንና ሌሊት ያለ ድካም  ይሰራል። ከሌሎች አጋር ድርጅቶች ጋርም በሕብረት ስለሚሰራ በዘርፉ የተሻለ ልምድና የደንበኛ አያያዝ ልምድ አልው። ታዲያ እርስዎ ምን ይጠብቃሉ ይምጡና ይመልከቱ፣ በአገልግሎት አሰጣጣችን ይደሰታሉ።"
                  : "we are working day to night to full fill your interest without any tiredness. and we are also working with different companies so we have a lot of experiences about this kind of work."}
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="car-icon" />
                  <span>
                    <h4>20</h4>
                    <p>{lang === "amh" ? "የተሽከርካሪ አይነት" : "Car Types"}</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box2} alt="car-icon" />
                  <span>
                    <h4>85</h4>
                    <p>{lang === "amh" ? "የመከራያ ቦታዎች" : "Rental Outlets"}</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box3} alt="car-icon" className="last-fk" />
                  <span>
                    <h4>75</h4>
                    <p>{lang === "amh" ? "የጥገና ማዕከላት" : "Repair Shop"}</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            {lang === "amh" ? (
              <h2>ከእኛ ጋር በመነጋገር የሚፈልጉትን መኪና ይከራዪ</h2>
            ) : (
              <h2>Book a car by getting in touch with us</h2>
            )}

            <span>
              <i className="fa-solid fa-phone"></i>
              <h3>(+251) 0954104637</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
