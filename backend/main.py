from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI(
    title="AI Trading Assistant API",
    description="Backend API for AI-powered trading insights",
    version="1.0.0"
)

# ✅ Allow frontend (Vite React) to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # later restrict to your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Root endpoint (no more 404)
@app.get("/")
def home():
    return {
        "message": "AI Trading Assistant API is running 🚀",
        "status": "success"
    }

# ✅ Health check
@app.get("/health")
def health():
    return {"status": "ok"}

# ✅ Dummy market data (can replace with real API later)
@app.get("/market-data")
def get_market_data():
    data = [
        {"symbol": "BTC", "price": round(random.uniform(25000, 35000), 2)},
        {"symbol": "ETH", "price": round(random.uniform(1500, 2500), 2)},
        {"symbol": "AAPL", "price": round(random.uniform(150, 200), 2)},
        {"symbol": "TSLA", "price": round(random.uniform(600, 900), 2)},
    ]
    return {"data": data}

# ✅ AI Trading Signal (dummy logic for now)
@app.get("/ai-signal")
def ai_signal(symbol: str):
    signals = ["BUY", "SELL", "HOLD"]
    return {
        "symbol": symbol.upper(),
        "signal": random.choice(signals),
        "confidence": f"{random.randint(70, 95)}%"
    }

# ✅ Prediction endpoint (mock AI response)
@app.post("/predict")
def predict(data: dict):
    return {
        "input": data,
        "prediction": random.choice(["UPTREND", "DOWNTREND"]),
        "confidence": f"{random.randint(60, 90)}%"
    }