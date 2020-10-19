let chrs = 'ABCDEF';
let ranLetter = Math.floor( Math.random() * chrs.length);
console.log(chrs[ranLetter])

let sy = ' %&§!*@= '
let ranMark = Math.floor( Math.random() * 7) +1;
console.log(sy[ranMark])
 

let sy2 = '%& § !* @= '
let syReplace = sy.replace(/ /g, "");
let ranMark2 = Math.floor( Math.random() * syReplace.length);
console.log(syReplace[ranMark2])





let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256); 
let a = Math.random().toFixed(2);

console.log(`rgba(${r},${g},${b},${a})`)