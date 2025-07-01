from sqlalchemy import Column, Integer, String, DateTime
from database import Base

class Booking(Base):
    __tablename__ = "bookings"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, index=True)
    datetime = Column(DateTime)
