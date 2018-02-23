// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0;

  function incrementCount() {
    return count += 1;
  }

  return incrementCount;
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let count = 0;

  const increment = () => count += 1;
  const decrement = () => count -= 1;

  return {
    increment,
    decrement,
  };
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;

  const invokeCb = (...options) => {
    if (count < n) {
      count += 1;
      return cb(...options);
    }

    return null;
  };

  return invokeCb;
};

/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.

  const cache = {};

  const invokeCb = (...options) => {
    const argument = options[0];

    if (Object.prototype.hasOwnProperty.call(cache, argument)) {
      return cache[argument];
    }

    const result = cb(argument);
    cache[argument] = result;
    return result;
  };

  return invokeCb;
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
