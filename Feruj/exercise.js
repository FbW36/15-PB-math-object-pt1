//1 Write Program to picking one random character from chrs.

let chrs = "ABCDEFGH";
console.log(chrs.charAt(Math.random() * 8));

//2
let sy = "%&    § !* @= ";
let finalSy = sy.replace(/\s/g, "");
console.log(finalSy.charAt(Math.random() * 7));


//3
let r = Math.ceil(Math.random() * 255);
let g = Math.ceil(Math.random() * 255);
let b = Math.ceil(Math.random() * 255);
let a = Math.ceil(Math.random() * 255);

let bgColor = `rgba(${r},${g},${b},${a})`;
console.log(bgColor);
