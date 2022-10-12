from pydantic import BaseModel
from typing import List, Optional, Union

class BaseUserInfo(BaseModel):
    username: str
    name: Optional[str]
    surname: Optional[str]

class BaseUserInfo2(BaseModel):
    username: Optional[str]
    name: str
    surname: Optional[str]
    
class UserInfo(BaseUserInfo):
    user_id: int
    chat_id: Optional[int]
    chat_name: Optional[str]

class ListUsersInfo(BaseModel):
    list_users: List[Union[BaseUserInfo, BaseUserInfo2]]



