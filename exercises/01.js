/**
 *
 * @param {number} y - rectangular vertical side length, positive finite number more than 0
 * @param {number} x - rectangular horizontal side length, positive finite number more than 0
 * @returns {Array} array with 2 elements: boolean - showing invalid argument and (string - failure message or number - calculated rectangular area)
 */
// No checks for too big numbers. What precision to return area if floating point number?
function rectangularShapeArea(y, x) {
  return checkIfInvalidArg(y) || checkIfInvalidArg(x) || [false, y * x];

  function checkIfInvalidArg(arg) {
    let type = typeof arg;
    if (type !== "number") {
      return [true, `Negali buti "${arg === null ? "null" : type}"`];
    }
    if (arg <= 0 || !Number.isFinite(arg)) {
      return [true, `Negali buti ${arg < 0 ? "neigiamas" : arg.toString()}`];
    }
    return false;
  }
}
console.log(rectangularShapeArea(-10, 10), "-->", [true, "Negali buti neigiamas"]);
console.log(rectangularShapeArea(10, -10), "-->", [true, "Negali buti neigiamas"]);
console.log(rectangularShapeArea(10, 10), "-->", [false, 100]);
console.log(rectangularShapeArea(5, 4), "-->", [false, 20]);
console.log(rectangularShapeArea(2, 8), "-->", [false, 16]);
console.log(rectangularShapeArea(10, "10"), "-->", [true, `Negali buti "string"`]);
console.log(rectangularShapeArea("10", 10), "-->", [true, `Negali buti "string"`]);
console.log(rectangularShapeArea(10, "false"), "-->", [true, `Negali buti "string"`]);
console.log(rectangularShapeArea("false", 10), "-->", [true, `Negali buti "string"`]);
console.log(rectangularShapeArea(10, { a: 10 }), "-->", [true, `Negali buti "object"`]);
console.log(rectangularShapeArea({ a: 10 }, 10), "-->", [true, `Negali buti "object"`]);
console.log(rectangularShapeArea({}, 10), "-->", [true, `Negali buti "object"`]);
console.log(rectangularShapeArea(10, false), "-->", [true, `Negali buti "boolean"`]);
console.log(rectangularShapeArea(false, 10), "-->", [true, `Negali buti "boolean"`]);
let testFunc = () => {};
console.log(rectangularShapeArea(10, testFunc), "-->", [true, `Negali buti "function"`]);
console.log(rectangularShapeArea(testFunc, 10), "-->", [true, `Negali buti "function"`]);
console.log(rectangularShapeArea(10), "-->", [true, `Negali buti "undefined"`]);
console.log(rectangularShapeArea(undefined, 10), "-->", [true, `Negali buti "undefined"`]);
console.log(rectangularShapeArea(10, null), "-->", [true, `Negali buti "null"`]);
console.log(rectangularShapeArea(null, 10), "-->", [true, `Negali buti "null"`]);
console.log(rectangularShapeArea(Infinity, 10), "-->", [true, `Negali buti Infinity`]);
console.log(rectangularShapeArea(10, -Infinity), "-->", [true, `Negali buti neigiamas`]);
console.log(rectangularShapeArea(10, NaN), "-->", [true, `Negali buti NaN`]);
