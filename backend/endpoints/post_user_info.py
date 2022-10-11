from fastapi import APIRouter
from models.models import UserInfo

router = APIRouter()

@router.post("/", status_code=201)
async def save_tg_user_info(user_info: UserInfo):
    # TODO: add data in DB
    pass
    # print(user_info.chat_id)
    # print(user_info.user_id)
    # print(user_info.name)
    # print(user_info.surname)
