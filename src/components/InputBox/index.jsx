import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { fetchBooks } from '../../redux/services/bookServices'
import { loadingChange } from '../../redux/books/booksSlice'

function InputBox() {
  const [val, setVal] = useState('')
  const dispatch = useDispatch()
  const inputValHandler = (e) => {
    setVal(e.target.value)
  }

  //fetchbooks methodu redux klasörü içinde ki bookServicesden geliyor.Burda ki amaç kulanıcıdan alınan veri ile apiye istek atıyoruz ve loading durumu true ya geçiyor ve loading ekranını gösteriyoruz.
  //Boş değer gelmemesi için alert ekledim
  const getApiVal = async (e) => {
    e.preventDefault()
    if (val) {
      dispatch(fetchBooks(val, 20))
      dispatch(loadingChange(true))
      setVal('')
    } else {
      alert('Lütfen Değer Giriniz!!')
    }
  }
  return (
    <div>
      <div className="w-full h-96 object-center bg-cover flex flex-col px-8 justify-center items-center gap-y-9 relative z-50 ">
        <h1 className="text-4xl text-white uppercase font-bold tracking-wider">
          Search Book Google Database
        </h1>
        <form className="w-full flex items-center gap-x-7 justify-center">
          <input
            className=" h-14 outline-none rounded-md px-4 w-[700px] text-sm md:text-xl hover:scale-105"
            type="text"
            placeholder="Search author name or book name...."
            value={val}
            onChange={inputValHandler}
          />
          <button
            onClick={getApiVal}
            className="bg-indigo-500 text-white h-14 px-8 rounded-md hover:bg-indigo-700 hover:transition-all hover:scale-125"
          >
            <AiOutlineSearch size={22} />
          </button>
        </form>
      </div>
    </div>
  )
}
export default InputBox
