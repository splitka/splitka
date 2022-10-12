from repositories.users import UserRepository
from repositories.chats import ChatRepository
from db.base import database


def get_user_repository() -> UserRepository:
    return UserRepository(database)

def get_chat_repository() -> ChatRepository:
    return ChatRepository(database)

