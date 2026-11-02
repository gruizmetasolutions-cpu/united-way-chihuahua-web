# Compuerta de Calidad Integral - Desarrollo Ágil Dataholics
$Raiz = $PSScriptRoot
$Web = if (Test-Path (Join-Path $Raiz "apps\web")) { Join-Path $Raiz "apps\web" } elseif (Test-Path (Join-Path $Raiz "frontend")) { Join-Path $Raiz "frontend" } elseif (Test-Path (Join-Path $Raiz "client")) { Join-Path $Raiz "client" } else { Join-Path $Raiz "apps\web" }
$Api = if (Test-Path (Join-Path $Raiz "apps\api")) { Join-Path $Raiz "apps\api" } elseif (Test-Path (Join-Path $Raiz "backend")) { Join-Path $Raiz "backend" } elseif (Test-Path (Join-Path $Raiz "server")) { Join-Path $Raiz "server" } else { Join-Path $Raiz "apps\api" }
$Fallas = 0

Write-Host ""
Write-Host "=================================================="
Write-Host ">>> 1. Frontend: Typecheck (tsc --noEmit)"
Write-Host "=================================================="
if (Test-Path $Web) {
    Set-Location $Web
    npx tsc --noEmit
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[FAIL] Frontend Typecheck fallo" -ForegroundColor Red
        $Fallas++
    } else {
        Write-Host "[OK] Frontend Typecheck paso" -ForegroundColor Green
    }
} else {
    Write-Host "[INFO] Directorio de Frontend no detectado aún en el workspace. Saltando Typecheck..." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=================================================="
Write-Host ">>> 2. Frontend: Lint (oxlint / eslint)"
Write-Host "=================================================="
if (Test-Path $Web) {
    Set-Location $Web
    if (Get-Command oxlint -ErrorAction SilentlyContinue) {
        npx oxlint
    } else {
        npm run lint
    }
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[FAIL] Frontend Lint fallo" -ForegroundColor Red
        $Fallas++
    } else {
        Write-Host "[OK] Frontend Lint paso" -ForegroundColor Green
    }
} else {
    Write-Host "[INFO] Directorio de Frontend no detectado aún en el workspace. Saltando Lint..." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=================================================="
Write-Host ">>> 3. Backend: Rutas de API"
Write-Host "=================================================="
if (Test-Path $Api) {
    Set-Location $Api
    if (Test-Path "spark") {
        php spark routes
        if ($LASTEXITCODE -ne 0) {
            Write-Host "[FAIL] Backend Rutas fallo" -ForegroundColor Red
            $Fallas++
        } else {
            Write-Host "[OK] Backend Rutas paso" -ForegroundColor Green
        }
    }
} else {
    Write-Host "[INFO] Directorio de Backend no detectado aún en el workspace. Saltando Rutas..." -ForegroundColor Yellow
}

Set-Location $Raiz

Write-Host ""
Write-Host "=================================================="
if ($Fallas -eq 0) {
    Write-Host "[OK] COMPUERTA EN VERDE - Todos los chequeos pasaron correctamente." -ForegroundColor Green
    exit 0
} else {
    Write-Host "[FAIL] COMPUERTA ROJA - $Fallas chequeos fallaron." -ForegroundColor Red
    exit 1
}
