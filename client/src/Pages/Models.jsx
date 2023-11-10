import Footer from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import {
  useGetAllCarsQuery,
  usePickCarMutation,
} from "../features/api/apiSlice";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Close from "@mui/icons-material/Close";
import Loading from "../components/Loading";
import Pay from "./../components/Pay";
import { langContext } from "../App";

function Models() {
  const lang = useContext(langContext).lang;
  const { data } = useGetAllCarsQuery({ type: "user" });
  const [pickCarData, pickCarResponse] = usePickCarMutation();
  const [userData, setUserData] = useState();
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("car-rental-user-gedeon")));
  }, []);
  let today = new Date().toISOString().split("T")[0];

  const [cars, setCars] = useState();
  const [error, setError] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [carPayment, setCarPayment] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [pickError, setPickError] = useState(false);
  const [fillError, setFillError] = useState(false);

  const [formPopUp, setFormPopUp] = useState(false);
  const [allowPayment, setAllowPayment] = useState(false);

  useEffect(() => {
    if (pickCarResponse.status === "fulfilled") {
      setPickError(true);
      setTimeout(() => {
        setPickError(false);
      }, 6000);
    }
  }, [pickCarResponse]);

  const formHandler = (car) => {
    if (!localStorage.getItem("car-rental-jwt-gedeon")) {
      setErrorMessage("to proceed please login first");
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 6000);
    } else if (localStorage.getItem("car-rental-jwt-gedeon")) {
      setCarPayment(car);
      setFormPopUp(true);
    }
  };

  useEffect(() => {
    if (data) {
      setCars(data);
    }
  }, [data]);

  useEffect(() => {
    if (searchInput.length > 0) {
      setCars(
        data.filter((d) =>
          d.model.toString().toLowerCase().startsWith(searchInput.toLowerCase())
        )
      );
    } else if (searchInput.length === 0) {
      setCars(data);
    }
  }, [searchInput, data]);

  return (
    <>
      <section className="models-section">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="w-[80%] mx-[10%] h-20 mt-44 border focus:outline-none focus:border-2 rounded-full text-center text-2xl font-extrabold border-[#ff4c30]"
          placeholder={lang === "amh" ? "መኪና ይፈልጉ" : "Search Vehicles"}
        />
        {/* <HeroPages name="Vehicle Models" /> */}
        <div className="container">
          <div className="models-div">
            {cars ? (
              cars.map((car) => {
                return (
                  <div
                    key={car._id}
                    className="relative flex rounded-2xl items-center shadow-xl shadow-gray-500 flex-col bg-gray-50 h-[410px] w-[340px]"
                  >
                    <img
                      src={car.carPhoto}
                      alt="CAR"
                      className="h-full brightness-[0.7] border w-full absolute top-0 left-0 z-10 rounded-2xl object-cover object-center"
                    />

                    <div className="absolute brightness-125 px-5 bg-gray-200 text-[20px] font-extrabold bg-transparent text-white items-start justify-end py-4 rounded-2xl z-20 top-0 left-0 h-full w-full flex flex-col">
                      <p className="">
                        {lang === "amh" ? "ሞዴል " : "Model "}{" "}
                        <span className="ml-3">{car.model}</span>
                      </p>
                      <p className="">
                        {lang === "amh" ? "ማርክ " : "Mark "}{" "}
                        <span className="ml-3">{car.model}</span>
                      </p>
                      <p className="">
                        {lang === "amh" ? "ዋጋ " : "Price "}{" "}
                        <span className="ml-3">
                          {car.price} {lang === "amh" ? "ብር" : "$"}
                        </span>
                      </p>
                      {/* <p className="">
                        {lang === "amh" ? "በር ፣ " : "Door : "}{" "}
                        <span className="text-red-400">{car.door}</span>
                      </p> */}
                      {/* <p className="">
                        {lang === "amh" ? "ነዳጅ ፣ " : "Fuel : "}
                        <span className="text-red-400">{car.fuel}</span>
                      </p> */}
                      <p className="">
                        {lang === "amh" ? "ትራንስሚሽን " : "Transmission "}{" "}
                        <span className="ml-3">{car.transmission}</span>
                      </p>
                      {/* <p className="">
                        {lang === "amh" ? "ኤሲ ፣ " : "Ac : "}
                        <span className="text-red-400">{car.ac}</span>
                      </p> */}

                      {car.status === "Taken" && (
                        <div className="mt-4 rounded-md text-3xl font-extrabold text-white bg-red-400 flex py-5 justify-center items-center h-auto w-[60%] cursor-default">
                          {lang === "amh" && car.status === "Taken"
                            ? "ተይዟል"
                            : car.status}{" "}
                          <span className="text-xl text-gray-200 font-bold ml-2">
                            {lang === "amh" ? "በኋላ ይጎብኙ" : "(Visit Later)"}
                          </span>{" "}
                        </div>
                      )}
                      {car.status === "available" && (
                        <div
                          onClick={() => {
                            formHandler(car);
                            // setCarPrice(car.price);
                          }}
                          className="mt-4 rounded-md text-3xl font-extrabold text-white bg-[#ff4d30] flex py-5 justify-center items-center h-auto w-[60%] cursor-pointer hover:scale-105 duration-200"
                        >
                          {lang === "amh" ? "አሁን ይከራዪ" : "Book Now"}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex items-center absolute w-[100%] left-0 h-[100%] justify-center  text-3xl font-extrabold text-gray-500">
                {lang === "amh" ? "በመጠበቅ ላይ..." : "Loading..."}
              </div>
            )}

            {error && errorMessage && (
              <div className="fixed z-40 bg-white text-3xl top-72 right-10 w-auto rounded-md h-auto border border-gray-500 text-gray-500 py-2 px-2 shadow-xl shadow-gray-400 flex items-center justify-center">
                {errorMessage}
              </div>
            )}
            {/* ################################################################################## */}
            {formPopUp && carPayment && (
              <div className="fixed z-50 backdrop-blur-sm backdrop-brightness-[0.7] bg-transparent  h-[100vh] w-[100%] top-0 left-0 flex flex-col items-center justify-center">
                <div
                  onClick={() => {
                    setPickDate(" ");
                    setDropDate(" ");
                    setPickTime(" ");
                    setDropTime(" ");
                    setFormPopUp(false);
                  }}
                  className="absolute z-20  h-[100vh] w-[100%] top-0 left-0 bg-transparent"
                ></div>
                <div className="relative px-10 h-auto py-5 gap-1 text-2xl flex flex-col items-start justify-start rounded-md z-30 bg-white w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[35%]">
                  <p className="text-3xl underline font-extrabold text-gray-500">
                    {lang === "amh" ? "የኪራይ መረጃ" : "Rental Information"}
                  </p>
                  <img
                    src={carPayment.carPhoto}
                    alt="car"
                    className="w-full rounded-md object-cover object-center h-52"
                  />
                  <table border={1} className="border w-full border-black">
                    <tr className=" border border-black text-start">
                      <td className="px-5">
                        {lang === "amh" ? "ሞዴል" : "Model "}
                      </td>
                      <td className="px-5 border-l border-black">
                        {carPayment.model}
                      </td>
                    </tr>
                    <tr className=" border border-black text-start">
                      <td className="px-5">
                        {lang === "amh" ? "ዋጋ " : "Price"}
                      </td>
                      <td className="px-5 border-l border-black">
                        {carPayment.price} {lang === "amh" ? "ብር" : "$"}{" "}
                        <span className="">
                          {lang === "amh" ? "በቀን" : "per day"}
                        </span>
                      </td>
                    </tr>
                    <tr className=" border border-black text-start">
                      <td className="px-5">
                        {lang === "amh" ? "በር " : "Door "}
                      </td>
                      <td className="px-5 border-l border-black">
                        {carPayment.door}
                      </td>
                    </tr>
                    <tr className=" border border-black text-start">
                      <td className="px-5">
                        {lang === "amh" ? "ነዳጅ " : "Fuel "}
                      </td>
                      <td className="px-5 border-l border-black">
                        {carPayment.fuel}
                      </td>
                    </tr>
                    <tr className=" border border-black text-start">
                      <td className="px-5">
                        {lang === "amh" ? "ትራንስሚሽን " : "Transmission "}
                      </td>
                      <td className="px-5 border-l border-black">
                        {carPayment.transmission}
                      </td>
                    </tr>
                    <tr className=" border border-black text-start">
                      <td className="px-5">{lang === "amh" ? "ኤሲ " : "Ac "}</td>
                      <td className="px-5 border-l border-black">
                        {carPayment.ac}
                      </td>
                    </tr>
                    <tr className=" border border-black text-start">
                      <td className="px-5">
                        {lang === "amh" ? "ማርክ " : "Mark "}
                      </td>
                      <td className="px-5 border-l border-black">
                        {carPayment.mark}
                      </td>
                    </tr>
                  </table>

                  <p className="text-2xl font-extrabold underline py-1 text-gray-500">
                    {lang === "amh" ? "የመክፈያ ቅጽ" : "Rental Form"}
                  </p>
                  <p className="text-xl font-bold text-red-400">
                    {lang === "amh"
                      ? "ሁሉም ክፍት ቦታዎች መሞላት አለባቸው"
                      : "* each fields are required *"}
                  </p>
                  <div className="flex border border-black flex-col w-full">
                    <p className="py-1 w-full border-b border-black font-extrabold">
                      {lang === "amh"
                        ? "እባክዎ የመከራያ ቀንና ሰአት ይምረጡ"
                        : "Select Pick-Up Date & Time"}
                    </p>
                    <p className="flex w-full text-xl">
                      <input
                        min={today}
                        required
                        onChange={(e) => {
                          setPickDate(e.target.value);
                        }}
                        type="date"
                        className="border-r mr-2 w-1/2 border-black"
                      />
                      <input
                        min={today}
                        required
                        onChange={(e) => {
                          setPickTime(e.target.value);
                        }}
                        type="time"
                        className=""
                      />
                    </p>
                  </div>
                  <div className="flex border mt-2 border-black flex-col w-full">
                    <p className="py-1 w-full border-b border-black font-extrabold">
                      {lang === "amh"
                        ? "እባክዎ የመመለሻ ቀንና ሰአት ይምረጡ"
                        : "Select Drop-Off Date & Time"}
                    </p>
                    <p className="flex text-xl">
                      <input
                        min={today}
                        required
                        onChange={(e) => {
                          setDropDate(e.target.value);
                        }}
                        type="date"
                        className="border-r mr-2 w-1/2 border-black"
                      />
                      <input
                        min={today}
                        required
                        onChange={(e) => {
                          setDropTime(e.target.value);
                        }}
                        type="time"
                        className=""
                      />
                    </p>
                  </div>
                  <div className="flex mt-2 px-1 w-full border border-black items-center">
                    <p className="text-xl w-1/2 border-r ml-1 text-start border-black font-extrabold">
                      {lang === "amh" ? "የመክፈያ መንገድ" : "Payment Methods"}
                    </p>
                    <div className="flex py-1 px-2 gap-2">
                      <input
                        type="radio"
                        name="chappa"
                        id=""
                        checked
                        className="mt-1"
                      />
                      <p className="text-xl font-bold mt-2">
                        {lang === "amh"
                          ? "ቻፓ የመክፈያ ዘዴ"
                          : "chappa payment gateway"}
                      </p>
                    </div>
                  </div>

                  {pickDate.toString().length > 0 &&
                  pickTime.toString().length > 0 &&
                  dropDate.toString().length > 0 &&
                  dropTime.toString().length > 0 ? (
                    <Pay
                      carPhoto={carPayment.carPhoto}
                      model={carPayment.model}
                      mark={carPayment.mark}
                      price={carPayment.price}
                      id={carPayment._id}
                      pickDate={pickDate}
                      pickTime={pickTime}
                      dropDate={dropDate}
                      dropTime={dropTime}
                      firstName={userData.firstName}
                      lastName={userData.lastName}
                      email={userData.email}
                      address={userData.address}
                      phone={userData.phone}
                      profilePic={userData.profilePic}
                    />
                  ) : (
                    <div
                      onClick={() => {
                        setFillError(true);
                        setTimeout(() => {
                          setFillError(false);
                        }, 5000);
                      }}
                      className="py-3 flex items-center justify-center cursor-pointer h-20 rounded font-bold w-[100%] px-4 mt-2 bg-[#00aeff] text-white hover:text-gray200"
                    >
                      {lang === "amh" ? "ይክፈሉና ይከራዪ" : "Pay And Book"}
                    </div>
                  )}
                  {pickCarResponse.status === "rejected" && (
                    <div className="w-[100%] px-2 py-2 border bg-red-200 border-red-500 text-red-500 text-xl font-bold  absolute top-10 right-20">
                      {pickCarResponse?.error?.data}
                    </div>
                  )}
                  {pickError && (
                    <div className="w-full px-2 py-5 border border-emerald-400 bg-emerald-200 text-2xl font-bold text-emerald-400 absolute z-40 bottom-10 right-0">
                      {pickCarResponse?.data?.message}
                    </div>
                  )}
                  {fillError && (
                    <div className="w-full px-2 flex items-center justify-center border border-red-500 bg-red-200 py-4 text-2xl font-bold text-red-500 absolute z-40 bottom-40 left-0">
                      {lang === "amh"
                        ? "እባክዎ የመከራያና የመመልሻ ቀን ይምረጡ"
                        : "please choose pick and drop date"}
                    </div>
                  )}
                  <Close
                    fontSize="large"
                    onClick={() => {
                      setFormPopUp(false);
                      setFillError(false);
                    }}
                    className="top-4 md:top-1 absolute right-2 md:right-1 hover:cursor-pointer text-gray-600 hover:text-gray-500"
                  />
                  {/* ############################################################################### */}
                </div>
              </div>
            )}
            {/* ################################################################################## */}
          </div>
          {cars && cars.length < 1 && (
            <div className="w-[100%] font-extrabold h-[100%] flex items-center justify-center text-3xl text-gray-500">
              {lang === "amh" ? "ይቅርታ መኪናው አልተገኘም" : "Cars Not Found"}
            </div>
          )}
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

export default Models;
