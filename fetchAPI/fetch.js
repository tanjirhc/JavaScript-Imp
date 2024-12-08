console.clear()
fetch('https://jsonplaceholder.typicode.com/posts/101')
  .then((res) => {
    if(!res.ok){
      const message = `Error: ${res.status}`
      throw new Error (message)
    }
    return res.json()
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err))