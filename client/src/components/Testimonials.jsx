import { useContext } from "react";
import Img2 from "../images/testimonials/pfp1.jpg";
import Img3 from "../images/testimonials/pfp2.jpg";
import { langContext } from "../App";

function Testimonials() {
  const lang = useContext(langContext).lang;
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            {lang === "amh" ? (
              <div className="testimonials-content__title">
                <h4>በተለያዪ ሠዎች ታይቷል</h4>
                <h2>የ ደንበኞቻችን አስተያየት</h2>
                <p>
                  የደንበኞቻችን አስተያየት በማየት በ አገልግሎቶቻችን እንደተደሰቱ ለማዎቅ ችለናል። ወደ ፊትም
                  የበለጠ ለመስራትና የተሻለ ዕገዛ ለማድረግ ብርታት ሁነውናል። ደንብኞቻችን በእኛ ዉጤትና አገልግሎት
                  የተሻለ ልምድ አላቸው። የሚያውቁትንም ለማካፈል ዝግጁ ናቸው።
                </p>
              </div>
            ) : (
              <div className="testimonials-content__title">
                <h4>Reviewed by People</h4>
                <h2>Client's Testimonials</h2>
                <p>
                  Discover the positive impact we've made on the our clients by
                  reading through their testimonials. Our clients have
                  experienced our service and results, and they're eager to
                  share their positive experiences with you.
                </p>
              </div>
            )}

            <div className="all-testimonials">
              {lang === "amh" ? (
                <div className="all-testimonials__box">
                  <span className="quotes-icon">
                    <i className="fa-solid fa-quote-right"></i>
                  </span>
                  <p>
                    " ይህን መተግበሪያ በመጠቀም መኪና ተከራይተን ነበር። በጣም አሪፍ ጊዜ አሳልፈናል፣ ለመከራየት
                    በጣም ቀላል ነብር፣ ዋገዉም ተምጣጣኝና ርካሽ ነበር። "
                  </p>
                  <div className="all-testimonials__box__name">
                    <div className="all-testimonials__box__name__profile">
                      <img src={"./testimonial2.jpg"} alt="user_img" />
                      <span>
                        <h4>ኢሳያስ አበበ </h4>
                        <p>ባህር ዳር</p>
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="all-testimonials__box">
                  <span className="quotes-icon">
                    <i className="fa-solid fa-quote-right"></i>
                  </span>
                  <p>
                    "We rented a car from this website and had an amazing
                    experience! The booking was easy and the rental rates were
                    very affordable. "
                  </p>
                  <div className="all-testimonials__box__name">
                    <div className="all-testimonials__box__name__profile">
                      <img src={"./testimonial2.jpg"} alt="user_img" />
                      <span>
                        <h4>Esayas Abebe </h4>
                        <p>Bahir Dar</p>
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {lang === "amh" ? (
                <div className="all-testimonials__box">
                  <span className="quotes-icon">
                    <i className="fa-solid fa-quote-right"></i>
                  </span>
                  <p>
                    " ተሽከርካሪዎቹ በጣም ጥሩ ሁኔታ ላይ ናቸው፣ እና ጉዞአችን አሳምረውልናል። እንድትምክሩአቸው
                    እንምክራልን። "
                  </p>
                  <div className="all-testimonials__box__name">
                    <div className="all-testimonials__box__name__profile">
                      <img src={"./testimonial1.jpg"} alt="user_img" />
                      <span>
                        <h4>ሄኖክ ታምሩ</h4>
                        <p>አዲስ አበባ</p>
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="all-testimonials__box box-2">
                  <span className="quotes-icon">
                    <i className="fa-solid fa-quote-right"></i>
                  </span>
                  <p>
                    "The car was in great condition and made our trip even
                    better. Highly recommend for this car rental website!"
                  </p>
                  <div className="all-testimonials__box__name">
                    <div className="all-testimonials__box__name__profile">
                      <img src={"./testimonial1.jpg"} alt="user_img" />
                      <span>
                        <h4>Henok Tadese</h4>
                        <p>Addiss Ababa</p>
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
