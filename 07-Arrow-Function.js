const NewArray = [11, 12, 13, 14, 15, 16, 17];
console.log(NewArray);

// Normal Iteration

function printArrayUsingNormal() {
  const totalSize = NewArray.length;
  for (let index = 0; index < totalSize; index++) {
    console.log(NewArray[index]);
  }
}

// Arrow Function -
// An arrow function is a shorter syntax for a function expression and does not have its own this,arguments, super, or new.targe

const printArrayUsingArrow = () => {
  const totalSize = NewArray.length;
  for (let index = 0; index < totalSize; index++) {
    console.log(NewArray[index]);
  }
};

printArrayUsingNormal(NewArray);
printArrayUsingArrow(NewArray);
