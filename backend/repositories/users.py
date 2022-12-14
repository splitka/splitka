from typing import List
from db.users import users
from db.chats import chats
from models.users import UserInfo, ListUsersInfo
from .base import BaseRepository
from fastapi import Path
import json

class UserRepository(BaseRepository):
    async def create(self, u: UserInfo):
        values = {**u.dict()}
        values.pop("chat_id", None)
        values.pop("chat_name", None)
        query = users.insert().values(**values)
        return await self.database.execute(query) 
    
    async def get_all(self, user_id: int):
        query = users.select().filter_by(user_id=user_id)
        return await self.database.fetch_all(query=query)

    async def update(self):
        pass 


    
    