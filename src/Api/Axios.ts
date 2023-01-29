import axios from 'axios'
import { baseURL, xApiKey } from './Config'

export const instance = axios.create({
  baseURL: baseURL,
  headers: {
    'x-api-key': xApiKey
  },
  //Necessary to avoid cors error
  withCredentials: false
})
