@echo off
echo ========================================
echo  User Management System - Quick Start
echo ========================================
echo.

echo [1/3] Starting Backend (Spring Boot)...
cd backend
start "Backend Server" cmd /k "mvn spring-boot:run"
cd ..

echo [2/3] Waiting for backend to start...
timeout /t 10 /nobreak > nul

echo [3/3] Starting Frontend (Next.js)...
cd frontend
start "Frontend Server" cmd /k "npm run dev"
cd ..

echo.
echo ========================================
echo  Servers are starting up...
echo  Backend: http://localhost:8080
echo  Frontend: http://localhost:3000
echo ========================================
echo.
echo Press any key to exit...
pause > nul