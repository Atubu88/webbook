from typing import List

from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from models import Booking
from schemas import BookingCreate, BookingOut
from database import engine, Base, SessionLocal
from crud import create_booking, get_all_bookings
from fastapi import Depends
from sqlalchemy.orm import Session

# Инициализация базы данных (создаёт таблицы при первом запуске)
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Booking System")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Лучше указать конкретные адреса на проде!
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Dependency для получения сессии БД
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Простейший эндпоинт для создания брони
@app.post("/bookings/")
def create_new_booking(booking: BookingCreate, db: Session = Depends(get_db)):
    new_booking = create_booking(db=db, booking=booking)
    return new_booking

@app.get("/bookings/", response_model=list[BookingOut])
def list_bookings(db: Session = Depends(get_db)):
    """Return all bookings."""
    return get_all_bookings(db)