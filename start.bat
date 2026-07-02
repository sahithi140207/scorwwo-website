@echo off
REM Start both Flask (Python) and Node proxy in separate windows (Windows cmd)
SETLOCAL
cd /d %~dp0

IF NOT EXIST ".venv\Scripts\python.exe" (
  echo Creating Python virtual environment...
  python -m venv .venv
)

echo Installing Python requirements...
.venv\Scripts\python.exe -m pip install --upgrade pip >nul 2>&1
.venv\Scripts\python.exe -m pip install -r requirements.txt >nul 2>&1

echo Starting Flask backend (port 5000)...
start "Flask" cmd /k ".venv\Scripts\python.exe app.py"

where node >nul 2>&1
IF %ERRORLEVEL% EQU 0 (
  echo Starting Node proxy (port 3000)...
  start "Node" cmd /k "node server.js"
) ELSE (
  echo Node.js not found on PATH. Install Node.js to run the Node proxy.
  echo Flask is available at http://127.0.0.1:5000
)

ENDLOCAL
