import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [stock, setStock] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/stocks/AAPL")
      .then(response => setStock(response.data))
      .catch(error => console.error("Error fetching stock data", error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Stock Price Tracker</h1>
      {stock ? (
        <p>{stock.symbol}: ${stock.price}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
