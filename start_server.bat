@echo off
echo ========================================
echo   Plant Care API Server - Node.js
echo ========================================
echo.

echo [1/2] Installing dependencies...
call npm install
if errorlevel 1 (
    echo.
    echo ERROR: Failed to install dependencies!
    echo Please make sure Node.js is installed.
    echo Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo [2/2] Starting server...
echo.
echo Server will start on: http://127.0.0.1:8000
echo Keep this window open while using the app.
echo Press Ctrl+C to stop the server.
echo.
echo ========================================
echo.

node server.js

pause

