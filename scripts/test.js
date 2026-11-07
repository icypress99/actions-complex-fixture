'use strict';
const { add, greet } = require('../src');

if (add(2, 3) !== 5) {
  console.error('test failed: add');
  process.exit(1);
}
if (!greet('ci').startsWith('hello')) {
  console.error('test failed: greet');
  process.exit(1);
}
console.log('unit tests ok');
