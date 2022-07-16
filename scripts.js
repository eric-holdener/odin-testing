module.exports = {};

module.exports.capitalize = function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

module.exports.reverseString = function reverseString(string) {
  let arr = string.split("");
  let newString = "";
  for(let i = arr.length-1; i > -1; i--) {
    newString = newString + arr[i];
  };
  return newString;
}

const calculatorObject = {
  sum: function(a, b) {
    return a+b;
  },

  subtract: function(a, b) {
    return a-b;
  },

  multiply: function(a, b) {
    return a*b;
  },

  divide: function(a, b) {
    return a/b;
  }
}


module.exports.calculator = calculatorObject