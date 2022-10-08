from fastapi import APIRouter
from models.models import Token, BasicInfo
import requests, json, base64
import aiohttp

url_me = "https://hackaton.bankingapi.ru/api/vtbid/v1/oauth2/me"
router = APIRouter()

@router.post("/", response_model=BasicInfo)
async def me(token: Token):
  # делаем запрос в /me
  access_token = token.access_token
  payload={}
  headers = {
    'Authorization': 'Bearer ' + access_token
  }

  async with aiohttp.ClientSession() as session:
    async with session.get(url_me, headers=headers, data=payload) as resp:
      response = await resp.json()

  return response



