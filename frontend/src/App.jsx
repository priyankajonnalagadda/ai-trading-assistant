import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://ai-trading-assistant-api-s1he.onrender.com/market-data")
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>AI Trading Assistant 🚀</h1>

      <h2>Market Data</h2>

      {data.map((item, index) => (
        <div key={index}>
          <p>
            {item.symbol} : ₹{item.price}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;