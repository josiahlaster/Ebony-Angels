# Rename files in menus folder
Set-Location "src/assets/menus"
Get-ChildItem * | Where-Object { $_.Name -match ' ' } | ForEach-Object {
    $newName = $_.Name -replace ' ', '_'
    Rename-Item $_.FullName -NewName $newName -Force
    Write-Host "Renamed: $($_.Name) -> $newName"
}

# Rename files in air folder
Set-Location "../air"
Get-ChildItem * | Where-Object { $_.Name -match '[ ()]' } | ForEach-Object {
    $newName = $_.Name -replace ' ', '_' -replace '\(', '' -replace '\)', '' -replace "'", ''
    Rename-Item $_.FullName -NewName $newName -Force
    Write-Host "Renamed: $($_.Name) -> $newName"
}

Set-Location "../../.."
Write-Host "Done renaming files!"
