import { createSlice } from '@reduxjs/toolkit'
import { fetchBooks } from '../services/bookServices'

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    items: [],
    isLoading: false,
  },
  reducers: {
    loadingChange: (state, action) => {
      state.isLoading = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {})
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false
      state.items = action.payload
    })
  },
})

export const { addBooks, loadingChange } = booksSlice.actions
export default booksSlice.reducer
