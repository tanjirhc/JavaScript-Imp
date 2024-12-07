// callback and higher order function

function square(x){
  console.log(`square of ${x}: ${x * x}`);
}

// const y = square
// y(5)

function higherOrderFunction(num, callback) {

}

higherOrderFunction(6, square)