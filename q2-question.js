// plz code fizzBuzz function here
function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log('FizzBuzz');
    } else if (n % 3 === 0) {
        console.log('Fizz');
    } else if (n % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(n);
    }
}
fizzBuzz(9); //Fizz
fizzBuzz(45); //FizzBuzz
fizzBuzz(99); //Fizz
fizzBuzz(100); //Buzz