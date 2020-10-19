// 1. let chrs = 'ABCDEFGH'; =====> 🚀 Write Program to picking one random character from chrs.

let chrs = 'ABCDEFGH' ; 
console.log('chrs ==>', chrs[Math.floor(Math.random() * 8)]) ; // random letter 

// 2. let sy = '%& § !* @= ' ====> 🚀  Write program to picking one not empty random character from sy.
let sy = '%& § !* @= ' ;
let randomPick = sy.replace(/ /g, ""); 
// ==> https://stackoverflow.com/questions/10800355/remove-whitespaces-inside-a-string-in-javascript
console.log('randomPick ==>', randomPick[Math.floor(Math.random() * 7)]) ; 

// 3. Write program to generates Random rgba background color.
// rgb ==> 0 to 255 ===> rgb(50,410,25)
let colorOne = Math.ceil(Math.random() * 255) ;
let colorTwo = Math.ceil(Math.random() * 255) ;
let colorThree = Math.ceil(Math.random() * 255) ;

let BackgroundColor = `rgb(${colorOne}, ${colorTwo}, ${colorThree})` ;
console.log('BackgroundColor ==>', BackgroundColor) ; // ==> rgb(204, 18, 36)

