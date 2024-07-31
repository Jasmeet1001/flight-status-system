from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class Flight(Base):
    __tablename__ = "flights"
    
    id = Column(Integer, primary_key=True, index=True)
    flight_id = Column(String, unique=True, index=True, nullable=False)
    airline = Column(String, nullable=False)
    status = Column(String, nullable=False)
    departure_gate = Column(String)
    arrival_gate = Column(String)
    departure_location = Column(String)
    arrival_location = Column(String)
    scheduled_departure = Column(DateTime, nullable=False)
    scheduled_arrival = Column(DateTime, nullable=False)
    actual_departure = Column(DateTime)
    actual_arrival = Column(DateTime)

    notifications = relationship("Notification", back_populates="flight")

class Notification(Base):
    __tablename__ = "notifications"
    
    id = Column(Integer, primary_key=True, index=True)
    flight_id = Column(String, ForeignKey("flights.flight_id"))
    message = Column(String, nullable=False)
    timestamp = Column(DateTime, nullable=False)
    method = Column(String, nullable=False)
    recipient = Column(String, nullable=False)

    flight = relationship("Flight", back_populates="notifications")
