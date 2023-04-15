import { useSelector } from 'react-redux'

function BooksShowecase() {
  const books = useSelector((state) => state.books.items)

  return (
    <div className="w-full p-8 min-h-screen bg-[url('https://assets.weforum.org/article/image/JMF96ETfn1kSViVnUou1Z0XIDwWcPpT5mrPc7-ytpAc.jpg')] bg-cover relative">
      {/* <h2 className="font-bold text-4xl text-center mb-8 uppercase text-white tracking-wider">
        Books
      </h2> */}
      <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50 absolute top-0 left-0"></div>

      <div className="flex flex-wrap gap-8 justify-center z-50 relative">
        {books.length > 0 ? (
          books?.map((book, i) => {
            console.log(book.volumeInfo.authors)
            return (
              <div
                key={i}
                className="bg-white hover:scale-110 h-full cursor-pointer transition-all"
              >
                <img
                  src={
                    book?.volumeInfo?.imageLinks?.thumbnail
                      ? book?.volumeInfo?.imageLinks?.thumbnail
                      : 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
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
            )
          })
        ) : (
          <div>No Search Not Yet</div>
        )}
      </div>
    </div>
  )
}
export default BooksShowecase
