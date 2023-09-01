import axios from 'axios'

const baseUrl = '/api/persons'

export const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then((res) => res.data)
}

export const create = (newPerson) => {
  const req = axios.post(baseUrl, newPerson)
  return req.then((res) => res.data)
}

export const remove = (id) => {
  const req = axios.delete(`${baseUrl}/${id}`)
  return req.then((res) => res.data)
}

export const replace = (id, newPerson) => {
  const req = axios.put(`${baseUrl}/${id}`, newPerson)
  return req.then((res) => res.data)
}
