@echo off
title Copy Shree Fitness Studio Media Assets
echo Copying official transparent logo, digital banner, and studio media into assets folder...
if not exist assets mkdir assets
copy /Y "C:\Users\KARTHIK\.gemini\antigravity\brain\5bc7bc30-cb72-4494-8f20-5ceb09d5b86c\.user_uploaded\media_1788533715923.png" "assets\logo.png"
copy /Y "C:\Users\KARTHIK\.gemini\antigravity\brain\5bc7bc30-cb72-4494-8f20-5ceb09d5b86c\.user_uploaded\media_1788530620260.png" "assets\banner.png"
copy /Y "C:\Users\KARTHIK\.gemini\antigravity\brain\5bc7bc30-cb72-4494-8f20-5ceb09d5b86c\.user_uploaded\media_1788530632476.jpg" "assets\poster.jpg"
echo.
echo =========================================================
echo [SUCCESS] Logo, Digital Banner, Board and Poster copied!
echo Refresh index.html in your browser to view the changes.
echo =========================================================
echo.
pause
