// exercise 1
let chrs = "ABCDEFGH";
let count = chrs.length;
let x = Math.floor(Math.random() * count) + 1;
console.log(chrs[x]);

// exercise 2
//let sy = "%&    § !* @= ";
let sy = " %&§!*@= ";
//let cleanSy = sy.replace(/\s/g, "");
/* \s is the regex for "whitespace", and g is the 
"global" flag, meaning match ALL \s (whitespaces).*/
let cleanSy = sy.trim();
console.log(cleanSy);
let countSy = cleanSy.length;
console.log(countSy);
let y = Math.floor(Math.random() * countSy) + 1;
console.log(cleanSy[y]);

//exercise 3
r = Math.floor(Math.random() * 255);
g = Math.floor(Math.random() * 255);
b = Math.floor(Math.random() * 255);
a = Math.floor(Math.random() * 100);
console.log(`rgb (${r},${g}, ${b}, ${a})`);
