//1. 
let chrs = 'ABCDEFGH';

//Write Program to picking one random character from chrs.
console.log(chrs[Math.floor(Math.random() * 8)]);


//2.  Write program to picking one not empty random character from sy.
let sy = '%& § !* @= '
let sy2 = sy.replace(/ /g,'')
//console.log(sy2)
console.log(sy2[Math.floor(Math.random() * 7)]);



//3. 
//Write program to generates Random rgba background color.

let r = Math.floor(Math.random()* 256)
let g = Math.floor(Math.random()* 256)
let b = Math.floor(Math.random()* 256)
console.log("red => :", r, "green => :", g, "blue => :", b)