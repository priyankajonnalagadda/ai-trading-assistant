import requests

def get_stock_price(symbol: str):
    url = f"https://api.coingecko.com/api/v3/simple/price?ids={symbol}&vs_currencies=usd"
    data = requests.get(url).json()
    return data