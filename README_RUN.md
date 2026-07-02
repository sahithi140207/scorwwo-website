# Running the project (quick start)

This repo contains a Python (Flask) backend and an optional Node.js proxy. The Flask app serves the static site and an API endpoint; the Node proxy is used to demonstrate how to proxy requests to the Python backend.

Prerequisites
- Python 3.8+ (for the Flask backend)
- Node.js (optional, for `server.js` proxy)

Start only the Python backend (works by itself)

PowerShell
```powershell
cd "c:\Users\HP\Downloads\railway project"
python -m venv .venv
.venv\Scripts\Activate
pip install -r requirements.txt
.venv\Scripts\python.exe app.py
# open http://127.0.0.1:5000
```

Start both (PowerShell helper)
```powershell
cd "c:\Users\HP\Downloads\railway project"
powershell -ExecutionPolicy RemoteSigned -File .\start.ps1
```

Start both (cmd helper)
```
cd /d "c:\Users\HP\Downloads\railway project"
start.bat
```

Start Node proxy manually (if you prefer)
```powershell
# install node deps once
npm install
# then in a new terminal
node server.js
# open http://localhost:3000 (proxy -> Flask backend)
```

Notes
- If Node.js is not installed the helper scripts will still start the Flask server.
- The Flask server serves static files from the project root and exposes `/api/data`.