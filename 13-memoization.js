// Here’s what we’ll cover in this article:
// what is Memorization ?
// Importance of Memorization ?
// When to use ?
// Code example

//* Dynamic Progamming [DP]
// Memoizing in simple terms means memorizing or storing in memory. A memoized function is usually faster because if the function is called subsequently with the previous value(s), then instead of executing the function, we would be fetching the result from the cache.

const clumsysquare = (num) => {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      result++;
    }
  }
  return result;
};

//   console.time("First call");
//   console.log(clumsysquare(9467));
//   console.timeEnd("First call");

//   // use the same value two times
//   console.time("Second call");
//   console.log(clumsysquare(9467));
//   console.timeEnd("Second call");

//   console.time("Third call");
//   console.log(clumsysquare(9467));
//   console.timeEnd("Third call");

// memorization [DP]
// 1- calculate the first time, store it
// 2- Re-use the value

const memoize = (func) => {
  // create the results object to store the memory
  const results = {};
  return (...args) => {
    const argsKey = JSON.stringify(args);
    // if this value is not present into the resultObject Then we have to store this value into the memory
    if (!results[argsKey]) {
      results[argsKey] = func(...args);
    }
    return results[argsKey];
  };
};

const clumsysquare1 = memoize((num) => {
  // run loop (inner loop + out loop)
  let result = 0;
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      result++;
    }
  }
  console.log(result);
  return result;
});

console.time("First call");
console.log(clumsysquare1(11111));
console.timeEnd("First call");

// use the same value two times
console.time("Second call");
console.log(clumsysquare1(100));
console.timeEnd("Second call");

console.time("Third call");
console.log(clumsysquare1(100));
console.timeEnd("Third call");
