const fs = require('fs');
const path = require('path');
const version = process.argv[2];

fs.appendFileSync(path.join(__dirname, '../', '_config.yml'), '\nversion: ' + version);