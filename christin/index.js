let chrs = "ABCDEFGH";

// Write Program to picking one random character from chrs.

let pickNum = chrs.charAt(Math.random() * 8);

console.log("pickrandom:", pickNum);

//---------############------------

//Write program to picking one not empty random character from sy.

let sy = "%& § !* @= ";
sy = sy.split(" ");
sy = sy.toString();

let pickNum2 = sy.charAt(Math.random() * 8);

console.log(pickNum2);

//-------------###########------------------

//Write program to generates Random rgba background color.
let x = Math.ceil(Math.random() * 255);
//  let x = Math.floor(Math.random() * 256)

let y = Math.ceil(Math.random() * 255);
let z = Math.ceil(Math.random() * 255);

let backCol = `rgb(${x},${y},${z})`;
console.log(backCol);
