from fastapi import APIRouter, Path, Depends
from models.users import ListUsersInfo, UserInfo
from .depends import get_user_repository, get_chat_repository
from repositories.users import UserRepository
from repositories.chats import ChatRepository

router = APIRouter()

@router.get("/users_id/{chat_id}")
async def read_users_id(
    chats: ChatRepository = Depends(get_chat_repository),
    chat_id: int = Path(lt=0)):

    return await chats.get_all(chat_id)

@router.get("/info_users/{user_id}")
async def read_info_users(
    users: UserRepository = Depends(get_user_repository),
    user_id: int = None):

    return await users.get_all(user_id)

@router.post("/", status_code=201)
async def create_user(user_info: UserInfo, 
    chats: ChatRepository = Depends(get_chat_repository),
    users: UserRepository = Depends(get_user_repository)):
    chatsID = await chats.create(u=user_info)
    usersID = await users.create(u=user_info)

    return f"CREATED in chat {chatsID} and users {usersID}"