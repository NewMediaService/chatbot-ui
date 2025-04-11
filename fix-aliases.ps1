$root = Get-Location
$extensions = "*.ts", "*.tsx"

Get-ChildItem -Path $root -Recurse -Include $extensions -File | ForEach-Object {
    $filePath = $_.FullName

    try {
        $lines = Get-Content -LiteralPath $filePath
        $content = $lines -join "`n"

        if ($content -match 'from\s+["'']@/[^"'']+["'']') {
            $relativePath = $filePath.Substring($root.Path.Length).TrimStart("\\")

            $depth = ($relativePath -split '[\\/]').Length - 1
            $prefix = ("../" * $depth).TrimEnd('/')

            $fixed = $content -replace 'from\s+["'']@/([^"'']+)["'']', "from `"$prefix/$1`""

            if ($fixed -ne $content) {
                Write-Host "Ersetze Aliase in: $relativePath"
                Set-Content -LiteralPath $filePath -Value $fixed -Encoding UTF8
            }
        }
    } catch {
    }
}
