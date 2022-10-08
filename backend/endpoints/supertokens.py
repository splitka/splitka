from fastapi import APIRouter, Body
from models.models import Token
import aiohttp

url = "https://hackaton.bankingapi.ru/api/vtbid/v1/oauth2/token"

router = APIRouter()

# TODO: поменять всратое название
@router.post("/")
async def supertoken(token: Token):
    payload={}
    headers = { 
        'Accept': 'application/json',
        'Authorization': f'Bearer {token.access_token}'
    }
    
    async with aiohttp.ClientSession() as session:
        async with session.post(url, headers=headers, data=payload, skip_auto_headers=['Content-Type']) as resp:
            response = await resp.json()
    
    return response