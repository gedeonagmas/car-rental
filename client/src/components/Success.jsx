import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { usePickCarMutation } from "../features/api/apiSlice";

const Success = () => {
  const navigate = useNavigate();
  const [pickCarData, pickCarResponse] = usePickCarMutation();
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const as = window.localStorage.getItem("car-rental-payment-gedeon");
    const cc = JSON.parse(as);
    const {
      pickDate,
      pickTime,
      dropDate,
      dropTime,
      carPhoto,
      model,
      mark,
      price,
      id,
      firstName,
      lastName,
      email,
      address,
      phone,
      profilePic,
    } = cc;
    if (cc) {
      pickCarData({
        firstName,
        lastName,
        email,
        address,
        phone,
        profilePic,
        carPhoto,
        model,
        mark,
        token: localStorage.getItem("car-rental-jwt-gedeon"),
        price,
        pickDate,
        pickTime,
        dropDate,
        dropTime,
        id,
      });
    }
  }, []);

  useEffect(() => {
    if (pickCarResponse.status === "fulfilled") {
      setError(false);
      setPending(false);
      setSuccess(true);
    } else if (pickCarResponse.status === "rejected") {
      setPending(false);
      setSuccess(false);
      setError(true);
    }
  }, [pickCarResponse]);

  return (
    <div className="text-xl pt-52 font-extrabold w-full h-full flex flex-col items-center justify-center">
      {pending && (
        <p className="px-2 py-2 text-gray-500 font-extrabold">Paying...</p>
      )}
      {success && (
        <div className="flex w-[50%] flex-col items-center justify-center gap-2">
          <p className="mt-2 font-extrabold text-2xl text-gray-500">
            Payment Successful.
          </p>
          <img src="./success.png" alt="" className="w-[70%] h-[70%] rounded" />
          <button
            onClick={() => navigate("/book")}
            className="mt-2 rounded hover:text-gray-200 px-10 py-2 text-white bg-gray-900"
          >
            Back to Home
          </button>
        </div>
      )}
      {error && (
        <div className="border border-red-500 text-red-500 absolute top-10 right-10 px-4 py-4">
          Something went wrong please try again
        </div>
      )}
    </div>
  );
};

export default Success;
