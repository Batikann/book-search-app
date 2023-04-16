import { useSelector } from 'react-redux'

export const useBook = (id) =>
  useSelector((state) => state.books.items.filter((book) => book.id === id)[0])
