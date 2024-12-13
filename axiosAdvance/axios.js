console.clear()

const makeRequest = (config) => {

  return axios(config)
}

const getData = () => {
  makeRequest('https://jsonplaceholder.typicode.com/posts')
  .then((res) =>  console.log(res)  )
  .catch((err) =>  console.log(err)  )
}

getData()
