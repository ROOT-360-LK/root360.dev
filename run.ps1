
bun --bun next build

try {

    Push-Location -Path "out"

    Write-Host "Starting Python HTTP server on http://localhost:8000"
    Write-Host "Press Ctrl+C to stop the server"
    python -m http.server 8000
    
}
finally {
    Pop-Location
    Write-Host "Server stopped and returned to original directory"
}

