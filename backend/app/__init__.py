from fastapi import FastAPI
from .api import endpoints
from .database import engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(endpoints.router)
