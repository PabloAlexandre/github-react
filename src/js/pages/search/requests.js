import axios from 'axios'
import { qs } from 'misc/helpers'
const http = axios.create({
  baseURL: 'https://api.github.com/'
})

export const SearchUser = (term, page) => {
  return http.get(`search/users?${qs({q: term, page})}`)
}
