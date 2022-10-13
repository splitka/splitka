from fastapi import APIRouter
from models.models import Token, TransactionResponse, KeyNotAuthorized, TransactionResponseFront
import requests, json, base64, aiohttp
from typing import Union

router = APIRouter()
import requests

url_payments = "https://hackaton.bankingapi.ru/api/rb/pmnt/acceptance/universal/hackathon/v1/payments/0"

# TODO: change puk and 2
@router.post("/", response_model=Union[TransactionResponse, KeyNotAuthorized, TransactionResponseFront])
async def payment_info(*, for_front: bool = False, login: Token):
    # defolt headers expect Authorization
    payload={}
    headers = {
    'X-IBM-Client-Id': '2',
    'X-Mdm-Id': '2',
    'X-ROLES': 'string',
    'x-unc': 'string',
    'x-partner-id': 'string',
    'x-login-mode': 'string',
    'x-channel': 'OPENAPI',
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + str(login.access_token)
    }

    async with aiohttp.ClientSession() as session:
        async with session.get(url_payments, headers=headers, data=payload, skip_auto_headers=['Content-Type']) as resp:
            response = await resp.json()
    if for_front:
        resp = {
            'products': [
                {
                    'id': str(response["id"]),
                    'title': 'Кофейня "Шоколадница"',
                    'totalSum': str(response["totalSum"]["amount"])
                },
                {
                    'id': '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                    'title': 'Ресторан Torro Crill',
                    'totalSum': '1300',
                },
                {
                    'id': '58694a0f-3da1-471f-bd96-145571e29d72',
                    'title': 'Ресторан Torro Crill',
                    'totalSum': '500',
                },
                {
                    'id': 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bq',
                    'title': 'Кофейня "Шоколадница"',
                    'totalSum': '2000',
                }
            ]
        }
        # return json.dumps(resp)
        return resp
    return response



