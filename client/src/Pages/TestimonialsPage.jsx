import { useContext } from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Testimonials from "../components/Testimonials";
import { langContext } from "../App";

function TestimonialsPage() {
  const lang = useContext(langContext).lang;

  return (
    <>
      <section className="testimonial-page">
        <HeroPages name={lang === "amh" ? "አስተያየቶች" : "Testimonials"} />
        <Testimonials />
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
      </section>
    </>
  );
}

export default TestimonialsPage;
