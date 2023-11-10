import { useContext } from "react";
import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";
import { langContext } from "../App";

function PlanTrip() {
  const lang = useContext(langContext).lang;

  return (
    <>
      <section className="plan-section mt-20">
        <div className="container">
          <div className="plan-container">
            {lang === "amh" ? (
              <div className="plan-container__title z-20">
                <h3>ስለ ጉዞዎ አሁን ያቅዱ</h3>
                <h2>ያን ያክል ፈጣንና ቀላል ነው</h2>
              </div>
            ) : (
              <div className="plan-container__title z-20">
                <h3>Plan your trip now</h3>
                <h2>Quick & easy</h2>
              </div>
            )}

            <div className="plan-container__boxes">
              {lang === "amh" ? (
                <div className="plan-container__boxes__box flex flex-col items-center justify-center">
                  <img src={SelectCar} alt="icon_img" />
                  <h3>መኪና ይምረጡ</h3>
                  <p>
                    ከትንንሽ እስክ ትልቅ መኪናዎችን እናቀርብልዎታለን። የዕርስዎን የመንዳት ፍላጎት የሚያሟሉ ብዙ
                    ተሽከርካሪዎች አሉን።
                  </p>
                </div>
              ) : (
                <div className="plan-container__boxes__box flex flex-col items-center justify-center">
                  <img src={SelectCar} alt="icon_img" />
                  <h3>Select Car</h3>
                  <p>
                    We offers a big range of vehicles for all your driving
                    needs. We have the perfect car to meet your needs
                  </p>
                </div>
              )}

              {lang === "amh" ? (
                <div className="plan-container__boxes__box flex flex-col items-center justify-center">
                  <img src={Contact} alt="icon_img" />
                  <h3>ሰራተኞቻችን ያናግሩ</h3>
                  <p>
                    ብዙ ልምድ ያላቸውና ተግባቢ ሰራተኞቻችን ለማንኛውም ጥያቄና ዕገዛ ለእርስዎ መልስ ለመስጠት
                    ሁልጊዜ ዝግጁ ናቸው።
                  </p>
                </div>
              ) : (
                <div className="plan-container__boxes__box flex flex-col items-center justify-center">
                  <img src={Contact} alt="icon_img" />
                  <h3>Contact Operator</h3>
                  <p>
                    Our knowledgeable and friendly operators are always ready to
                    help with any questions or concerns
                  </p>
                </div>
              )}
              {lang === "amh" ? (
                <div className="plan-container__boxes__box flex flex-col items-center justify-center">
                  <img src={Drive} alt="icon_img" />
                  <h3>ያሽከርክሩ</h3>
                  <p>
                    ያለ ምንም ስጋትና ገደብ ወደ ሚፈልጉበት ቦታ ይጓዙ። መንገዱም መኪናዉም የ ዕርስዎ ነው።
                    በጉዞዎ ሁሉ አብረንዎት ነን።
                  </p>
                </div>
              ) : (
                <div className="plan-container__boxes__box flex flex-col items-center justify-center">
                  <img src={Drive} alt="icon_img" />
                  <h3>Let's Drive</h3>
                  <p>
                    Whether you're hitting the open road, we've got you covered
                    with our wide range of cars
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
