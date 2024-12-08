console.clear()

// event - onload(), onerror()
// property - response, responseText, responseType, responseURL, statusText
// function - open(), send(), setRequestHeader()

const getData = () => {
  
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts')
  
  xhr.onload = () => {
    let data = xhr.response
    console.log(data);
  }

  xhr.send()

}


getData()