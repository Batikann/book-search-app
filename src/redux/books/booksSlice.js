import { createSlice } from '@reduxjs/toolkit'
import { fetchBooks } from '../services/bookServices'

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    items: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false
      state.items = action.payload
    })
  },
})

export const { addBooks } = booksSlice.actions
export default booksSlice.reducer
