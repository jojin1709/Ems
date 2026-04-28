import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import Dashboard from "./pages/Dashboard";
import Manage from "./pages/Manage";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Max_Power",
      email: "max@example.com",
      salary: "5000",
    },
  ]);

  return (
    <>
      <Header />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route
            path="/dashboard"
            element={<Dashboard users={users} setUsers={setUsers} />}
          />

          {/* ADD */}
          <Route
            path="/add"
            element={<Manage users={users} setUsers={setUsers} />}
          />

          {/* EDIT */}
          <Route
            path="/edit/:id"
            element={<Manage users={users} setUsers={setUsers} />}
          />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
