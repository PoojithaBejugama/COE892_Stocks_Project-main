from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "FastAPI Backend Running"}

@app.get("/stocks/{symbol}")
def get_stock_price(symbol: str):
    return {"symbol": symbol, "price": 150.00}  # Mocked price
