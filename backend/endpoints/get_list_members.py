from fastapi import APIRouter, Path
from models.models import ListUsersInfo

router = APIRouter()

@router.get("/{chat_id}", response_model=ListUsersInfo)
async def get_list_members(chat_id: int = Path(lt=0)):
    # TODO: add data in DB
    # print(user_info.chat_id)
    # print(user_info.user_id)
    # print(user_info.name)
    # print(user_info.surname)
    t = {
        'list_users': [
            {'name': 'bulat', 'surname': "efremov"},
            {'name': 'bulat', 'surname': "efremov"},
            {'name': 'bulat', 'surname': "efremov"}
        ]
    }
    # return json.dump(t)
    return t
