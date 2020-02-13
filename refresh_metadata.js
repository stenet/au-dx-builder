const https = require("https");
const fs = require("fs");

fs.unlinkSync("./metadata.json")
const file = fs.createWriteStream("metadata.json");

https.get("https://raw.githubusercontent.com/DevExpress/devextreme-angular/master/metadata/NGMetaData.json", (response) => {
  response.pipe(file);
});

