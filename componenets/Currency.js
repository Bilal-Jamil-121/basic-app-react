'use client';
import React, { useState } from "react";
import { Currencyconvertor } from "../api/PostApi";

const Currency = () => {
  const [fromCurrency, setFromCurrency] = useState("AUD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setconvertedAmount] = useState(null);

  const handleconverter = async () => {
    try {
      if (amount === null || amount <= 0) {
        alert("Enter a valid amount greater than 0");
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
    <div className="bg-gradient-to-br from-gray-700 to-gray-900 text-white p-8 rounded-xl shadow-2xl w-full max-w-xl mx-auto">
      <h1 className="text-3xl font-extrabold text-center mb-8">💱 Currency Converter</h1>

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">From Currency</label>
          <select
            onChange={(e) => setFromCurrency(e.target.value)}
            value={fromCurrency}
            className="p-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="AUD">AUD</option>
            <option value="GBP">GBP</option>
            <option value="INR">INR</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">To Currency</label>
          <select
            onChange={(e) => setToCurrency(e.target.value)}
            value={toCurrency}
            className="p-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="AUD">AUD</option>
            <option value="GBP">GBP</option>
            <option value="INR">INR</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-1 text-sm font-medium">Amount</label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="Enter amount"
          className="w-full p-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handleconverter}
        className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-bold py-2 rounded-lg shadow-lg"
      >
        Convert
      </button>

      {convertedAmount !== null && (
        <div className="mt-6 p-4 bg-white text-black rounded-md text-center font-semibold text-lg shadow-inner">
          Converted Amount: {convertedAmount} {toCurrency}
        </div>
      )}
    </div>
  );
};

export default Currency;
