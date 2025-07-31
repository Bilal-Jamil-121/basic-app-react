'use client';
import React from "react";
import { useState } from "react";
import { Currencyconvertor } from "../api/PostApi";

const Currency = () => {
  const [fromCurrency, setFromCurrency] = useState("AUD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setconvertedAmount] = useState(null);

  const handleconverter = async () => {
    try {
      if (amount === null || amount <= 0) {
        alert("enter amount 0 to onward");
        setAmount("");
      } else {
        const res = await Currencyconvertor(fromCurrency, toCurrency, amount);
        const { conversion_result } = await res.data;
        setconvertedAmount(conversion_result);
        console.log(conversion_result);
        setAmount("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-600 border md:flex md:gap-y-5 flex-col text-white  md:w-1/2 place-self-center mt-20 p-10">
      <div className="mx-auto text-2xl font-bold">Currency Converter</div>
      <div className="md:flex justify-between ">
        <div className="mt-2">
          <label>
            From :
            <select
              onChange={(e) => {
                setFromCurrency(e.target.value);
              }}
              value={fromCurrency}
              className="border rounded text-sm bg-white text-black"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="AUD">AUD</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
            </select>
          </label>
        </div>
        <div className="mt-2">
          <label>
            To :
            <select
              onChange={(e) => {
                setToCurrency(e.target.value);
              }}
              value={toCurrency}
              className="border rounded  bg-white text-black"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="AUD">AUD</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
            </select>
          </label>
        </div>
      </div>
      <div>
        <p className="md:w-1/6 mt-2  md:mx-auto text-2xl">Amount :</p>
        <input
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          className="border w-full bg-white text-black"
          type="number"
          placeholder="Enter Amount"
        />
      </div>
      <button
        onClick={handleconverter}
        className=" bg-gray-900 flex p-4 mt-5 cursor-pointer rounded-full py-2 shadow-md hover:shadow-gray-800 hover:shadow-lg transition duration-300 mx-auto  hover:text-lg"
      >
        Convert
      </button>
      {convertedAmount !== null && (
        <div className="mt-10 text-black border-t-2">
          <h1 className="md:w-[45%] font-bold mx-auto ">
            Converted Amount : {convertedAmount} {toCurrency}{" "}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Currency;
