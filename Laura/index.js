// # 15-PB-math-object-pt1

// 1)
let chrs = "ABCDEFGH";
// 🚀 Write Program to picking one random character from chrs.
let result = Math.floor(Math.random() * chrs.length);
console.log(result);

// 2)
let sy = "    %&§!*@= ";
// 🚀  Write program to picking one not empty random character from sy.
// let trimSy = sy.trim(sy);
// let lengthSy = trimSy.length;
// let result2 = Math.floor(Math.random() * lengthSy);
// console.log(trimSy[result2]);
console.log(sy.trim(sy)[Math.floor(Math.random() * sy.trim(sy).length)]);

// let min = 3;
// let max = 10;
// console.log(Math.floor(Math.random() * (max - min + 1) + min));

// 3)
// Write program to generates Random rgba background color.
let x = Math.floor(Math.random() * 255);
let y = Math.floor(Math.random() * 255);
let z = Math.floor(Math.random() * 255);
let backgroundColor = `rgb(${x}, ${y}, ${z})`;
console.log(backgroundColor);
