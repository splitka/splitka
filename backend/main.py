from fastapi import FastAPI
from endpoints import me, payment_info, token, supertokens
import uvicorn

app = FastAPI(title="Splitka")
app.include_router(token.router, prefix="/token", tags=["Access token"])
app.include_router(me.router, prefix="/me", tags=["View user information"])
app.include_router(payment_info.router, prefix="/payment_info", tags=["Request for detailed information on the universal payment"])
app.include_router(supertokens.router, prefix="/supertokens", tags=["Access supertokens"])

if __name__ == "__main__":
    # TODO: delete reload
    uvicorn.run("main:app", reload=True)


    