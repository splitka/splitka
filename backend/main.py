from fastapi import FastAPI
from endpoints import auth, payment_info
import uvicorn

app = FastAPI(title="Close your eyes, open my API")
app.include_router(auth.router, prefix="/auth", tags=["Go to the VTB ID authorization server"])
app.include_router(payment_info.router, prefix="/payment_info", tags=["Request for detailed information on the universal payment"])

if __name__ == "__main__":
    # TODO: delete reload
    uvicorn.run("main:app", reload=True)