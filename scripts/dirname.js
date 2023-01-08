const fs = require('node:fs');
const path = require('node:path');
const filePath = path.join(__dirname, '..', 'dist', 'index.js');
let code = fs.readFileSync(filePath, 'utf8');
code = code.replace('__dirname', '""');

fs.writeFileSync(filePath, code, 'utf8');
