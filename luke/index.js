let chrs = "ABCDEFGH";

// 🚀 Write Program to picking one random character from chrs.
let pickRandom = Math.floor(Math.random() * chrs.length);
console.log(chrs[pickRandom]);

let sy = "%& § !* @= ";

// Write program to picking one not empty random character from sy.
let space = / /gi;
let alteration = sy.replace(space, "");
let pickRandom2 = Math.floor(Math.random() * sy.length);
console.log(sy[pickRandom2]);

// Write program to generates Random rgba background color.
let r = Math.ceil(Math.random() * 255);
let g = Math.ceil(Math.random() * 255);
let b = Math.ceil(Math.random() * 255);

let rgb = `rgb(${r}, ${g}, ${b})`;
console.log(rgb);
