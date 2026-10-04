from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# ✅ ADD THIS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "API running"}

@app.get("/market-data")
def market_data():
    return {
        "BTC": 27686.57,
        "ETH": 1995.14,
        "AAPL": 164.8,
        "TSLA": 698.66
    }