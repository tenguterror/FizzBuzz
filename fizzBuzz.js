const fizzBuzz = (start = 1, end = 10) => {
  for (let i = start; i <= end; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      return `fizzBuzz`;
    } else if (i % 3 === 0) {
      return `fizz`;
    } else if (i % 5 === 0) {
      return `Buzz`;
    } else {
      return i;
    }
  }
};

console.log(fizzBuzz(3, 10));
