import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useContext, useEffect, useState } from "react";
import { MenuItem } from "@mui/material";
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import { langContext } from "../App";

function Navbar() {
  const lang = useContext(langContext).lang;
  const context = useContext(langContext);
  const [language, setLanguage] = useState(false);
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const user = JSON.parse(localStorage.getItem("car-rental-user-gedeon"));
  const openNav = () => {
    setNav(!nav);
  };

  const logout = () => {
    navigate("/", { replace: true });
    localStorage.clear();
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark">
              <Close fontSize="large" />
            </i>
          </div>

          <ul className="mobile-navbar__links bg-white">
            <li>
              {lang === "amh" ? (
                <Link onClick={openNav} to="/">
                  መግቢያ
                </Link>
              ) : (
                <Link onClick={openNav} to="/">
                  Home
                </Link>
              )}
            </li>
            <li>
              {lang === "amh" ? (
                <Link onClick={openNav} to="/about">
                  ስለ እኛ
                </Link>
              ) : (
                <Link onClick={openNav} to="/about">
                  about
                </Link>
              )}
            </li>
            <li>
              {lang === "amh" ? (
                <Link onClick={openNav} to="/book">
                  ኪራይ
                </Link>
              ) : (
                <Link onClick={openNav} to="/book">
                  book
                </Link>
              )}
            </li>
            <li>
              {lang === "amh" ? (
                <Link onClick={openNav} to="/testimonials">
                  አስተያየቶች
                </Link>
              ) : (
                <Link onClick={openNav} to="/testimonials">
                  Testimonials
                </Link>
              )}
            </li>
            <li>
              {lang === "amh" ? (
                <Link onClick={openNav} to="/team">
                  ሰራተኞቻችን
                </Link>
              ) : (
                <Link onClick={openNav} to="/team">
                  Our Team
                </Link>
              )}
            </li>
            <li>
              {lang === "amh" ? (
                <Link onClick={openNav} to="/contact">
                  ያግኙን
                </Link>
              ) : (
                <Link onClick={openNav} to="/contact">
                  Contact
                </Link>
              )}
            </li>
            <li>
              {user === null && (
                <div className="flex flex-col gap-3 -mt-5">
                  {lang === "amh" ? (
                    <Link
                      onClick={openNav}
                      className="navbar__buttons__sign-in"
                      to="/login"
                    >
                      ግባ
                    </Link>
                  ) : (
                    <Link
                      onClick={openNav}
                      className="navbar__buttons__sign-in"
                      to="/login"
                    >
                      Login
                    </Link>
                  )}
                  {lang === "amh" ? (
                    <Link
                      onClick={openNav}
                      className="navbar__buttons__register"
                      to="/signup"
                    >
                      መዝግብ
                    </Link>
                  ) : (
                    <Link
                      onClick={openNav}
                      className="navbar__buttons__register"
                      to="/signup"
                    >
                      Register
                    </Link>
                  )}
                </div>
              )}
            </li>
            <li>
              {localStorage.getItem("car-rental-jwt-gedeon") !== null &&
                user && (
                  <div className="flex flex-col relative gap-3 -mt-5">
                    {lang === "amh" ? (
                      <p
                        onMouseOver={() => setLanguage(true)}
                        className="cursor-pointer"
                      >
                        ቋንቋዎች
                      </p>
                    ) : (
                      <p
                        onMouseOver={() => setLanguage(true)}
                        className="cursor-pointer"
                      >
                        Languages
                      </p>
                    )}
                    {language && (
                      <div
                        onMouseLeave={() => setLanguage(false)}
                        className="h-auto w-auto absolute top-14 px-1 py-1 bg-white rounded-lg shadow shadow-black flex flex-col items-center justify-center"
                      >
                        <div
                          onChange={(e) => context.setLang(e.target.val)}
                          name=""
                          id=""
                          className="h-auto py-2"
                        >
                          <p
                            value="amh"
                            onClick={() => {
                              context.setLang("amh");
                              setLanguage(false);
                            }}
                            className={`${
                              lang === "amh" ? "text-red-500" : "text-black"
                            } rounded-md px-1 py-1 cursor-pointer hover:text-red-300`}
                          >
                            አማርኛ
                          </p>
                          <p
                            value="english"
                            onClick={() => {
                              context.setLang("ENG");
                              setLanguage(false);
                            }}
                            className={`${
                              lang !== "amh" ? "text-red-500" : "text-black"
                            } rounded-md px-1 py-1 cursor-pointer hover:text-red-300`}
                          >
                            English
                          </p>
                        </div>
                      </div>
                    )}{" "}
                    {user.role === "admin" && lang === "amh" && (
                      <Link
                        onClick={()=>{openNav();window.location.reload(true)}}
                        className="navbar__buttons__sign-in"
                        to="admin"
                      >
                        መቆጣጠሪያ ክፍል
                      </Link>
                    )}
                    {user.role === "admin" && lang !== "amh" && (
                      <Link
                        onClick={openNav}
                        className="navbar__buttons__sign-in"
                        to="admin"
                      >
                        Admin Panel
                      </Link>
                    )}
                    {lang === "amh" ? (
                      <Link
                        onClick={() => {
                          openNav();
                          logout();
                        }}
                        className="navbar__buttons__sign-in"
                        to="/"
                      >
                        ይውጡ
                      </Link>
                    ) : (
                      <Link
                        onClick={() => {
                          openNav();
                          logout();
                        }}
                        className="navbar__buttons__sign-in"
                        to="/"
                      >
                        Logout
                      </Link>
                    )}
                    <Link
                      onClick={openNav}
                      className="navbar__buttons__register"
                      to="/"
                    >
                      {user.role}
                    </Link>
                  </div>
                )}
            </li>
          </ul>
        </div>

        {/* desktop */}
        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <div
            className={`absolute right-2 block lg:hidden cursor-pointer top-12 ${
              nav ? "hidden" : "block"
            }`}
          >
            <Menu
              sx={{ width: 56, height: 56 }}
              onClick={openNav}
              fontSize="large"
            />
          </div>
          <ul className="navbar__links">
            <li>
              {lang === "amh" ? (
                <Link to="/">መግቢያ</Link>
              ) : (
                <Link to="/">Home</Link>
              )}
            </li>
            <li>
              {lang === "amh" ? (
                <Link to="/about">ስለ እኛ</Link>
              ) : (
                <Link to="/about">about</Link>
              )}
            </li>
            <li>
              {lang === "amh" ? (
                <Link to="/book">ኪራይ</Link>
              ) : (
                <Link to="/book">book</Link>
              )}
            </li>
            <li>
              {lang === "amh" ? (
                <Link to="/testimonials">አስተያየቶች</Link>
              ) : (
                <Link to="/testimonials">Testimonials</Link>
              )}
            </li>
            <li>
              {lang === "amh" ? (
                <Link to="/team">ሰራተኞቻችን</Link>
              ) : (
                <Link to="/team">Our Team</Link>
              )}
            </li>
            <li>
              {lang === "amh" ? (
                <Link to="/contact">ያግኙን</Link>
              ) : (
                <Link to="/contact">Contact</Link>
              )}
            </li>
          </ul>
          {user === null && (
            <div className="navbar__buttons">
              {lang === "amh" ? (
                <Link className="navbar__buttons__sign-in" to="/login">
                  ግባ
                </Link>
              ) : (
                <Link className="navbar__buttons__sign-in" to="/login">
                  Login
                </Link>
              )}
              {lang === "amh" ? (
                <Link className="navbar__buttons__register" to="/signup">
                  መዝግብ
                </Link>
              ) : (
                <Link className="navbar__buttons__register" to="/signup">
                  Register
                </Link>
              )}
            </div>
          )}
          {localStorage.getItem("car-rental-jwt-gedeon") !== null && user && (
            <div className="navbar__buttons relative">
              {lang === "amh" ? (
                <p
                  onMouseOver={() => setLanguage(true)}
                  className="cursor-pointer"
                >
                  ቋንቋዎች
                </p>
              ) : (
                <p
                  onMouseOver={() => setLanguage(true)}
                  className="cursor-pointer"
                >
                  Languages
                </p>
              )}
              {language && (
                <div
                  onMouseLeave={() => setLanguage(false)}
                  className="h-auto w-auto absolute top-14 px-1 py-1 bg-white rounded-lg shadow shadow-black flex flex-col items-center justify-center"
                >
                  <div
                    onChange={(e) => context.setLang(e.target.val)}
                    name=""
                    id=""
                    className="h-auto py-2"
                  >
                    <p
                      value="amh"
                      onClick={() => {
                        context.setLang("amh");
                        setLanguage(false);
                      }}
                      className={`${
                        lang === "amh" ? "text-red-500" : "text-black"
                      } rounded-md px-1 py-1 cursor-pointer hover:text-red-300`}
                    >
                      አማርኛ
                    </p>
                    <p
                      value="english"
                      onClick={() => {
                        context.setLang("ENG");
                        setLanguage(false);
                      }}
                      className={`${
                        lang !== "amh" ? "text-red-500" : "text-black"
                      } rounded-md px-1 py-1 cursor-pointer hover:text-red-300`}
                    >
                      English
                    </p>
                  </div>
                </div>
              )}{" "}
              {user.role === "admin" && lang === "amh" && (
                <Link className="navbar__buttons__sign-in" to="admin">
                  መቆጣጠሪያ ክፍል
                </Link>
              )}
              {user.role === "admin" && lang !== "amh" && (
                <Link className="navbar__buttons__sign-in" to="admin">
                  Admin Panel
                </Link>
              )}
              {lang === "amh" ? (
                <Link
                  onClick={() => {
                    logout();
                  }}
                  className="navbar__buttons__sign-in"
                  to="/"
                >
                  ይውጡ
                </Link>
              ) : (
                <Link
                  onClick={() => {
                    logout();
                  }}
                  className="navbar__buttons__sign-in"
                  to="/"
                >
                  Logout
                </Link>
              )}
              <Link className="navbar__buttons__register" to="/">
                {user.role}
              </Link>
            </div>
          )}
          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
