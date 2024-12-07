console.log("welcome");

// how to create a promise- pending, resolve, reject
const promise1 = new Promise((resolve, reject) =>{

  let completedPromise = true;
  if(completedPromise) {
    resolve("completed promise 1")
  } else{
    reject(new Error("Not completed promise 1"))
  }

})

const promise2 = new Promise((resolve, reject) => {
  resolve('completed promise 2')
})

// console.log(promise1);

Promise.all([promise1, promise2])
.then(([res1, res2]) => console.log(res1, res2))

console.log("end");
