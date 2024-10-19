// src/pages/ExchangeRates.js
import { useState } from "react";
import CurrencyTable from "../components/CurrencyTable";
import { mockRates } from "../utils/mockData"; // Import mock data

const ExchangeRates = () => {
  const [rates, setRates] = useState(mockRates);

  // Handle deleting a rate
  const handleDelete = (id) => {
    const updatedRates = rates.filter((rate) => rate.id !== id);
    setRates(updatedRates);
  };

  // Handle editing a rate (for simplicity, we'll just log it for now)
  const handleEdit = (id) => {
    const rateToEdit = rates.find((rate) => rate.id === id);
    console.log("Editing:", rateToEdit);
    // Open an edit modal (you could use the AddCurrencyModal for this purpose)
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Manage Exchange Rates</h2>
      <CurrencyTable
        rates={rates}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default ExchangeRates;
