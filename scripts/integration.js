'use strict';
const fs = require('fs');
const path = require('path');

const infoPath = path.join(__dirname, '..', 'dist', 'build-info.json');
if (!fs.existsSync(infoPath)) {
  console.error('integration failed: missing dist/build-info.json (run build first)');
  process.exit(1);
}
const info = JSON.parse(fs.readFileSync(infoPath, 'utf8'));
console.log('integration ok', info);
