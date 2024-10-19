// AddCurrencyModal.js
import { useState } from "react";

const AddCurrencyModal = ({ onSave }) => {
  const [currency, setCurrency] = useState("");
  const [rate, setRate] = useState("");

  const handleSubmit = () => {
    onSave({ currency, rate });
    setCurrency("");
    setRate("");
  };

  return (
    <div className="modal">
      <div className="modal-content p-4">
        <h3 className="text-lg font-bold mb-4">Add New Currency</h3>
        <input
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          placeholder="Currency"
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="Rate"
          className="w-full p-2 mb-2 border rounded"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddCurrencyModal;
