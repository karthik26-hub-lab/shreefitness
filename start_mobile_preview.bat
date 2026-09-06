@echo off
title Shree Fitness Studio - Mobile Preview Server
cls
echo ========================================================
echo     SHREE FITNESS STUDIO - MOBILE NETWORK SERVER
echo ========================================================
echo.

:: Ensure logo is copied
if not exist assets\logo.png (
    call copy_logo.bat
)

echo Finding your computer's local Wi-Fi IP address...
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4 Address"') do (
    set IP=%%a
    goto found_ip
)

:found_ip
:: Remove leading space
set IP=%IP: =%

echo.
echo --------------------------------------------------------
echo  [HOW TO OPEN ON YOUR MOBILE PHONE]
echo  1. Make sure your phone is connected to the SAME Wi-Fi as this PC.
echo  2. Open Chrome or Safari on your phone.
echo  3. Type this URL in your mobile browser:
echo.
echo         http://%IP%:3000
echo.
echo  (Or if running Vite: http://%IP%:5173)
echo --------------------------------------------------------
echo.
echo Starting local web server on port 3000...
echo Press Ctrl + C to stop the server anytime.
echo.

npx --yes serve -l 3000

if %errorlevel% neq 0 (
    echo.
    echo Trying fallback with Python...
    python -m http.server 3000 --bind 0.0.0.0
)

pause
