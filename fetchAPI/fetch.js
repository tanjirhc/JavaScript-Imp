console.clear()
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((res) =>{
    console.log(res);
  })