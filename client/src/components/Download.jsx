import { useContext } from "react";
import Img1 from "../images/download/appstore.svg";
import Img2 from "../images/download/googleapp.svg";
import { langContext } from "../App";

function Download() {
  const lang = useContext(langContext).lang;
  return (
    <>
      <section className="download-section">
        <div className="container">
          <div className="download-text">
            {lang === "amh" ? (
              <h2>የሞባይል መተግብሪያውን ክ ፕላይስቶር በማውረድ የተሻለ አገልግሎት ያግኙ።</h2>
            ) : (
              <h2>Download our app to get most out of it</h2>
            )}
            {lang === "amh" ? (
              <p>
                የሞባይል መተግብሪያውን ክ ፕላይስቶር በነጻ በማውረድ የተሻለና ፈፈጣን አገልግሎት በስልክዎ ማግኛትና
                ለዎዳጅዎም በቀላሉ ማጋራት ይችላሉ።
              </p>
            ) : (
              <p>
                Download the mobile application from play store for free and use
                it on your mobile application. share with your relatives easily.
              </p>
            )}

            <div className="download-text__btns">
              <img alt="download_img" src={Img2} />
              <img alt="download_img" src={Img1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
