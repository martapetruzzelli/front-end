import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'
import Post from './pages/Post'
import LocationInfo from './components/LocationInfo';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {

  return (
    <>
     <BrowserRouter>
      <Navbar></Navbar>
        <main>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/post/:id' element={<Post/>}></Route>
            <Route path='/*' element={<NotFound />}></Route>
          </Routes>
        </main>
        <LocationInfo></LocationInfo>
        <footer></footer>
     </BrowserRouter>
    </>
  )
}

export default App
