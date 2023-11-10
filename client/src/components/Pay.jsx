import React, { useEffect } from "react";

const Pay = (props) => {
  useEffect(() => {
    window.localStorage.setItem(
      "car-rental-payment-gedeon",
      JSON.stringify(props)
    );
  }, []);

  return (
    <div>
      <form
        method="POST"
        className=""
        action="https://api.chapa.co/v1/hosted/pay"
      >
        <input
          type="hidden"
          name="public_key"
          value="CHAPUBK_TEST-7osxyPCBKmA3NdC9nlaZkIrHMas5Falj"
        />
        <input type="hidden" name="tx_ref" value={`gedi-tx-${Date.now()}`} />
        <input type="hidden" name="amount" value={props.price} />
        <input type="hidden" name="currency" value="ETB" />
        <input type="hidden" name="email" value={props.email} />
        <input type="hidden" name="first_name" value={props.firstName} />
        <input type="hidden" name="last_name" value={props.lastName} />
        <input type="hidden" name="title" value="Let us do this" />
        <input
          type="hidden"
          name="description"
          value="Paying with Confidence with cha"
        />
        <input
          type="hidden"
          name="logo"
          value="https://yourcompany.com/logo.png"
        />
        <input
          type="hidden"
          name="callback_url"
          value="http://localhost:4000"
        />
        <input
          type="hidden"
          name="return_url"
          value={`http://localhost:4000/success`}
        />
        <input type="hidden" name="meta[title]" value="test" />
        <button
          className="py-4 h-20 rounded font-bold w-[100%] px-4 mt-2 bg-[#00aeff] text-white hover:text-gray-200"
          type="submit"
        >
          Pay And Book
        </button>
      </form>
    </div>
  );
};

export default Pay;
