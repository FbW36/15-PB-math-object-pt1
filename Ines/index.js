// 1
let chrs = "ABCDEFGH";

console.log("1 ==>", chrs.charAt(Math.random() * 8));

//2
let sy = '%& § !\* @=  s';
let syNoSpaces = sy.replace(/ /g, "");
console.log(syNoSpaces);
console.log("2 ==>", syNoSpaces.charAt(Math.random() * 8));

//3
function randomNumber() {
  let X = Math.floor(Math.random() * 256);
  return X;
}
let backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
console.log(backgroundColor);
