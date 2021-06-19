const fizzBuzz = (start = 1, end = 10) => {
  for (let i = start; i <= end; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('fizzBuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(1, 20);
