console.clear()
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
})
  .then((res) => {
    if(!res.ok){
      const message = `Error: ${res.status}`
      throw new Error (message)
    }
    return res.json()
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err))