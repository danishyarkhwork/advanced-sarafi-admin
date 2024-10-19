// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import ExchangeRates from "./pages/ExchangeRates";
import AddCurrencyModal from "./components/AddCurrencyModal";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="p-4 w-full">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/exchange-rates" element={<ExchangeRates />} />
            <Route path="/add-rate" element={<AddCurrencyModal />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
