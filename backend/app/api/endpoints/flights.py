from fastapi import APIRouter, Depends, HTTPException
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

@router.get("/flights/", response_model=List[schemas.Flight])
def read_flights(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    flights = crud.get_flights(db, skip=skip, limit=limit)
    return flights

@router.post("/flights/", response_model=schemas.Flight)
def create_flight(flight: schemas.FlightCreate, db: Session = Depends(get_db)):
    return crud.create_flight(db=db, flight=flight)
