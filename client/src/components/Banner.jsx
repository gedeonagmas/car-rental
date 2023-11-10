import { useContext } from "react";
import { langContext } from "../App";

function Banner() {
  const context = useContext(langContext);
  return (
    <>
      <section className="banner-section">
        <div className="container">
          <div className="banner-content">
            <div className="banner-content__text">
              <h2>
                {context.lang === "amh"
                  ? "በ እኛ ቅናሽ የመኪና ኪራይ ብዙ ያትርፉ! "
                  : "Save big with our cheap car rental!"}
              </h2>
              <p>
                {context.lang === "amh"
                  ? "ከ ዕሁድ እስክ ዕሁድ ያልተገደበ አገልግሎት።"
                  : "Top Airports. Local Suppliers. <span>24/7</span> Support."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
