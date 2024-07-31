from fastapi import APIRouter
from .endpoints import flights, notifications

router = APIRouter()
router.include_router(flights.router, prefix="/flights", tags=["flights"])
router.include_router(notifications.router, prefix="/notifications", tags=["notifications"])
