import uvicorn
from . import app
from app.api.endpoints import flights, notifications
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine, Base

Base.metadata.create_all(bind=engine)

origins = [
    "http://localhost:3000",  # React app running on localhost
    "http://localhost:5173"  # Your deployed frontend URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(flights.router, prefix="/api")
app.include_router(notifications.router, prefix="/api")

if __name__ == "__main__":
    uvicorn.run(app.app, host="0.0.0.0", port=8000)
