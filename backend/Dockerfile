FROM python:3.11-slim

WORKDIR /app

# Install robust dependencies directly from the root-level requirements list
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Seed the application folder
COPY backend/ .

# Ensure data directory exists for persistent SQLite mappings via docker-compose
RUN mkdir -p data

EXPOSE 8080

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
