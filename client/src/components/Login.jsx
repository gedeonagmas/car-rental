import React, { useEffect, useState } from "react";
import { useUserLoginMutation } from "../features/api/apiSlice";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Loading from "./Loading";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, loginResponse] = useUserLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pop, setPop] = useState(true);

  const submit = () => {
    loginData({ email, password });
  };
  const homeHandler = () => {
    navigate("/", { replace: true });
  };
  useEffect(() => {
    if (loginResponse?.status === "fulfilled") {
      localStorage.setItem("car-rental-jwt-gedeon", loginResponse.data.token);
      localStorage.setItem(
        "car-rental-user-gedeon",
        JSON.stringify(loginResponse.data.data)
      );
    }
    const detail = localStorage.getItem("car-rental-jwt-gedeon");
    if (detail) {
      navigate("/", { replace: true });
    }
  }, [loginResponse]);

  return (
    <div className="flex h-[100vh] overflow-hidden w-[100%]  bg-white  items-center justify-center">
      <div
        onClick={homeHandler}
        className="absolute z-20 bg-transparent backdrop-blur-lg backdrop-brightness-50 w-[100%] h-[100%] left-0"
      ></div>
      <Hero />
      <div className="absolute z-30 flex-col items-center justify-center bg-transparent w-auto h-auto">
        <p className="text-3xl font-extrabold flex items-center justify-center text-white py-5 px-4 uppercase">
          Log in
        </p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="h-20 text-xl font-bold rounded-sm mt-6 w-[100%] text-center text-black bg-white px-2 py-1 border-2 border-white focus:outline-gray-100"
          type="text"
          placeholder="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="h-20 text-xl rounded-sm font-bold mt-6 w-[100%] text-center text-black bg-white px-2 py-1 border-2 border-white focus:outline-gray-100"
          type="password"
          placeholder="password"
        />
        {loginResponse?.status === "pending" ? (
          <div className="w-[100%] mt-3 bg-[#ff4d30] h-20 flex flex-col text-2xl font-bold text-white items-center justify-center">
            <Loading />
          </div>
        ) : (
          <button
            onClick={submit}
            className="h-20 rounded-sm text-2xl hover:text-gray-300 mt-3 w-[100%] px-6 bg-[#ff4d30] text-white font-extrabold"
          >
            Login
          </button>
        )}
        {loginResponse?.status === "rejected" && (
          <div className="shadow-xl flex items-center justify-center shadow-[#ff4d30] mt-7 border bg-white px-2 py-4 h-auto w-auto border-[#ff4d30] text-[#ff4d30] font-bold text-xl">
            {loginResponse.error?.data.msg}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
