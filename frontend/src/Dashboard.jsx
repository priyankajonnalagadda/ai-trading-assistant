import React, { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://ai-trading-assistant-api-s1he.onrender.com/market-data")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>AI Trading Assistant 🚀</h1>

      <h2>Market Data</h2>

      {Object.keys(data).length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>BTC : ₹{data.BTC}</p>
          <p>ETH : ₹{data.ETH}</p>
          <p>AAPL : ₹{data.AAPL}</p>
          <p>TSLA : ₹{data.TSLA}</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;