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

// Intentional failure on demo/build-failure — surfaces in Actions Studio logs.
console.error('');
console.error('╔══════════════════════════════════════════════════════╗');
console.error('║  DEMO FAILURE  (branch: demo/build-failure)          ║');
console.error('╠══════════════════════════════════════════════════════╣');
console.error('║  Unit tests were forced to fail so Workflow Studio   ║');
console.error('║  can show a red job + the error log in-app.          ║');
console.error('╚══════════════════════════════════════════════════════╝');
console.error('');
console.error('Expected: add(2,3) === 5  → got 5 (ok)');
console.error('Forced exit: process.exit(1)');
process.exit(1);
