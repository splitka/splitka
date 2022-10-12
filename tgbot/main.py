from telebot.async_telebot import AsyncTeleBot
from telebot import types
from my_requests import post_userinfo, post_userinfo_from_callback

import asyncio



bot = AsyncTeleBot("5505804634:AAGP2tbkULhZPE_9vUeEVrRIhblSFr4ToFQ", parse_mode=None)

markup = types.InlineKeyboardMarkup(
    keyboard=[
        [
            types.InlineKeyboardButton(
                text='Плати сука',
                callback_data='TODO'
            )
        ]
    ]
)

@bot.message_handler(commands=['start'])
async def send_welcome(message):
    # TODO: check response
    response = await post_userinfo(message)

    # Send message in ls to major
    if int(message.chat.id) > 0:
        await bot.send_message(message.chat.id, f'Hello Major!')

@bot.message_handler(commands=['poll'])
async def send_welcome(message):
    # TODO: check response
    response = await post_userinfo(message)

    await bot.send_message(message.chat.id, f'Hi brothers. Your id is {message.chat.id}', reply_markup=markup)

@bot.callback_query_handler(func=lambda c: c.data == 'TODO')
async def handler(call: types.CallbackQuery):
    # TODO: check response
    # print(call)
    response = await post_userinfo_from_callback(call)

    text = call.message.text
    username = call.from_user.username
    cnt_minors = await bot.get_chat_members_count(call.message.chat.id)
    text_list = call.message.text.split('\n')

    if len(text_list) == 1:
        text = call.message.text + f'\n\n{username.capitalize()} готов ✅'
        await bot.edit_message_text(text=text, message_id=call.message.message_id, 
                                        chat_id=call.message.chat.id, reply_markup=markup)
    elif (len(text_list) - 2) < (cnt_minors - 1):
        user = f'{username.capitalize()} готов ✅'
        if user not in text_list[2:]:
            text = call.message.text + f'\n{user}'
            await bot.edit_message_text(text=text, message_id=call.message.message_id, 
                                            chat_id=call.message.chat.id, reply_markup=markup)

asyncio.run(bot.infinity_polling())

