// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ExchangeRates from './pages/ExchangeRates';
import AddCurrencyModal from './components/AddCurrencyModal';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="p-4 w-full">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home redirects based on authentication */}
            <Route path="/login" element={<Login />} /> {/* Login Page */}
            <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard Page */}
            <Route path="/exchange-rates" element={<ExchangeRates />} /> {/* Exchange Rates Management */}
            <Route path="/add-rate" element={<AddCurrencyModal />} /> {/* Modal to Add Rates */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
