export const getRecords = () => {
    const URL = 'http://localhost:3001/records'
    return fetch(URL)
}

export const getOneRecord = (id) => {
    const URL = `http://localhost:3001/records/${id}`
    return fetch(URL)
}

export const deleteRecord = (id) => {
    const URL = `http://localhost:3001/records/${id}`
    return fetch(URL, {method: 'DELETE'})
}

export const createRecord = (inputDoc) => {
    const URL = `http://localhost:3001/records`
    return fetch(URL, {body:JSON.stringify(inputDoc), method: 'POST',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(res=>res.json())
}

export const updateRecord = (inputDoc,id) => {
    const URL = `http://localhost:3001/records/${id}`

    return fetch(URL, {body: JSON.stringify(inputDoc), method: 'PUT',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(res=>res.json())
}
