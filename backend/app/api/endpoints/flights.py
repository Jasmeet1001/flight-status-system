from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from ... import crud, models, schemas
from ...database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/flights", response_model=List[schemas.Flight])
def read_flights(flight_id: str = "", skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    flights = crud.get_flights(db, flight_id, skip=skip, limit=limit)
    return flights
