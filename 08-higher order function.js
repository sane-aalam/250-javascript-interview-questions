// Higher order function -> functions that take one or more functions as arguments, or return a function as their result

//* How Higher Order Functions Work
// So, suppose I want you to write a function that calculates the area and diameter of a circle. As a beginner, the first solution that comes to our mind is to write each separate function to calculate area or diameter.

//step-1 calculate the radius of the array
//step-2 findout the diameter with help of the radius function

const radius = [1, 2, 3];

const calculateArea = () => {
  let output = [];
  for (let curIndex = 0; curIndex < radius.length; curIndex) {
    let result = Math.PI * radius[curIndex] * radius[curIndex];
    output.push(result);
  }
  // return the result array
  return output;
};

// function to calculate diameter of the circle
const calculateDiameter = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};

calculateArea(radius);
calculateDiameter(radius);

// But have you noticed the problem with the above code? Aren't we writing almost the same function again and again with slightly different logic? Also, the functions we have written aren't reusable, are they?

// So, let's see how we can write the same code using HOFs

const radiusNew = [1, 2, 3];

//  logic to clculate area
const area = function (radius) {
  return Math.PI * radius * radius;
};

// logic to calculate diameter
const diameter = function (radius) {
  return 2 * radius;
};

// a reusable function to calculate area, diameter, etc
const calculate = function (radius, area) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    let result = area(radius[i]); // function inside the function called
    output.push(result);
  }
  return output;
};

area(radiusNew);
diameter(radiusNew);
calculate(radiusNew, area);
