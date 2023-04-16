import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BookDetails from './pages/BookDetails'
import Home from './pages/Home'
import Page404 from './pages/Page404'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="book/:id" element={<BookDetails />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
