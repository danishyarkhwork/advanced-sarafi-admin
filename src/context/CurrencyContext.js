// src/context/CurrencyContext.js
import React, { createContext, useState } from "react";
import { mockRates } from "../utils/mockData"; // Initial mock data

// Create the context
export const CurrencyContext = createContext();

// CurrencyContext provider component
export const CurrencyProvider = ({ children }) => {
  const [rates, setRates] = useState(mockRates); // Initialize state with mock data

  // Function to add a new currency rate
  const addCurrencyRate = (newRate) => {
    setRates([...rates, newRate]);
  };

  // Function to delete a currency rate
  const deleteCurrencyRate = (id) => {
    setRates(rates.filter((rate) => rate.id !== id));
  };

  // Function to update a currency rate
  const updateCurrencyRate = (id, updatedRate) => {
    setRates(
      rates.map((rate) => (rate.id === id ? { ...rate, ...updatedRate } : rate))
    );
  };

  return (
    <CurrencyContext.Provider
      value={{
        rates,
        addCurrencyRate,
        deleteCurrencyRate,
        updateCurrencyRate,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
