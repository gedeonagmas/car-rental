import { useContext } from "react";
import { Link } from "react-router-dom";
import { langContext } from "../App";

function CarBox({ data }) {
  const lang = useContext(langContext).lang;
  return (
    <>
      <div className="box-cars">
        {/* car */}
        <div className="pick-car">
          <img
            src={data.carPhoto}
            alt="car_img"
            className="h-[320px] rounded-md"
          />
        </div>
        {/* description */}
        <div className="pick-description">
          <div className="pick-description__price">
            {lang === "amh" ? (
              <span>{data.price} ብር በቀን</span>
            ) : (
              <span>{data.price} $ per day</span>
            )}
          </div>
          <div className="pick-description__table">
            <div className="pick-description__table__col">
              {lang === "amh" ? <span>ሞዴል</span> : <span>Model</span>}
              <span>{data.model}</span>
            </div>

            <div className="pick-description__table__col">
              {lang === "amh" ? <span>ማርክ</span> : <span>Mark</span>}
              <span>{data.mark}</span>
            </div>

            <div className="pick-description__table__col">
              {lang === "amh" ? <span>ዓ.ም</span> : <span>Year</span>}
              <span>{data.year}</span>
            </div>

            <div className="pick-description__table__col">
              {lang === "amh" ? <span>በር</span> : <span>Doors</span>}
              <span>{data.door}</span>
            </div>

            <div className="pick-description__table__col">
              {lang === "amh" ? <span>ኤሲ</span> : <span>AC</span>}
              <span>{data.ac}</span>
            </div>

            <div className="pick-description__table__col">
              {lang === "amh" ? (
                <span>ትራንስሚሽን</span>
              ) : (
                <span>Transmission</span>
              )}
              <span>{data.transmission}</span>
            </div>

            <div className="pick-description__table__col">
              {lang === "amh" ? <span>ነዳጅ</span> : <span>Fuel</span>}
              <span>{data.fuel}</span>
            </div>
          </div>
          {/* btn cta */}
          <Link className="cta-btn" to="book">
            {lang === "amh" ? "አሁኑኑ ይከራዪ" : "Reserve Now"}
          </Link>
        </div>
      </div>
    </>
  );
}

export default CarBox;
