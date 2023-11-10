import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";
import { useContext } from "react";
import { langContext } from "../App";
import { Link } from "react-router-dom";

function ChooseUs() {
  const lang = useContext(langContext).lang;
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              {lang === "amh" ? (
                <div className="text-container__left">
                  <h4>ለምን እኛን መረጡን?</h4>
                  <h2>መቸም የምያገኙት ምርጥ ስምምነት</h2>
                  <p>
                    የትም የምያገኙትን ምርጥ ስምምነት እኛ ጋር ያገኛሉ። ሊተዉት የማይችሉት አጋርነት። እርሰዎን
                    ለማገልገል ሁልጊዜም ዝግጁ ነን። ከምንም በላይ የእርስዎ ደህንነትና ምቾት ያሳስበናል።
                    የሚፈልጉትን ተሽከርካሪ መርጠው ይውሰዱ ወደሚፈልጉበት ቦታ ይሂዱ። ስራዎትን እየሰሩ ይዝናኑ።
                    ያሉበት ቦታ ድረስ መኪናውን አምጥትን እናስረክብዎታልን። <br /> እርስዎ ብቻ ይምረጡ።
                  </p>
                  <Link to="/about">
                    ተጨማሪ &nbsp;
                    <i className="fa-solid fa-angle-right"></i>
                  </Link>
                </div>
              ) : (
                <div className="text-container__left">
                  <h4>Why Choose Us</h4>
                  <h2>Best valued deals you will ever find</h2>
                  <p>
                    Discover the best deals you'll ever find with our unbeatable
                    offers. We're dedicated to providing you with the best value
                    for your money, so you can enjoy top-quality services and
                    products without breaking the bank. Our deals are designed
                    to give you the ultimate renting experience, so don't miss
                    out on your chance to save big.
                  </p>
                  <Link to="/about">
                    Find Details &nbsp;
                    <i className="fa-solid fa-angle-right"></i>
                  </Link>
                </div>
              )}

              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  {lang === "amh" ? (
                    <div className="text-container__right__box__text">
                      <h4>አገር አቋራጭ ጉዞ</h4>
                      <p>
                        አገር አቋራጭ ጉዞ በመሄድ የመንዳት ልምድዎን ወደ ተሻል ደረጃ ያሳድጉ፣ እራስዎን
                        ያስደስቱ።
                      </p>
                    </div>
                  ) : (
                    <div className="text-container__right__box__text">
                      <h4>Cross Country Drive</h4>
                      <p>
                        Take your driving experience to the next level with our
                        top-notch vehicles for your cross-country adventures.
                      </p>
                    </div>
                  )}
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  {lang === "amh" ? (
                    <div className="text-container__right__box__text">
                      <h4>ተመጣጣኝ ክፍያ</h4>
                      <p>
                        በጣም ቀላልና ዘመናዊ የሆንውን የክፍያ ስርዓታችን በመጠቀም፣ የሚፈልጉትን ነገር በቀላሉ
                        ያግኙ።
                      </p>
                    </div>
                  ) : (
                    <div className="text-container__right__box__text">
                      <h4>All Inclusive Pricing</h4>
                      <p>
                        Get everything you need in one convenient, transparent
                        price with our all-inclusive pricing policy.
                      </p>
                    </div>
                  )}
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  {lang === "amh" ? (
                    <div className="text-container__right__box__text">
                      <h4>ግልጽና ታምኝ አገልግሎት</h4>
                      <p>ግልጽና ተመጣጣኝ በሆንው ክፍያችን ይደሰቱ። በታማኝና ግልጽ ክፍያ እናምናለን</p>
                    </div>
                  ) : (
                    <div className="text-container__right__box__text">
                      <h4>No Hidden Charges</h4>
                      <p>
                        Enjoy peace of mind with our no hidden charges policy.
                        We believe in transparent and honest pricing.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
