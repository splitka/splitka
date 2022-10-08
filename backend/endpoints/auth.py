from fastapi import APIRouter, Depends
from models.token import Login
import requests, json, base64

from fastapi.security import HTTPBasic, HTTPBasicCredentials
import aiohttp

url_TOKEN = "https://auth.bankingapi.ru/auth/realms/kubernetes/protocol/openid-connect/token"
url_me = "https://hackaton.bankingapi.ru/api/vtbid/v1/oauth2/me?scope=mainMobilePhone"

router = APIRouter()
security = HTTPBasic()

@router.get("/")
async def login(credentials: HTTPBasicCredentials = Depends(security)):
  # Получаем token 
  # print(credentials.username, flush=True)
  # print(credentials.password, flush=True)
  data_Authorization = base64.b64encode(bytes(f"{credentials.username}:{credentials.password}", encoding = "utf-8"))
  data_Authorization = 'Basic ' + str(data_Authorization.decode('UTF-8'))
  headers = {
  'Authorization': data_Authorization,
  'Content-Type': 'application/x-www-form-urlencoded'
  }

  payload='grant_type=client_credentials'
  response = requests.request("POST", url_TOKEN, headers=headers, data=payload)
  
  async with aiohttp.ClientSession() as session:
    async with session.post(url_TOKEN, headers=headers, data=payload) as resp:
      response = await resp.json()

  # response_dict = json.loads(response.text)
  # access_token = response_dict["access_token"]
  access_token = response["access_token"]
  # делаем запрос в /me
  payload={}
  headers = {
    'Authorization': 'Bearer ' + access_token
  }

  response = requests.request("GET", url_me, headers=headers, data=payload)
  response_dict = json.loads(response.text)
  
  return response_dict



