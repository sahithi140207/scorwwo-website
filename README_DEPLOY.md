Deploy instructions

Option A — Railway (recommended)
1. Create a GitHub repo and push this project.
2. Sign in to https://railway.app and choose "New Project" → "Deploy from GitHub".
3. Connect your repo, select it.
4. For the build/start settings set the start command to `python app.py` (Railway will read `Procfile` if present).
5. Deploy; Railway will provide a public HTTP link (e.g. https://your-app.up.railway.app).

Option B — Render
1. Push repo to GitHub.
2. Sign in to https://render.com, create a new Web Service, connect GitHub repo.
3. Set the build command: `pip install -r requirements.txt` and start command `python app.py`.
4. Deploy and copy the public URL.

Run locally
1. Install Python 3.8+ and add to PATH.
2. Run:
```
python -m pip install -r requirements.txt
python app.py
```
Open http://localhost:5000

Notes
- The Flask app now serves static files and exposes `/api/data` and `/api/status`.
- If you prefer the original Node proxy, run `node server.js` on port 3000 (requires Node.js).