import { Link, useLocation } from "react-router-dom";
import BgShape from "../images/hero/hero-bg.png";
import HeroCar from "../images/hero/main-car.png";
import { useContext, useEffect, useState } from "react";
import Login from "./Login";
import { langContext } from "../App";

function Hero() {
  const lang = useContext(langContext).lang;
  const [goUp, setGoUp] = useState(false);
  const [val, setVal] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <img className="bg-shape" src={BgShape} alt="bg-shape" />
          <div
            className={`${
              lang === "amh" ? "block" : "hidden"
            } h-20 w-40 absolute top-12 left-40 text-[24px] bg-gray-100 pl-4 z-50 font-extrabold`}
          >
            <p className="-mt-2">መኪና </p>
            <p className="-mt-3 text-gray-600">ኪራይ</p>
          </div>
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>
                {lang === "amh" ? "ለ ጉዞዎ አሁኑኑ ዕቅድ ይያዙ" : "Plan your trip now"}
              </h4>
              {lang === "amh" ? (
                <h1>
                  በ እኛ የመኪና ኪራይ <span>ጊዜ እና ገንዘብዎን </span> ያትርፉ
                </h1>
              ) : (
                <h1>
                  Save <span>big</span> with our car rental
                </h1>
              )}
              {lang === "amh" ? (
                <p>
                  ህልምዎ የ ሆነዉን መኪና ይከራዪ። ሊገፉት የማይችሉት ክፍያ፣ያልተገደበ ርቀት፣ዘመናዊ የ አጠቃቀም
                  ስርዐት እና ሌሎችም።{" "}
                </p>
              ) : (
                <p>
                  Rent the car of your dreams. Unbeatable prices, unlimited
                  miles, flexible pick-up options and much more.
                </p>
              )}

              <div className="hero-content__text__btns">
                {lang === "amh" ? (
                  <Link
                    onClick={bookBtn}
                    className="hero-content__text__btns__book-ride"
                    to="/book"
                  >
                    ይከራዪ &nbsp; <i className="fa-solid fa-circle-check"></i>
                  </Link>
                ) : (
                  <Link
                    onClick={bookBtn}
                    className="hero-content__text__btns__book-ride"
                    to="/book"
                  >
                    Book Ride <i className="fa-solid fa-circle-check"></i>
                  </Link>
                )}

                {lang === "amh" ? (
                  <Link
                    className="hero-content__text__btns__learn-more"
                    to="/about"
                  >
                    ተጨማሪ &nbsp; <i className="fa-solid fa-angle-right"></i>
                  </Link>
                ) : (
                  <Link
                    className="hero-content__text__btns__learn-more"
                    to="/about"
                  >
                    Learn More &nbsp;{" "}
                    <i className="fa-solid fa-angle-right"></i>
                  </Link>
                )}
              </div>
            </div>

            {/* img */}
            <img
              src={HeroCar}
              alt="car-img"
              className="hero-content__car-img"
            />
          </div>
        </div>
        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <i className="fa-solid fa-angle-up h-10 w-10">^</i>
        </div>
      </section>
    </>
  );
}

export default Hero;
