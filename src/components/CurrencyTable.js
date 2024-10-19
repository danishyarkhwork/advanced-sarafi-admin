// CurrencyTable.js
import { useState } from "react";

const CurrencyTable = ({ rates, onDelete, onEdit }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Currency</th>
            <th className="px-4 py-2">Rate</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rates.map((rate) => (
            <tr key={rate.id} className="bg-gray-50">
              <td className="border px-4 py-2">{rate.currency}</td>
              <td className="border px-4 py-2">{rate.rate}</td>
              <td className="border px-4 py-2">
                <button className="mr-2" onClick={() => onEdit(rate.id)}>
                  Edit
                </button>
                <button onClick={() => onDelete(rate.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyTable;
