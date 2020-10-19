// 1.
let chrs = 'ABCDEFGH';
console.log("ABCDEFGH ==> ", chrs[Math.floor(Math.random() * chrs.length)]);


// 2.
let sy = ' %&§!*@= ';
console.log("SYMBOLS ==>", sy.trim()[Math.floor(Math.random() * sy.trim().length)]);



// 3.
//rgb from 0 - 255
//a - alpha 0.0 to 1.0

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
let a = Math.random().toFixed(1);
console.log("RGBa  ==> ", "r:", r ,"g:", g ,"b:", b, "a:", a);
