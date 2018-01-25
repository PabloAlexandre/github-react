import axios from 'axios'
const http = axios.create({
  baseURL: 'https://api.github.com/'
})

export const GetUser = (username) => axios.all([
  http.get(`users/${username}`),
  http.get(`users/${username}/repos`)
])
