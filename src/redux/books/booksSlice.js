import { createSlice } from '@reduxjs/toolkit'

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    items: [],
  },
  reducers: {
    addBooks: (state, action) => {
      state.items = action.payload
    },
  },
})

export const { addBooks } = booksSlice.actions
export default booksSlice.reducer
