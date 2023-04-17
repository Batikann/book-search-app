import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const API_URL = 'https://www.googleapis.com/books/v1/volumes?q='

export const fetchBooks = createAsyncThunk('fetchBooks', async (query) => {
  const { data: res } = await axios.get(
    `${API_URL}${query}&maxResults=20&key=${import.meta.env.VITE_REACT_API_URL}`
  )
  const data = await res.items
  return data
})
