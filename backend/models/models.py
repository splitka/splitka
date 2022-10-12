from re import L
from pydantic import BaseModel
from typing import List, Optional, Union

class Login(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str

class MyAddress(BaseModel):
    addressName: str

class Passport(BaseModel):
    series: int
    number: int
    issueDate: str
    departmentDoc: str
    lastName: str
    firstName: str
    middleName: str
    gender: str
    birthDate: str
    birthPlace: str
    issuedBy: str
    issueId: str

class BasicInfo(BaseModel):
  surname: str
  name: str
  patronymic: str
  gender: str
  birthPlace: str
  birthDate: str
  maritalStatus: str
  mainMobilePhone: str
  mobilePhone: str
  email: str
  registrationAddress: MyAddress
  temporaryAddress: MyAddress
  actualAddress: MyAddress
  snils: str
  inn: int
  rfPassport: Passport
  mdmId: int

class Actions(BaseModel):
    autoPaymentByBalance: bool
    autoPaymentByDate: bool
    check: bool
    remind: bool
    repeat: bool
    template: bool

class ProductType(BaseModel):
    productType: str
    publicId: str

class InfoCode(BaseModel):
    code: str

class InfoSum(BaseModel):
    amount: int
    currency: InfoCode

class InfoFiels(BaseModel):
    description: str
    key: str
    name: str
    type: str
    value: int

class InfoStatus(BaseModel):
    code: str
    description: str

class InfoProvider(BaseModel):
    categoryIds: List[str]
    id: int
    name: str
    subTypes: List[str]
    type: str

class TransactionResponse(BaseModel):
    actions: Actions
    clientProduct: List[ProductType]
    commissionSum: InfoSum
    createdAt: str
    description: str
    documentId: int
    fields: List[InfoFiels]
    id: str
    paySum: InfoSum
    providerService: InfoProvider
    status: InfoStatus
    totalSum: InfoSum

class TokensResponse(BaseModel):
    scope: str
    access_token: str
    refresh_token: str
    id_token: str

class BaseUserInfo(BaseModel):
    username: str
    name: Optional[str]
    surname: Optional[str]

class BaseUserInfo2(BaseModel):
    username: Optional[str]
    name: str
    surname: Optional[str]
    
class UserInfo(BaseUserInfo):
    user_id: int
    chat_id: Optional[int]
    chat_name: Optional[str]

class ListUsersInfo(BaseModel):
    list_users: List[Union[BaseUserInfo, BaseUserInfo2]]

class KeyNotAuthorized(BaseModel):
    error: str