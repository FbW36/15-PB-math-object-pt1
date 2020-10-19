let log = console.log;

//  Write Program to picking one random character from chrs
let chrs = 'ABCDEFGH';
log('random character:', chrs[Math.floor(Math.random() * 8)])

// Write program to picking one not empty random character from sy
let sy = ' %&§!*@= ';
let syLength = sy.length
log('non-empty character:', sy[Math.floor(Math.random() * (syLength - 2) + 1)])

// Write program to generates Random rgba background color
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
log('random color:', `rgb(${r},${g},${b})`)