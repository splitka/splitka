from re import L
from pydantic import BaseModel
from typing import Union

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
    categoryIds: list[str]
    id: int
    name: str
    subTypes: list[str]
    type: str

class InfoClientProduct(BaseModel):
    account: ProductType
    card: ProductType

class TransactionResponse(BaseModel):
    actions: Actions
    clientProduct: InfoClientProduct
    commissionSum: InfoSum
    createdAt: str
    description: str
    documentId: int
    fields: list[InfoFiels]
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


class KeyNotAuthorized(BaseModel):
    error: str


# {
#     'actions':
#     {
#         'autoPaymentByBalance': True,
#         'autoPaymentByDate': True,
#         'check': True,
#         'remind': True,
#         'repeat': True,
#         'template': True
#     },
#     'clientProduct':
#     {
#         'account':
#         {
#             'productType': 'CARD',
#             'publicId': 'string'
#         },
#         'card':
#         {
#             'productType': 'ACCOUNT',
#             'publicId': 'string'
#         }
#     },
#     'commissionSum':
#     {
#         'amount': 600,
#         'currency':
#         {
#             'code': 'RUB'
#         }
#     },
#     'createdAt': '2019-08-24T14:15:22Z',
#     'description': 'string',
#     'documentId': '1234567890',
#     'fields': [
#         {
#             'description': 'Лицевой счет',
#             'key': 'phone',
#             'name': 'Лицевой счет',
#             'type': 'STRING',
#             'value': '89535184636'
#         }],
#     'id': '4d9065bc-55f7-4317-b728-5097344dc72f',
#     'paySum':
#     {
#         'amount': 600,
#         'currency':
#         {
#             'code': 'RUB'
#         }
#     },
#     'providerService':
#     {
#         'categoryIds': ['string'],
#         'id': '1',
#         'name': 'КИВИ',
#         'subTypes': ['MOBILE_BY_PHONE'],
#         'type': 'CONTRACT'
#     },
#     'status':
#     {
#         'code': 'PROCESSING',
#         'description': 'string'
#     },
#     'totalSum':
#     {
#         'amount': 600,
#         'currency':
#         {
#             'code': 'RUB'
#         }
#     }
# }
