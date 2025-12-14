@echo off
echo ========================================
echo   Preparing PlantCare for Sharing
echo ========================================
echo.

echo Creating shareable package...
echo.

REM Create a folder for sharing
if exist "PlantCare-Shareable" (
    echo Removing old shareable folder...
    rmdir /s /q "PlantCare-Shareable"
)

mkdir "PlantCare-Shareable"

echo Copying essential files...

REM Copy HTML files
copy "index.html" "PlantCare-Shareable\" >nul
copy "signup.html" "PlantCare-Shareable\" >nul
copy "language-select.html" "PlantCare-Shareable\" >nul
copy "plant-type-select.html" "PlantCare-Shareable\" >nul
copy "home.html" "PlantCare-Shareable\" >nul
copy "result.html" "PlantCare-Shareable\" >nul

REM Copy JavaScript files
copy "auth.js" "PlantCare-Shareable\" >nul
copy "api.js" "PlantCare-Shareable\" >nul
copy "translations.js" "PlantCare-Shareable\" >nul
copy "server.js" "PlantCare-Shareable\" >nul

REM Copy CSS and config files
copy "style.css" "PlantCare-Shareable\" >nul
copy "package.json" "PlantCare-Shareable\" >nul
copy "package-lock.json" "PlantCare-Shareable\" >nul

REM Copy documentation
copy "README.md" "PlantCare-Shareable\" >nul
copy "SHARING_GUIDE.md" "PlantCare-Shareable\" >nul
copy "SETUP_INSTRUCTIONS.txt" "PlantCare-Shareable\" >nul
copy "start_server.bat" "PlantCare-Shareable\" >nul
copy ".gitignore" "PlantCare-Shareable\" >nul

echo.
echo ✅ Files copied successfully!
echo.
echo 📦 Package ready in: PlantCare-Shareable\
echo.
echo Next steps:
echo 1. Create a ZIP file of the "PlantCare-Shareable" folder
echo 2. Share the ZIP file with others
echo 3. Tell them to read SETUP_INSTRUCTIONS.txt
echo.
echo Press any key to open the folder...
pause >nul
explorer "PlantCare-Shareable"

