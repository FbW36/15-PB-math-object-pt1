
let chrs = 'ABCDEFGH';

// 🚀 Write Program to picking one random character from chrs.

console.log(chrs[Math.floor(Math.random() * 8)]);

// ---------############------------

let sy = '%& § !* @= ';
console.log(sy[Math.floor(Math.random() * 14)]);
//no idea sorry
let syWithNoSpaces = sy.replace(/ /g, "");
console.log(syWithNoSpaces);
let randomSy = syWithNoSpaces[Math.floor(Math.random() * syWithNoSpaces.length)];
console.log("is not empty:", randomSy);

// 🚀 Write program to picking one not empty random character from sy.

// -------------###########------------------

// Write program to generates Random rgba background color.

let color1 = Math.floor(Math.random() * 256);
let color2 = Math.floor(Math.random() * 256);
let color3 = Math.floor(Math.random() * 256);
let randomBackground = `rgb(${color1},${color2},${color3})`;
console.log(randomBackground);