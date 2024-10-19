// src/pages/Home.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem("authenticated");
    if (isAuthenticated === "true") {
      navigate("/dashboard"); // If authenticated, redirect to the dashboard
    } else {
      navigate("/login"); // If not, redirect to login
    }
  }, [navigate]);

  return null; // No need for UI since this is just a redirection page
};

export default Home;
