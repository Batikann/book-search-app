import { useSelector } from 'react-redux'
import Book from '../Book'

function BooksShowecase() {
  const load = useSelector((state) => state.books.isLoading)
  const items = useSelector((state) => state.books.items)
  console.log(load)
  return (
    <div className="w-full p-8 min-h-screen bg-showcase bg-cover relative">
      <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50 absolute top-0 left-0"></div>

      <Book />
    </div>
  )
}
export default BooksShowecase
