from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "AI Trading Assistant API is running 🚀", "status": "success"}


@app.get("/market-data")
def get_market_data():
    return {
        "BTC": 27686.57,
        "ETH": 1995.14,
        "AAPL": 164.8,
        "TSLA": 698.66
    }