#!/bin/bash
python -m venv venv
source venv/Scripts/activate
npx -y create-vite@latest frontend --template react
cd frontend
npm install
npm install tailwindcss postcss autoprefixer lucide-react
npx tailwindcss init -p
