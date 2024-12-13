console.clear()

axios
  .put('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id:1,
      title: 'fooma',
      body: 'barma',
      userId: 1,
    }),
    
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err))