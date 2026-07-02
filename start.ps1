<#
Start both the Python Flask backend and the Node proxy in separate windows.
If Node is not installed the script will still start the Flask server and inform you.

Run from PowerShell (may require ExecutionPolicy):
  powershell -ExecutionPolicy RemoteSigned -File .\start.ps1
#>

$project = Split-Path -Path $MyInvocation.MyCommand.Path -Parent
Set-Location $project

Write-Host "Ensuring Python venv exists..." -ForegroundColor Cyan
if (-not (Test-Path -Path '.venv')) {
    python -m venv .venv
}

Write-Host "Installing Python requirements..." -ForegroundColor Cyan
.venv\Scripts\python.exe -m pip install --upgrade pip | Out-Null
.venv\Scripts\python.exe -m pip install -r requirements.txt | Out-Null

Write-Host "Starting Flask backend (port 5000) in a new window..." -ForegroundColor Green
Start-Process -FilePath pwsh -ArgumentList "-NoExit","-Command","cd '$project'; .\.venv\Scripts\python.exe app.py"

Write-Host "Checking for Node.js..." -ForegroundColor Cyan
try {
    $node = (Get-Command node -ErrorAction Stop)
    Write-Host "Node found. Starting Node proxy (port 3000) in a new window..." -ForegroundColor Green
    Start-Process -FilePath pwsh -ArgumentList "-NoExit","-Command","cd '$project'; node server.js"
} catch {
    Write-Host "Node.js not found on PATH. Install Node.js to run the Node proxy." -ForegroundColor Yellow
    Write-Host "You can still open http://127.0.0.1:5000 which is served by Flask." -ForegroundColor Yellow
}

Write-Host "Done." -ForegroundColor Cyan
