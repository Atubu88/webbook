from models import Booking
from schemas import BookingCreate
from sqlalchemy.orm import Session

def create_booking(db: Session, booking: BookingCreate):
    db_booking = Booking(
        name=booking.name,
        email=booking.email,
        datetime=booking.datetime
    )
    db.add(db_booking)
    db.commit()
    db.refresh(db_booking)
    return db_booking
