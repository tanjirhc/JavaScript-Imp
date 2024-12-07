console.log("welcome");

// how to create a promise- pending, resolve, reject
const promise1 = new Promise((resolve, reject) =>{

  let completedPromise = false;
  if(completedPromise) {
    resolve("completed promise 1")
  } else{
    reject(new Error("Not completed promise 1"))
  }

})

// console.log(promise1);

promise1
.then(res => {
  console.log(res);
})
.catch(err => {
  console.log(err.message);
})

console.log("end");
