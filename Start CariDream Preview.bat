@echo off
setlocal
cd /d "%~dp0"

set "BUNDLED_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"

if exist "%BUNDLED_NODE%" (
  set "NODE_EXE=%BUNDLED_NODE%"
) else (
  where node >nul 2>nul
  if errorlevel 1 (
    echo Node.js was not found.
    echo.
    echo Install Node.js from https://nodejs.org or run this from inside Codex where the bundled runtime is available.
    pause
    exit /b 1
  )
  set "NODE_EXE=node"
)

start "" "http://127.0.0.1:4173"
"%NODE_EXE%" "%~dp0start-preview.js"
pause
