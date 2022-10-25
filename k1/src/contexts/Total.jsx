import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const TotalContext = createContext();

export const TotalProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    const { data } = await axios.get("http://localhost:3000/projects");
    console.log(data);
    setProjects(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <TotalContext.Provider value={{ projects, setProjects, getData }}>
      {children}
    </TotalContext.Provider>
  );
};

export const useTotals = () => {
  const context = useContext(TotalContext);
  if (!context) {
    throw new Error("error, useTotals is outside total provider.");
  }
  return context;
};
