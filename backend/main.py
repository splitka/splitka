from fastapi import FastAPI
from endpoints import me, payment_info, token, supertokens, usersCRUD
import uvicorn
from db.base import database

app = FastAPI(title="Splitka")
app.include_router(token.router, prefix="/token", tags=["Access token"])
app.include_router(me.router, prefix="/me", tags=["View user information"])
app.include_router(payment_info.router, prefix="/payment_info", tags=["Request for detailed information on the universal payment"])
app.include_router(supertokens.router, prefix="/supertokens", tags=["Access supertokens"])
app.include_router(usersCRUD.router, prefix="/usersCRUD", tags=["CRUD telegram user"])

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)
    # uvicorn.run("main:app", port=82, host="splitka-backend.transcendent.app", reload=True)
