import uvicorn
from . import app
from app.api.endpoints import users, flights, notifications
from app.database import engine, Base


Base.metadata.create_all(bind=engine)


app.include_router(users.router, prefix="/api/v1")
app.include_router(flights.router, prefix="/api/v1")
app.include_router(notifications.router, prefix="/api/v1")
if __name__ == "__main__":
    uvicorn.run(app.app, host="0.0.0.0", port=8000)
