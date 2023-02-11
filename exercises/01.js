/**
 *
 * @param {*} y
 * @param {*} x
 * @returns
 */
function rectangularShapeArea(y, x) {
  function testArg(arg) {
    if (typeof arg === "string") {
      return [true, 'Negali buti "string"'];
    }
    if (typeof arg == "object") {
      return [true, 'Negali buti "object"'];
    }
    if (typeof arg == "boolean") {
      return [true, 'Negali buti "boolean"'];
    }
    if (typeof arg === "function") {
      return [true, 'Negali buti "function"'];
    }
    return [false, "OK"];
  }
  if (y === null) {
    return [true, 'Negali buti "null"'];
  }
  if (typeof y === "string") {
    return [true, 'Negali buti "string"'];
  }
  if (typeof y == "object") {
    return [true, 'Negali buti "object"'];
  }
  if (typeof y === "boolean") {
    return [true, 'Negali buti "boolean"'];
  }
  if (typeof y == "function") {
    return [true, 'Negali buti "function"'];
  }
  if (typeof y == "undefined") {
    return [true, 'Negali buti "undefined"'];
  }

  if (y < 0) {
    return [true, "Negali buti neigiamas"];
  }
  if (x === null) {
    return [true, 'Negali buti "null"'];
  }

  if (testArg(x)[0] === true) {
    if (testArg(x)[1] == 'Negali buti "string"' || testArg(x)[1] === 'Negali buti "object"' || testArg(x)[1] == 'Negali buti "boolean"' || testArg(x)[1] == 'Negali buti "function"') {
      return testArg(x);
    }
  }
  if (typeof x === "undefined") {
    return [true, 'Negali buti "undefined"'];
  }

  if (x < 0) {
    return [true, "Negali buti neigiamas"];
  }

  return [false, y * x];
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
