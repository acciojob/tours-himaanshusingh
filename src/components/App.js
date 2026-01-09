import React, { useEffect, useState, createContext } from "react";
import "../styles/App.css";
import Loading from "./Loading";
import Tours from "./Tours";
import "regenerator-runtime/runtime";

const api = "https://www.course-api.com/react-tours-project";
export const Store = createContext();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await fetch(api);
      const toursData = await data.json();
      setTours(toursData);
      setIsLoading(false);
    })();
  }, []);

  return (
    <Store.Provider value={[tours, setTours, api, setIsLoading]}>
      <div id="main">{isLoading ? <Loading /> : <Tours />}</div>
    </Store.Provider>
  );
};

export default App;
