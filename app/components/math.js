// This is where all of our math functions will be stored

function add(a,b){
  return a + b;
}

function subtract(a,b){
  return a - b;
}

function multiply(a,b){
  return a * b;
}

function divide(a,b){
  return a / b;
}

function mod(a,b) {
  return a % b;
}

module.exports = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  mod: mod
}
