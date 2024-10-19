// Sidebar.js
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <nav className="mt-10">
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/exchange-rates">Exchange Rates</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/add-rate">Add Rate</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
