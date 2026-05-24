# Get the directory where the script is located
$BASE_DIR = Split-Path -Parent $MyInvocation.MyCommand.Path
$TARGET_DIR = Join-Path $BASE_DIR "assets\img"

# Check if exiftool is installed
if (-not (Get-Command exiftool -ErrorAction SilentlyContinue)) {
    Write-Host "ExifTool not found. Installing via winget..."

    if (-not (Get-Command winget -ErrorAction SilentlyContinue)) {
        Write-Host "winget is not installed. Please install App Installer from the Microsoft Store."
        exit 1
    }

    # Install ExifTool via winget
    winget install ExifTool -e --silent

    # Refresh PATH for current session (best effort)
    $env:Path += ";$env:LOCALAPPDATA\Microsoft\WindowsApps"
}

# Verify install worked
if (-not (Get-Command exiftool -ErrorAction SilentlyContinue)) {
    Write-Host "ExifTool installation failed or is not in PATH."
    exit 1
}

Write-Host "Removing metadata from images in: $TARGET_DIR"
Write-Host ""

# Remove metadata recursively
exiftool -all= -overwrite_original -r "$TARGET_DIR"

Write-Host ""
Write-Host "Done."