from fastapi import APIRouter
from models.models import Token, TransactionResponse, KeyNotAuthorized
import requests, json, base64, aiohttp
from typing import Union

router = APIRouter()
import requests

url_payments = "https://hackaton.bankingapi.ru/api/rb/pmnt/acceptance/universal/hackathon/v1/payments/0"

# TODO: change puk and 2
@router.post("/", response_model=Union[TransactionResponse, KeyNotAuthorized])
async def payment_info(login: Token):
    # defolt headers expect Authorization
    payload={}
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

    async with aiohttp.ClientSession() as session:
        async with session.get(url_payments, headers=headers, data=payload, skip_auto_headers=['Content-Type']) as resp:
            response = await resp.json()
    
    print(response, flush=True)
    return response



