console.clear()

const makeRequest = async (config) => {

  return await axios(config)
}

const createData = () => {
  makeRequest({
    url : 'https://jsonplaceholder.typicode.com/posts',
    method: 'post',
    data : JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
  })
  .then((res) =>  console.log(res)  )
  .catch((err) =>  console.log(err)  )
}
createData()

// const getData = () => {
//   makeRequest('https://jsonplaceholder.typicode.com/posts')
//   .then((res) =>  console.log(res)  )
//   .catch((err) =>  console.log(err)  )
// }
// getData()

