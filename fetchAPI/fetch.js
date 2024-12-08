console.clear()

const makeRequest = async (url, config) =>{
  const res = await fetch(url, config);
  if(!res.ok){
    const message = `Error : ${res.status}`
    throw new Error(message)
  }
  const data = await res.json()
  return data
}

const deleteData = () =>{
  makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
    method: 'DELETE',
  })
  
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
}

deleteData()

// const updateData = () =>{
//   makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'PATCH',
//     body: JSON.stringify({
//     title: 'Dhaka Soft',

//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
//   })
  
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
// }

// updateData()

// const sendData = () =>{
//   makeRequest('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
//   })
  
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
// }

// sendData()

// const getData = () =>{
//   makeRequest('https://jsonplaceholder.typicode.com/posts')
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
// }

// getData()