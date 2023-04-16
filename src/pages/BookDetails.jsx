import { Link, useParams } from 'react-router-dom'
import { useBook } from '@/utils/BookDetails'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import noImage from '@/imgs/noImage.webp'

function BookDetails() {
  const { id } = useParams()
  const bookDetails = useBook(id)
  return (
    <div className="bg-slate-500 min-h-screen p-4 w-full flex justify-center items-center flex-col relative">
      <Link to="/" className="absolute top-4 left-4">
        <AiOutlineArrowLeft
          size={35}
          className="bg-white text-indigo-600 font-bold w-20 p-1 hover:scale-125 hover:bg-indigo-800 hover:text-white rounded-md "
        />
      </Link>
      <div className="flex items-center justify-center gap-8 bg-white p-7 max-w-4xl rounded-md shadow-lg cursor-pointer lg:hover:scale-105">
        <div className="left-side flex-[30%]">
          <img
            src={
              bookDetails?.volumeInfo?.imageLinks?.thumbnail
                ? bookDetails?.volumeInfo?.imageLinks?.thumbnail
                : noImage
            }
            alt=""
            className="bg-cover w-64 h-72 object-cover"
          />
          <a
            href={bookDetails.volumeInfo.previewLink}
            className="uppercase flex justify-center mt-2 hover:underline"
            target="_blank"
          >
            Preview
          </a>
        </div>
        <div className="right-side flex-[70%] flex flex-col gap-y-7">
          <h2 className="text-3xl uppercase font-bold">
            {bookDetails.volumeInfo.title}
          </h2>
          <div className="overflow-y-scroll h-44">
            {bookDetails.volumeInfo.description
              ? bookDetails.volumeInfo.description
              : 'Not Found Description'}
          </div>
          <div className="flex justify-between">
            <div>
              <p className="font-bold text-md">Çıkış Tarihi</p>
              <p>{bookDetails.volumeInfo.publishedDate}</p>
            </div>
            <div>
              <p className="font-bold text-md">Yayıncı</p>
              <p>
                {bookDetails.volumeInfo.publisher
                  ? bookDetails.volumeInfo.publisher
                  : 'Not Found'}
              </p>
            </div>
            <div>
              <p className="font-bold text-md">Puan</p>
              <p>{`${
                bookDetails.volumeInfo.ratingsCount
                  ? bookDetails.volumeInfo.ratingsCount
                  : '0'
              }/5`}</p>
            </div>
            <div>
              <p className="font-bold text-md">Sayfa Sayısı</p>
              <p>{bookDetails.volumeInfo.pageCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BookDetails
