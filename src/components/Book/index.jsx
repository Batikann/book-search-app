import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import noImage from '@/imgs/noImage.webp'
import { LoadingPosts } from '../Skeleton'

function Book() {
  const books = useSelector((state) => state.books.items)
  const load = useSelector((state) => state.books.isLoading)
  console.log(load)
  return (
    <>
      <div className="flex flex-wrap gap-8 justify-center z-50 relative">
        {!load ? (
          books?.map((book, i) => {
            return (
              <Link key={i} to={`book/${book.id}`}>
                <div className="bg-white hover:scale-110 h-full cursor-pointer transition-all">
                  <img
                    src={
                      book?.volumeInfo?.imageLinks?.thumbnail
                        ? book?.volumeInfo?.imageLinks?.thumbnail
                        : noImage
                    }
                    alt=""
                    className="bg-cover w-64 h-72"
                  />
                  <div className="p-4">
                    <p className="font-bold text-2xl">
                      {book?.volumeInfo?.title.length > 16
                        ? `${book?.volumeInfo?.title.slice(0, 14)}...`
                        : book?.volumeInfo?.title}
                    </p>
                    <p className="text-lg overflow-x-hidden">
                      {book?.volumeInfo?.authors
                        ? book?.volumeInfo?.authors[0].slice(0, 18)
                        : 'Not Found'}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })
        ) : (
          <LoadingPosts />
        )}
      </div>
    </>
  )
}
export default Book
