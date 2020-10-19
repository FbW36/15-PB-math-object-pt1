// *1)

let chrs = "ABCDEFGH";

//* 🚀 Write Program to picking one random character from chrs.

let lengthChrs = chrs.length;

let min = 0;
let max = 7;
let random = Math.floor(Math.random() * (max - min + 1) + min);
let chrsRandom = chrs[random];

console.log("chrsRandom ==>", chrsRandom);

// ---------############------------

// *2)

let sy = " %&§!*@= ";

//* 🚀  Write program to picking one not empty random character from sy.

let lengthSy = sy.length;
let trimedSy = sy.trim(); //removing empty spaces

console.log("lengthSy: ", lengthSy);

console.log("trimedSy: ", trimedSy);
let lengthTrimedSy = trimedSy.length;
console.log("lengthTrimedSy==>", lengthTrimedSy);

let min1 = 0;
let max1 = 6;
let random1 = Math.floor(Math.random() * (max1 - min1 + 1) + min1);
let syRandom = trimedSy[random1];

console.log("syRandom==>", syRandom);

// -------------###########------------------

//* 3)

//* Write program to generates Random rgba background color.

let x = Math.floor(Math.random() * 256);
console.log("x ==>", x);
let y = Math.ceil(Math.random() * 255);
console.log("y ==>", y);
let z = Math.ceil(Math.random() * 255);
console.log("z ==>", z);
let BackgroundColor = `rgb(${x},${y},${z})`;
console.log("BackgroundColor ==>", BackgroundColor);
