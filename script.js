let random = Math.random();
let a = prompt("enter first number");
let b = prompt("enter second number");
let c = prompt("enter operation to perform");
let obj = {
  "+": "-",
  "-": "+",
  "*": "/",
  "/": "*",
};

if (random > 0.1) {
  // perform correct operation
  alert(`result is ${eval(`${a} ${c} ${b}`)}`);
} else {
  // perform wrong operation
  c = obj[c];
  alert(`result is ${eval(`${a} ${c} ${b}`)}`);
}
