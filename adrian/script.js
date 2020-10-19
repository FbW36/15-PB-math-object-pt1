//1 Write Program to picking one random character from chrs.
let chrs = 'ABCDEFGH';

console.log(chrs[Math.floor(Math.random() * chrs.length)]);

//2 Write program to picking one not empty random character from sy.
let sy = ' %&§!*@= ';
console.log(sy[Math.floor(Math.random() * (sy.length - 2) + 1)]);

//3
console.log(
  `The background-color is rgba(${Math.floor(
    Math.random() * (255 + 1)
  )}, ${Math.floor(Math.random() * (255 + 1))} ,${Math.floor(
    Math.random() * (255 + 1)
  )} ,${Math.random().toFixed(2)})`
);
