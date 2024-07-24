const add = function(num1, num2) {
  return num1 + num2
	
};

const subtract = function(num1, num2) {
  return num1 - num2
};

const sum = function(array) {
	total = 0
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total
};

const multiply = function(array) {
  total = 1
  for (let i = 0; i < array.length; i++) {
    total *= array[i];
  }
  return total
};

const power = function(num1, num2) {
  return num1 ** num2
};

const factorial = function(num) {
  if (num == 0 || num == 1) {
    return 1
  }
  let sum = 1
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      sum *= i
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
