from sqlalchemy import Column, Integer, String, DateTime
from database import Base
import datetime

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class ImageOverride(Base):
    __tablename__ = "image_overrides"

    id = Column(String, primary_key=True, index=True)
    image_url = Column(String, nullable=False)
