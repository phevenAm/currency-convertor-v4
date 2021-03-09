import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const contriesURL =
    "http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1";
  const ratesURL = "https://api.exchangeratesapi.io/latest";
  const [countries, setCountries] = useState([]);
  const [rates, setRate] = useState([]);
  // useEffect(() => {
  //   let returnedCountries;
  //   try {
  //     (async () => {
  //       const res = await fetch(contriesURL);
  //       const data = await res.json();
  //       returnedCountries = data;
  //     })();
  //   } catch (error) {
  //     console.error(error);
  //     returnedCountries = [];
  //   }
  //   setCountries(returnedCountries);
  // }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch(ratesURL);
      const data = await res.json();
      console.log(data);
    })();
  }, []);

  return <div className="app">hi</div>;
}

export default App;
