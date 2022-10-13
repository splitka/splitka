from fastapi import APIRouter, Depends
import requests, json, base64
from fastapi.security import HTTPBasic, HTTPBasicCredentials
import aiohttp

url_TOKEN = "https://auth.bankingapi.ru/auth/realms/kubernetes/protocol/openid-connect/token"

router = APIRouter()
security = HTTPBasic()

@router.get("/")
async def login(credentials: HTTPBasicCredentials = Depends(security)):
  # Получаем token 
  data_Authorization = base64.b64encode(bytes(f"{credentials.username}:{credentials.password}", encoding = "utf-8"))
  data_Authorization = 'Basic ' + str(data_Authorization.decode('UTF-8'))
  headers = {
  'Authorization': data_Authorization,
  'Content-Type': 'application/x-www-form-urlencoded'
  }

  payload='grant_type=client_credentials'
  
  async with aiohttp.ClientSession() as session:
    async with session.post(url_TOKEN, headers=headers, data=payload) as resp:
      response = await resp.json()

  # access_token = response["access_token"]
  return response