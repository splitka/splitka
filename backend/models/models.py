from pydantic import BaseModel

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
