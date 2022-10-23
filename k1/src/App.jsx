import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/layout/Navbar";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // getData();
    navigate("timer");
  }, []);

  return (
    <div className="App">
      <Outlet />
      <Navbar />
    </div>
  );
}

export default App;
