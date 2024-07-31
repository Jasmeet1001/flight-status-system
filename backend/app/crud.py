from sqlalchemy.orm import Session
from . import models, schemas

def get_flights(db: Session, flight_id: str = "", skip: int = 0, limit: int = 100):
    if flight_id.strip() == "":
        return db.query(models.Flight).offset(skip).limit(limit).all()
    else:
        return db.query(models.Flight).filter(models.Flight.flight_id == flight_id).offset(skip).limit(limit).all()

def get_notifications(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Notification).offset(skip).limit(limit).all()

def create_notification(db: Session, notification: schemas.NotificationCreate):
    db_notification = models.Notification(**notification.dict())
    db.add(db_notification)
    db.commit()
    db.refresh(db_notification)
    return db_notification
