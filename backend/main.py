from fastapi import FastAPI
from endpoints import me, payment_info, token, supertokens, post_user_info, get_list_members
import uvicorn

app = FastAPI(title="Splitka")
app.include_router(token.router, prefix="/token", tags=["Access token"])
app.include_router(me.router, prefix="/me", tags=["View user information"])
app.include_router(payment_info.router, prefix="/payment_info", tags=["Request for detailed information on the universal payment"])
app.include_router(supertokens.router, prefix="/supertokens", tags=["Access supertokens"])
app.include_router(post_user_info.router, prefix="/add_tg_user", tags=["Add info about telegram user"])
app.include_router(get_list_members.router, prefix="/get_tg_users", tags=["Get list of users from special chat"])

if __name__ == "__main__":
    # TODO: delete reload
    uvicorn.run("main:app", port=82, host="splitka-backend.transcendent.app", reload=True)


    
