import axios from 'axios'
const http = axios.create({
  baseURL: 'https://api.github.com/'
})

export const LoadRepository = (fullname) => axios.all([
  http.get(`repos/${fullname}`),
  http.get(`repos/${fullname}/commits`)
])
