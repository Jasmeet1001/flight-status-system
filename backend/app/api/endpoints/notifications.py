from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from ... import crud, models, schemas
from ...database import SessionLocal, engine
from ...notification import send_notification_via_fcm

models.Base.metadata.create_all(bind=engine)

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/notifications/", response_model=List[schemas.Notification])
def read_notifications(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    notifications = crud.get_notifications(db, skip=skip, limit=limit)
    return notifications

@router.post("/notifications/", response_model=schemas.Notification)
def create_notification(notification: schemas.NotificationCreate, db: Session = Depends(get_db)):
    db_notification = crud.create_notification(db=db, notification=notification)
    if db_notification.method == "App":
        send_notification_via_fcm(db_notification.recipient, "Flight Notification", db_notification.message)
    return db_notification
