// 1
let chrs = "ABCDEFGH";
console.log(chrs.length);
let random = chrs[Math.floor(Math.random() * 8)];
console.log("picking one random character ==>", random);

// 2
let sy = "%& § !* @= ";
let char = sy.replace(/\s+/g, "");
let random2 = char[Math.floor(Math.random() * 7)];
console.log("picking one not empty random character ==>", random2);

// 3
let x = Math.ceil(Math.random() * 255);
let y = Math.ceil(Math.random() * 255);
let z = Math.ceil(Math.random() * 255);
let a = Math.ceil(Math.random() * 100);
let backgrooundColor = `rgba(${x}, ${y}, ${z}, ${a})`;
console.log("rgba background color ==>", backgrooundColor);
