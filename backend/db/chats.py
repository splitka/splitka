import sqlalchemy
from .base import metadata
import datetime


chats = sqlalchemy.Table(
    "chats", 
    metadata,
    sqlalchemy.Column("chat_id", sqlalchemy.Integer),
    sqlalchemy.Column("user_id", sqlalchemy.String),
    sqlalchemy.Column("chat_name", sqlalchemy.String),
)