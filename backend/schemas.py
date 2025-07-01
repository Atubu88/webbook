from pydantic import BaseModel
from datetime import datetime

class BookingCreate(BaseModel):
    name: str
    email: str
    datetime: datetime

class BookingOut(BookingCreate):
    id: int

    class Config:
        orm_mode = True
