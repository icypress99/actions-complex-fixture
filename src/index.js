'use strict';

function add(a, b) {
  return Number(a) + Number(b);
}

function greet(name) {
  return `hello, ${name || 'world'}`;
}

module.exports = { add, greet };

if (require.main === module) {
  console.log(greet('actions-complex-fixture'));
  console.log('2+3=', add(2, 3));
}
