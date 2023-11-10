import { useContext, useState } from "react";
import { langContext } from "../App";

function Faq() {
  const lang = useContext(langContext).lang;
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            {lang === "amh" ? (
              <div className="faq-content__title">
                <h5>እውነታ</h5>
                <h2>በቅርቡ የተጠየቁ ጥያቄዎች</h2>
                <p>
                  በቅርቡ ስለ እኛ የመኪና ኪራይ አገልግሎት የተጠየቁ ጥያቄዎች እና ተደጋግመው ለተጠየቁ ጥያቄዎች
                  የተሰጡ ምላሾች።
                </p>
              </div>
            ) : (
              <div className="faq-content__title">
                <h5>FAQ</h5>
                <h2>Frequently Asked Questions</h2>
                <p>
                  Frequently Asked Questions About the Car Rental Booking
                  Process on Our Website: Answers to Common Concerns and
                  Inquiries.
                </p>
              </div>
            )}

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  {lang === "amh" ? (
                    <p>1. እስካሁን ክነበረው የመኪና ኪራይ ጋር ሲዎዳድር ምን የተለየ ነገር አለው?</p>
                  ) : (
                    <p>1. What is special about comparing rental car deals?</p>
                  )}
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  {lang === "amh"
                    ? "እስካሁን ክነበረው የመኪና ኪራይ ጋር ሲዎዳድር በጣም ብዙ ልዪነት አለው። ተከራዪ በቀላሉ ባለበት ቦታ ሁኖ የሚፈልገውን የተሽከርካሪ አይነትና በዋጋ የሚስማማውን በመምረጥ በአካል መሄድ ሳይጠበቅበት መክራየት ከመቻሉም በላይ ክፍያውንም ይህንን መተግበሪያ በመጠቀም መክፈል ይችላል።"
                    : "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies."}
                </div>
              </div>

              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  {lang === "amh" ? (
                    <p>2. እንዴት ነው የ ኪራይ አገልግሎት ማግኘት የምችልው?</p>
                  ) : (
                    <p>2. How do I find the car rental deals?</p>
                  )}

                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  {lang === "amh"
                    ? "የኪራይ አገልግሎቱን የተለያዪ በይነ መረቦችን በማየት ተመሳሳይ አገልግሎት የሚሰጡ መተግበሪያዎችን ያገኛሉ። የእኛን አገልግሎት ለማግኘት የራስዎን መለያ በመፍጠር በቀላሉ ማግኘት ይችላሉ።"
                    : "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions."}
                </div>
              </div>

              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  {lang === "amh" ? (
                    <p>3. እንዴት ነው በትንሽ ክፍያ መክራየት የምችለው?</p>
                  ) : (
                    <p>3. How do I find such low rental car prices?</p>
                  )}

                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  {lang === "amh"
                    ? "የ እኛን ተሽከርካሪዎች በተደጋጋሚ በመከራየት ደንበኛ ሲሆኑ በቅናሽ ዋጋ መከራየት ይችላሉ። በተጨማሪም ከሌሎች ተመሳሳይ አገልግሎት ከሚሰጡ ድርጅቶች ጋር በማዎዳድር የተሻለውን መምረጥ ይችላሉ።"
                    : "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
