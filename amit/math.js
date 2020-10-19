let chrs = "ABCDEFGH";
let ans = Math.floor(Math.random() * chrs.length);
console.log(chrs[ans]);

// 2
let sy = "% & § ! * @ =";
let split = sy.split(" ");
let ans2 = Math.floor(Math.random() * split.length);
console.log(split[ans2]);

// 3

let x = Math.floor(Math.random() * 256);
let y = Math.floor(Math.random() * 256);
let z = Math.floor(Math.random() * 256);
let a = Math.floor(Math.random() * 256);
console.log(`rgba(${x},${y},${z},${a})`);
