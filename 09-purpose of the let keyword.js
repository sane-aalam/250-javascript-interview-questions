//* Let Keyword
// block scope local variable
// Introduced as part of ES6
// Whereasvariables declared with the var keyword used to define a variable globally, or locally to anentire function regardless of block scope

let counter = 20;
if (counter == 20) {
  let counter = 34;
  console.log(counter); // output : 34
  //(because the variable in if block won't exist here)
}
console.log(counter); // output 20
