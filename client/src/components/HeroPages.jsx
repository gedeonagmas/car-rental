import { useContext } from "react";
import { Link } from "react-router-dom";
import { langContext } from "../App";

function HeroPages({ name }) {
  const lang = useContext(langContext).lang;
  return (
    <>
      <section className="hero-pages">
        <div className="hero-pages__overlay"></div>
        <div className="container">
          <div className="hero-pages__text">
            <h3>{name}</h3>
            {lang === "amh" ? (
              <p>
                <Link to="/">መግቢያ</Link> / {name}
              </p>
            ) : (
              <p>
                <Link to="/">Home</Link> / {name}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPages;
