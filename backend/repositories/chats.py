from typing import List
from db.users import users
from db.chats import chats
from models.users import UserInfo, ListUsersInfo
from .base import BaseRepository
from fastapi import Path
import json

class ChatRepository(BaseRepository):
    async def create(self, u: UserInfo):
        values = {**u.dict()}
        values.pop("username", None)
        values.pop("name", None)
        values.pop("surname", None)
        query = chats.insert().values(**values)
        return await self.database.execute(query) 
    
    async def get_all(self, chat_id: int = Path(lt=0)):
        query = chats.select().filter_by(chat_id=chat_id)
        return await self.database.fetch_all(query=query)
        
    async def update(self):
        pass 

    
    