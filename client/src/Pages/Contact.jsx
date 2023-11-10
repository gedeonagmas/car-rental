import { useContext, useState } from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { useSendEmailMutation } from "../features/api/apiSlice";
import { langContext } from "../App";

function Contact() {
  const lang = useContext(langContext).lang;
  const [emailData] = useSendEmailMutation();
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);
  const [fill, setFill] = useState(false);

  window.scrollTo({ top: 0 });
  const sendEmail = () => {
    if (names.length > 1 && email.includes("@") && message.length > 1) {
      emailData({
        name: names,
        email,
        message,
      });
      setDone(true);
      setTimeout(() => {
        setDone(false);
      }, 5000);
    } else {
      setFill(true);
      setTimeout(() => {
        setFill(false);
      }, 8000);
    }
  };

  return (
    <>
      <section className="contact-page">
        {/* <HeroPages name="Contact" /> */}
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text mt-32">
              <h2>
                {lang === "amh"
                  ? "ተጨማሪ መረጃ ይፈልጋሉ?"
                  : "Need additional information?"}
              </h2>
              <p>
                {lang === "amh"
                  ? "በቂ ልምድ ያላቸው ሰራተኞቻችን እርስዎን ለማገዝ ሁልጊዜም በተጠንቀቅ ላይ ናቸው። መጠየቅ የሚፈልጉት ነገር ካለ በፈለጉት ሰአት መጠየቅ ይችላሉ።"
                  : "Our professional workers are always ready to help you out on any kind of questions or any additional information just ask we will bring the best of our self."}
                .
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; (+251)0954104637
              </a>
              <a href="mailto:gedeonagmas2580@gmail.com">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                gedeonagmas2580@gmail.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp;{" "}
                {lang === "amh" ? "አዲስ አበባ" : "addis ababa/ethiopia"}
              </a>
            </div>
            <div className="contact-div__form mt-40">
              {done && (
                <p className="absolute top-96 right-10 z-30 h-20 px-3 py-3 w-64 text-center text-xl font-extrabold text-emerald-500 border border-emerald-500">
                  {lang === "amh"
                    ? "መልክቱ ተልኳል፣ ስለ ጻፉልን እናመሰግናለን።"
                    : "Email Sent Thank you for contacting us!!"}
                </p>
              )}
              {fill && (
                <p className="absolute bg-red-200  top-96 right-10 z-30 h-20 px-3 py-5 w-64 text-center text-xl font-extrabold text-red-500 border border-red-500">
                  {lang === "amh"
                    ? "እባክዎ ቅጹን በትክክል ይሙሉ!"
                    : "Please fill out the form correctly!"}
                </p>
              )}
              <form>
                <label>
                  {lang === "amh" ? "ሙሉ ስም" : "Full Name"} <b>*</b>
                </label>
                <input
                  onChange={(e) => setNames(e.target.value)}
                  type="text"
                  placeholder={
                    lang === "amh" ? "ጌዴዎን አግማስ" : "e.g: Gedeon Agmas"
                  }
                />

                <label>
                  {lang === "amh" ? "ኢሜይል" : "Email"} <b>*</b>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="youremail@example.com"
                />

                <label>
                  {lang === "amh" ? "ምንድን ንው የሚፈልጉት ይንገሩን" : "Tell us about it"}{" "}
                  <b>*</b>
                </label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={lang === "amh" ? "እዚህ ላይ ይጻፉ.." : "Write Here.."}
                />

                <button onClick={sendEmail} type="button">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp;{" "}
                  {lang === "amh" ? "መልክቱን ላክ" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
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

export default Contact;
