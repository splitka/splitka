import aiohttp
import json

base_url = 'http://127.0.0.1:8000'

async def get_base(url, headers, payload):
    async with aiohttp.ClientSession() as session:
        async with session.get(url, headers=headers, data=payload) as resp:
            response = await resp.json()
    return response


async def post_base(url, headers, payload):
    async with aiohttp.ClientSession() as session:
        async with session.post(url, headers=headers, data=payload) as resp:
            response = await resp.json()
    return response

async def post_userinfo(message):
    headers = {
        'Content-Type': 'application/json'
    }
    
    chat_id = int(message.chat.id)

    payload = json.dumps({
        'chat_id' : chat_id if chat_id < 0 else None,
        'user_id' : int(message.from_user.id),
        'name': message.from_user.first_name,
        'surname': message.from_user.last_name,
        'username' : message.from_user.username
    })

    url = base_url + '/add_tg_user'

    return await post_base(url, headers, payload)    


async def post_userinfo_from_callback(call):
    headers = {
        'Content-Type': 'application/json'
    }
    
    chat_id = int(call.message.chat.id)

    payload = json.dumps({
        'chat_id' : chat_id if chat_id < 0 else None,
        'user_id' : int(call.from_user.id),
        'name': call.from_user.first_name,
        'surname': call.from_user.last_name,
        'username' : call.from_user.username
    })

    url = base_url + '/add_tg_user'

    return await post_base(url, headers, payload)    
    

async def get():
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