import { useContext, useState } from "react";
import { langContext } from "../App";

function Footer() {
  const lang = useContext(langContext).lang;
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [success, setSuccess] = useState(false);

  const subscribeHandler = () => {
    if (email.includes("@")) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 8000);
    } else {
      setInvalid(true);
      setTimeout(() => {
        setInvalid(false);
      }, 7000);
    }
  };
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              {lang === "amh" ? (
                <li>
                  <span>መኪና</span> ኪራይ
                </li>
              ) : (
                <li>
                  <span>CAR</span> Rental
                </li>
              )}
              {lang === "amh" ? (
                <li>
                  ህልምዎ የ ሆነዉን መኪና ይከራዪ። ሊገፉት የማይችሉት ክፍያ፣ያልተገደበ ርቀት፣ዘመናዊ የ አጠቃቀም
                  ስርዐት እና ሌሎችም።
                </li>
              ) : (
                <li>
                  We offers a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs.
                </li>
              )}

              <li>
                <a href="tel:+251954104637">
                  <i className="fa-solid fa-phone"></i> &nbsp; (+251) 954104637
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                  gedeonagmas2580@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; gedeonagmas2580@gmail.com
                </a>
              </li>

              <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://gedion.vercel.app/"
                >
                  {lang === "amh"
                    ? "በ ጌዴዎን አግማስ ተሠራ"
                    : "Designed by Gedeon Agmas"}
                </a>
              </li>
            </ul>

            {lang === "amh" ? (
              <ul className="footer-content__2">
                <li>መስሪያ ቤት</li>
                <li>
                  <a href="#home">አዲስ አበባ</a>
                </li>
                <li>
                  <a href="#home">ስልክ</a>
                </li>
                <li>
                  <a href="#home">ዜና</a>
                </li>
                <li>
                  <a href="#home">ስለ ስራ</a>
                </li>
              </ul>
            ) : (
              <ul className="footer-content__2">
                <li>Company</li>
                <li>
                  <a href="#home">Bahir Dar</a>
                </li>
                <li>
                  <a href="#home">Careers</a>
                </li>
                <li>
                  <a href="#home">Mobile</a>
                </li>
                <li>
                  <a href="#home">Blog</a>
                </li>
                <li>
                  <a href="#home">How we work</a>
                </li>
              </ul>
            )}

            {lang === "amh" ? (
              <ul className="footer-content__2">
                <li>የስራ ሰዐት</li>
                <li>ሰኞ - ዕሁድ: 2:00 - 11:00</li>
                <li>ቅዳሜ ከ 9:00 በኋላ አንሰራም</li>
                <li>እሁድ ከሰአት: ዝግ ነው</li>
              </ul>
            ) : (
              <ul className="footer-content__2">
                <li>Working Hours</li>
                <li>Mon -Sun: 9:00AM - 9:00PM</li>
                <li>Sat: After 9:00 Closed</li>
                <li>Sun: Afternoon Closed</li>
              </ul>
            )}

            <ul className="footer-content__2">
              {lang === "amh" ? <li>ምዝገባ</li> : <li>Subscription</li>}
              {lang === "amh" ? (
                <p className="text-[15px]">ለ አዳዲስ መረጃ የ ኢሜይል መለያዎን ያስመዝግቡ</p>
              ) : (
                <p>Subscribe your Email address for latest news & updates.</p>
              )}
              <li></li>
              {invalid && (
                <p className="text-xl font-extrabold">
                  {lang === "amh"
                    ? "የተሳሳት የ ኢሜይል መለያ"
                    : "Invalid Email please try with the correct one!"}
                </p>
              )}
              {success && (
                <p className="text-xl font-extrabold">
                  {lang === "amh"
                    ? "ምዝገባው ተሳክቷል እናመሰናለን።"
                    : "Subscription Added Thank You!"}
                </p>
              )}
              <li>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter Email Address"
                ></input>
              </li>
              <li>
                <button onClick={subscribeHandler} className="submit-email">
                  {lang === "amh" ? "መዝግብ" : "Submit"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
