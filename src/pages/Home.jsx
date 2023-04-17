import BooksShowecase from '../components/BooksShowCase'
import InputBox from '../components/InputBox'

function Home() {
  return (
    <div className="w-full p-8 min-h-screen bg-showcase bg-cover relative">
      <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50 absolute top-0 left-0"></div>
      <InputBox />
      <BooksShowecase />
    </div>
  )
}
export default Home
