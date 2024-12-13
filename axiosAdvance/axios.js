console.clear()

axios
  .patch('https://jsonplaceholder.typicode.com/posts/1', {
    
    body: JSON.stringify({

      body: 'barmaeleven',
    }),
    
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err))