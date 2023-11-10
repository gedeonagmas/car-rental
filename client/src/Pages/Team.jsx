import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Person1 from "../images/team/1.png";
import Person2 from "../images/team/2.png";
import Person3 from "../images/team/3.png";
import Person4 from "../images/team/4.png";
import Person5 from "../images/team/5.png";
import Person6 from "../images/team/6.png";
import { langContext } from "../App";

function Team() {
  const lang = useContext(langContext).lang;
  const [pplData, setPPLData] = useState([]);
  const teamPpl = [
    { img: Person1, name: "Abrham Melaku", job: "Salesman" },
    { img: Person2, name: "Esayas Abera", job: "Business Owner" },
    { img: Person3, name: "Tewodros Mitku", job: "Photographer" },
    { img: Person4, name: "Tigist Abebe", job: "Car Detailist" },
    { img: Person5, name: "Dawit Brhanu", job: "Mechanic" },
    { img: Person6, name: "Gedion Agmas", job: "Menager" },
  ];

  const teamPplamharic = [
    { img: Person1, name: "አብርሃም መላኩ", job: "ግዥ" },
    { img: Person2, name: "ኢሳያስ አበራ", job: "የስራ አጋር" },
    { img: Person3, name: "ቴዎድሮስ ምትኩ", job: "የ ፎቶ ባለሙያ" },
    { img: Person4, name: "ትግስት አበበ", job: "መኪና ተቆጣጣሪ" },
    { img: Person5, name: "ዳዊት ብርሃኑ", job: "የጥገና ባልሙያ" },
    { img: Person6, name: "ጌዴዎን አግማስ", job: "ስራ አስኪያጅ" },
  ];

  useEffect(() => {
    lang === "amh" ? setPPLData(teamPplamharic) : setPPLData(teamPpl);
  }, [lang]);

  return (
    <>
      <section className="team-page">
        <HeroPages name={lang === "amh" ? "ሰራተኞቻችን" : "Our Team"} />
        <div className="cotnainer">
          <div className="team-container">
            {pplData?.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>
              </div>
            ))}
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

export default Team;
