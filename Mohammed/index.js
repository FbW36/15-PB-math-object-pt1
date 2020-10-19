
// 1-
let chrs = 'ABCDEFGH';
let l = chrs.length;
randomChar = Math.floor(Math.random() *l );
console.log(chrs[randomChar]);

// 2- 
let sy =  '%& § !* @= ';
/* sy = sy.trim(); */
sy= sy.replace(/\s+/g, '');
/* console.log(`My string ==> '${sy}'`); */  
l = sy.length;
randomChar = Math.floor(Math.random() *l );
console.log(sy[randomChar]);



// 3-
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256); 
let a = Math.random() ;
console.log("r: ", r, "g: ", g, "b: ", b);

let BackgroundColor = `rgb(${r}, ${g}, ${b}, ${a.toFixed(1)})`;
console.log(BackgroundColor);