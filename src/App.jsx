import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

// pages (DON'T TOUCH THEM)
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import Dashboard from "./pages/Dashboard";
import Manage from "./pages/Manage";

function App() {
  return (
    <>
      <Header />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manager" element={<Manage />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
