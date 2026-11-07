'use strict';
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'src', 'index.js');
const text = fs.readFileSync(src, 'utf8');
if (!text.includes('module.exports')) {
  console.error('lint failed: missing exports');
  process.exit(1);
}
console.log('lint ok');
