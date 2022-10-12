import sqlalchemy
from .base import metadata
import datetime


users = sqlalchemy.Table(
    "users", 
    metadata,
    sqlalchemy.Column("user_id", sqlalchemy.Integer, unique=True),
    sqlalchemy.Column("username", sqlalchemy.String),
    sqlalchemy.Column("name", sqlalchemy.String),
    sqlalchemy.Column("surname", sqlalchemy.String),
)