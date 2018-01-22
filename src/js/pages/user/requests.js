import axios from 'axios'
const http = axios.create({
  baseURL: 'https://api.github.com/'
})

export const GetUser = (username) => http.get(`users/${username}`)
export const GetRepositories = (username) => http.get(`users/${username}/repos`)
