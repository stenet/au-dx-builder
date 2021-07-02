Remove-Item .\metadata.json

Write-Host "loading new metadata.json"
$url = "https://raw.githubusercontent.com/DevExpress/devextreme-angular/master/packages/devextreme-angular/metadata/NGMetaData.json"
$output = ".\metadata.json"
Invoke-WebRequest $url -OutFile $output

Write-Host "updating packages.json"
$version = npm show devextreme version
$package = Get-Content .\package.json | ConvertFrom-Json

$package.version = $version
$package.peerDependencies.devextreme = $version
$package.devDependencies.devextreme = $version

$package | ConvertTo-Json | Set-Content .\package.json

Write-Host "installing packages"
npm i

Write-Host "creating new version"
npm run build-dx
npm run start
