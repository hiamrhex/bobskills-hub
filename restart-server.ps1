# Kill all Node.js processes
Write-Host "Stopping all Node.js processes..." -ForegroundColor Yellow
Stop-Process -Name node -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

# Navigate to server directory and start
Write-Host "Starting server..." -ForegroundColor Green
Set-Location server
npm run dev

# Made with Bob
