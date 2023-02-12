const assert = require("assert");

console.clear();

function multiplyVals(multiplier) {
  return (arr) => {
    if (multiplier === 1) {
      return arr;
    }
    return arr.map((num) => num * multiplier);
  };
}

function arrayValuesMultiplier(numbersArray = [], multiplier = 1) {
  let fac = multiplyVals(multiplier);

  // DO NOT EDIT THIS LINE
  return fac(numbersArray);
}

const factory = arrayValuesMultiplier;
// ***********************************
// DO NOT EDIT CODE BELOW THIS COMMENT
// ***********************************

assert.deepStrictEqual(factory([1]), [1]);
assert.deepStrictEqual(factory([1], 2), [2]);
assert.deepStrictEqual(factory([2], 2), [4]);
assert.deepStrictEqual(factory([2], 3), [6]);
assert.deepStrictEqual(factory([1, 2, 3], 1), [1, 2, 3]);
assert.deepStrictEqual(factory([1, 2, 3], 2), [2, 4, 6]);
assert.deepStrictEqual(factory([1, 2, 3], 0), [0, 0, 0]);
assert.deepStrictEqual(factory([1, 2, 3], 10), [10, 20, 30]);
