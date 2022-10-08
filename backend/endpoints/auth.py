from fastapi import APIRouter
from models.token import Login
import requests, json, base64

url_TOKEN = "https://auth.bankingapi.ru/auth/realms/kubernetes/protocol/openid-connect/token"
url_me = "https://hackaton.bankingapi.ru/api/vtbid/v1/oauth2/me?scope=mainMobilePhone"

router = APIRouter()

@router.post("/")
async def login(login: Login):
  # Получаем token 
  data_Authorization = base64.b64encode(bytes(f"{login.username}:{login.password}", encoding = "utf-8"))
  data_Authorization = 'Basic '+str(data_Authorization.decode('UTF-8'))
  headers = {
  'Authorization': data_Authorization,
  'Content-Type': 'application/x-www-form-urlencoded'
  }

  payload='grant_type=client_credentials'
  response = requests.request("POST", url_TOKEN, headers=headers, data=payload)

  response_dict = json.loads(response.text)
  access_token = response_dict["access_token"]
  # делаем запрос в /me
  payload={}
  headers = {
    'Authorization': 'Bearer '+ access_token
  }

  response = requests.request("GET", url_me, headers=headers, data=payload)
  response_dict = json.loads(response.text)
  
  return response_dict



