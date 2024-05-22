import axios from 'axios'
const baseURL = 'https://events-list-server-private.onrender.com'

export const $host = axios.create({
  baseURL,
})

