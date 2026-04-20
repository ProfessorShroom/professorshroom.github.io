# Get the directory where the script is located
$BASE_DIR = Split-Path -Parent $MyInvocation.MyCommand.Path

$TARGET_DIR = Join-Path $BASE_DIR "assets\img"

# Check if exiftool is installed
if (-not (Get-Command exiftool -ErrorAction SilentlyContinue)) {
    Write-Host "ExifTool is not installed. Install it first:"
    Write-Host "choco install exiftool"
    exit 1
}

Write-Host "Removing metadata from images in: $TARGET_DIR"
Write-Host ""

# Remove metadata recursively
exiftool -all= -overwrite_original -r "$TARGET_DIR"

Write-Host ""
Write-Host "Done."