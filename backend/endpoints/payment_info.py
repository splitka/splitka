from fastapi import APIRouter
from models.token import Token
import requests, json, base64

router = APIRouter()
import requests

url_payments = "https://hackaton.bankingapi.ru/api/rb/pmnt/acceptance/universal/hackathon/v1/payments/0"
payload={}

@router.post("/")
async def payment_info(login: Token):
    # defolt headers expect Authorization
    headers = {
    'X-IBM-Client-Id': '2',
    'X-Mdm-Id': '2',
    'X-ROLES': 'puk',
    'x-unc': 'puk',
    'x-partner-id': 'puk',
    'x-login-mode': 'puk',
    'x-channel': 'OPENAPI',
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + str(login.access_token)
    }
    response = requests.request("GET", url_payments, headers=headers, data=payload)
    response_dict = json.loads(response.text)

    return response_dict



