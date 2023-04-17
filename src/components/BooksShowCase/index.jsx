import { useSelector } from 'react-redux'
import Book from '../Book'

function BooksShowecase() {
  const load = useSelector((state) => state.books.isLoading)
  console.log(load)
  return (
    <div className="w-full p-8 min-h-screen bg-showcase bg-cover relative">
      {/* <h2 className="font-bold text-4xl text-center mb-8 uppercase text-white tracking-wider">
        Books
      </h2> */}
      <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50 absolute top-0 left-0"></div>

      <div className="flex flex-wrap gap-8 justify-center z-50 relative">
        <Book />
      </div>
    </div>
  )
}
export default BooksShowecase
