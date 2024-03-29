"use strict";
// Refactoring to Arrow functions: Take a simple function that calculates the area of rectangle and refactor it into arrow function
function RectangleArea(length, width) {
    return length * width;
}
console.log(RectangleArea(4, 2));
const RectangleArea1 = (length, width) => length * width;
console.log(RectangleArea1(8, 2));
// RectangleArea(6,3);
// RectangleArea1(7,4);
