# 🚀 AI Trading Assistant SaaS

A full-stack trading dashboard built using **React (Vite)** and **FastAPI**, designed to display real-time market data and simulate trading insights.

---

## 🌐 Live API
https://ai-trading-assistant-api-s1he.onrender.com/market-data

---

## 🔥 Features

- 📊 Real-time market data (BTC, ETH, AAPL, TSLA)
- ⚡ FastAPI backend with REST API endpoints
- 🌐 React frontend with dynamic UI
- 🔗 Seamless frontend-backend integration
- ☁️ Backend deployed on Render
- 🧩 Modular and scalable architecture

---

## 🛠 Tech Stack

| Layer       | Technology |
|------------|-----------|
| Frontend   | React, Vite |
| Backend    | FastAPI (Python) |
| API        | REST APIs |
| Deployment | Render |
| Version Control | Git, GitHub |

---

## 📁 Project Structure
ai-trading-assistant/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── Dashboard.jsx
│   │   ├── main.jsx
│   ├── package.json
│
├── .gitignore
├── README.md


---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|-------|--------|-------------|
| GET | `/` | Health check |
| GET | `/market-data` | Fetch market prices |

---

## 📊 Sample API Response

```json
{
  "BTC": 27686.57,
  "ETH": 1995.14,
  "AAPL": 164.8,
  "TSLA": 698.66
}
⚙️ Run Locally
🔹 Backend Setup
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

Backend runs on:
http://127.0.0.1:8000

🔹 Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs on:
http://localhost:5173

💼 Resume Description
AI Trading Assistant (SaaS Project)  
- Built a full-stack trading dashboard using React and FastAPI
- Integrated REST APIs to fetch and display real-time market data
- Deployed backend on Render and managed version control using GitHub
- Designed modular architecture with scalable frontend-backend communication


🚀 Future Improvements
- 📈 Real-time crypto API integration (Binance / CoinGecko)
- 📊 Interactive charts (Recharts / Chart.js)
- 🤖 AI-based trading recommendations (LLM integration)
- 🔐 User authentication (JWT)
- 📡 WebSocket for live updates


📌 Author
Priyanka Jonnalagadda
GitHub: https://github.com/priyankajonnalagadda


⭐ If you like this project
Give it a ⭐ on GitHub!
