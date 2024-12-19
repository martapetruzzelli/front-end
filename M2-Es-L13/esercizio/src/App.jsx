import { useState } from 'react'
import Header from './Header'
import './App.css'
import Footer from './Footer'
// import 'bootstrap/dist/css/cootstrap.min.css'


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <main>
        <div className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cupiditate voluptatem fugit eaque facere amet nihil excepturi a voluptatibus debitis similique, illum nam! Ab labore quae nihil impedit architecto odit?</div>
        <img className="" src="" alt="" />
        
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
