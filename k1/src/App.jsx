import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import "./App.css";

export async function loader() {
  const { data } = await axios.get("http://localhost:3000/timelogs");
  return { data };
}

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get("http://localhost:3000/timelogs");
    setTodos(data);
  };
  console.log(todos);
  return (
    <div className="App">
      <Outlet />
      <Navbar />
    </div>
  );
}

export default App;
