import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const ratesURL = "https://api.exchangeratesapi.io/latest";
  const [countriesData, setCountriesData] = useState({});
  const [selectedRate, setSelectedRate] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    (async () => {
      let returnedObj;

      try {
        const res = await fetch(ratesURL);
        const json = await res.json();
        const data = json.rates;
        returnedObj = data;
      } catch (error) {
        console.log(error);
        setCountriesData([]);
      }
      setCountriesData(Object.entries(returnedObj));
    })();
  }, []);

  useEffect(() => {
    if (selectedRate && inputValue) {
      console.log(sum(inputValue, selectedRate));
    }
  });

  const sum = (a, b) => {
    setTotal((a * b).toFixed(2));
  };
  return (
    <div className="app">
      <div className="app__data">
        <select name="" id="" onChange={(e) => setSelectedRate(e.target.value)}>
          <option value={0}>default</option>
          {countriesData.length > 1 &&
            countriesData.map(([country, value], index) => {
              return (
                <option value={value} key={index}>
                  {country}
                </option>
              );
            })}
        </select>
        <input
          type="text"
          value={inputValue}
          onChange={(e) =>
            e.target.value.match(/[0-9]/gm)
              ? setInputValue(e.target.value)
              : alert("please use numbers only")
          }
        />
        <span className="results">£{total}</span>
      </div>
    </div>
  );
}
export default App;
