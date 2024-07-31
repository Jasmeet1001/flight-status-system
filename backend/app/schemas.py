from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class FlightBase(BaseModel):
    flight_id: str
    airline: str
    status: str
    departure_gate: Optional[str]
    arrival_gate: Optional[str]
    scheduled_departure: datetime
    scheduled_arrival: datetime
    actual_departure: Optional[datetime]
    actual_arrival: Optional[datetime]

class FlightCreate(FlightBase):
    pass

class Flight(FlightBase):
    id: int

    class Config:
        orm_mode = True

class NotificationBase(BaseModel):
    flight_id: str
    message: str
    timestamp: datetime
    method: str
    recipient: str

class NotificationCreate(NotificationBase):
    pass

class Notification(NotificationBase):
    id: int

    class Config:
        orm_mode = True
