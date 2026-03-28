from fastapi import FastAPI, Depends, HTTPException, status, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.staticfiles import StaticFiles
from datetime import timedelta
import shutil
import os
import uuid

import models, schemas, auth
from database import engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Skyscanner Flight Search API")

os.makedirs("data/uploads", exist_ok=True)
app.mount("/uploads", StaticFiles(directory="data/uploads"), name="uploads")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174", "http://localhost:5173", "http://127.0.0.1:5174"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/register", response_model=schemas.UserResponse)
def register(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_password = auth.get_password_hash(user.password)
    new_user = models.User(email=user.email, hashed_password=hashed_password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@app.post("/login", response_model=schemas.Token)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.email == form_data.username).first()
    if not user or not auth.verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=auth.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = auth.create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/me", response_model=schemas.UserResponse)
def read_users_me(current_user: models.User = Depends(auth.get_current_user)):
    return current_user

@app.get("/images", response_model=dict[str, str])
def get_images(db: Session = Depends(get_db)):
    overrides = db.query(models.ImageOverride).all()
    return {o.id: o.image_url for o in overrides}

@app.post("/upload-image")
def upload_image(
    target_id: str = Form(...), 
    file: UploadFile = File(...), 
    current_user: models.User = Depends(auth.get_current_user), 
    db: Session = Depends(get_db)
):
    if current_user.email != "eseeva228@gmail.com":
        raise HTTPException(status_code=403, detail="Admin access required")
    
    ext = file.filename.split('.')[-1]
    filename = f"{uuid.uuid4().hex}.{ext}"
    filepath = os.path.join("data/uploads", filename)
    
    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
        
    image_url = f"/api/uploads/{filename}"
    
    override = db.query(models.ImageOverride).filter(models.ImageOverride.id == target_id).first()
    if override:
        override.image_url = image_url
    else:
        override = models.ImageOverride(id=target_id, image_url=image_url)
        db.add(override)
    db.commit()
    
    return {"message": "Success", "image_url": image_url}

@app.delete("/delete-image/{target_id}")
def delete_image(
    target_id: str,
    current_user: models.User = Depends(auth.get_current_user), 
    db: Session = Depends(get_db)
):
    if current_user.email != "eseeva228@gmail.com":
        raise HTTPException(status_code=403, detail="Admin access required")
    
    override = db.query(models.ImageOverride).filter(models.ImageOverride.id == target_id).first()
    if not override:
        raise HTTPException(status_code=404, detail="Image override not found")
        
    try:
        filename = override.image_url.split("/")[-1]
        filepath = os.path.join("data/uploads", filename)
        if os.path.exists(filepath):
            os.remove(filepath)
    except Exception as e:
        print(f"Warning: Could not delete physical file: {e}")
        
    db.delete(override)
    db.commit()
    
    return {"message": "Deleted"}
