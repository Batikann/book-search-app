import { useSelector } from 'react-redux'

//Burada redux storedan details sayfası için gelen id ye göre verimizi diziden çekiyoruz.
export const useBook = (id) =>
  useSelector((state) => state.books.items.filter((book) => book.id === id)[0])
