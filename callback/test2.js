// callback and higher order function

const taskOne = (callback) =>{
  console.log('Task1');
  callback()
}

const taskTwo = (callback) =>{
  setTimeout(() => {
    console.log('Task2. Data Loading');
    callback()
  }, 3000)
}
const taskThree = () =>{
  console.log('Task3');
}
const taskFour = () =>{
  console.log('Task4');
}
const taskFive = () =>{
  console.log('Task5');
}

taskOne(function f1(){
  taskTwo(function f2(){
    taskThree()
  })
})
