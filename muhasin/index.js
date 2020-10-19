// 1
let chrs = "ABCDEFGH";


console.log("chrs ==>", chrs[Math.floor(Math.random() * 8)]);


// 2. Write Program to picking one not empty random character from sy

let sy = "%& § !* @= ";
let replaceEmpty = sy.replace(/ /g, "");
console.log(replaceEmpty);
console.log("replaceEmpty", replaceEmpty[Math.floor(Math.random() * 7)]);

// 3. Write program to generates Random rgba background color

// rgb ==> 0 to 255

let m = Math.ceil(Math.random() * 255);
let x = Math.ceil(Math.random() * 255);

let y = Math.ceil(Math.random() * 255);
let z = Math.ceil(Math.random() * 255);
// console.log("m:", m, "x:", x, "y:", y, "z:", z); // rgb (m,x,y,z)

let Background = `rgba(${m}, ${x}, ${y}, ${z})`;
console.log(Background);