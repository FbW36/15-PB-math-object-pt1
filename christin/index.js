let chrs = "ABCDEFGH";

// Write Program to picking one random character from chrs.

let pickNum = chrs.charAt(Math.random() * 8);

console.log("pickrandom:", pickNum);

//---------############------------

//Write program to picking one not empty random character from sy.

let sy = "%& § !* @= ";
sy = sy.split(" ");
sy = sy.join("");

let pickNum2 = sy[Math.floor(Math.random() * sy.length)];

//console.log(Math.floor(Math.random() * sy.length));

console.log(pickNum2);

//-------------###########------------------

//Write program to generates Random rgba background color.
let x = Math.ceil(Math.random() * 255);
//  let x = Math.floor(Math.random() * 256)

let y = Math.ceil(Math.random() * 255);
let z = Math.ceil(Math.random() * 255);
let a = Math.floor(Math.random() * 2);

let backCol = `rgb(${x},${y},${z},${a})`;
console.log(backCol);
