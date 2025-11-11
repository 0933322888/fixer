@echo off
REM Hostinger Deployment Helper Script for Windows
REM Run this script on your local machine before uploading to Hostinger

echo Starting Hostinger Deployment Preparation...

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed. Please install Node.js 18+ first.
    exit /b 1
)

echo Node.js version:
node --version

REM Install dependencies
echo Installing project dependencies...
call npm install

REM Build the project
echo Building the project...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo Build failed! Please check the errors above.
    exit /b 1
)

echo Build successful!
echo.
echo Next steps:
echo 1. Upload the entire project folder to your Hostinger VPS
echo 2. SSH into your server
echo 3. Run: bash deploy.sh (on the server)
echo 4. Configure Nginx and SSL (see HOSTINGER_DEPLOYMENT.md)
echo.
echo Don't forget to:
echo - Set up .env.local on the server with your RESEND_API_KEY
echo - Configure your domain DNS to point to your server IP
echo - Set up SSL certificate with Certbot

