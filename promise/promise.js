console.log("welcome");

// how to create a promise- pending, resolve, reject
const promise1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('completed promise 1')
    }, 2000)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('completed promise 2')
  }, 1000)
})

// console.log(promise1);

Promise.race([promise1, promise2])
.then((res) => console.log(res))

console.log("end");
