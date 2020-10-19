// 1
let chrs = "ABCDEFGH";

console.log("1 ==>", chrs.charAt(Math.random() * 8));

//2
let sy = "%&    § !* @= ";
console.log("2 ==>", sy.charAt(Math.random() * 14));

//3
function randomNumber() {
  let X = Math.floor(Math.random() * 256);
  return X;
}
let backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
console.log(backgroundColor);
