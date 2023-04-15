import axios from 'axios'

const API_URL = 'https://www.googleapis.com/books/v1/volumes?q='

const getSearchValue = async (query) => {
  try {
    const res = await axios.get(
      `${API_URL}${query}&maxResults=20&key=${
        import.meta.env.VITE_REACT_API_URL
      }`
    )
    return res
  } catch (error) {
    throw new Error(error)
  }
}

export { getSearchValue }
