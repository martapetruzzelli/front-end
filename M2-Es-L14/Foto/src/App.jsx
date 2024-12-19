import { useState, useEffect } from 'react'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getPhotos = async () => {

    try{

      const response = await fetch(apiUrl)

      if(!response.ok){
        throw new Error(`Errore: ${response.status}`)
      }

      const data = await response.json()

      setPhotos(data)

    }catch(err){

      console.log(err.message);
      setIsError(true)

    }finally{

      setIsLoading(false)

    }

  }

  useEffect(() => {

    setTimeout(()=>{
      getPhotos()
    }, 3000)

  }, [])

  return (
    <>
      <div className="container">
        <h1>Le foto</h1>
        <div className="row">
          { (!isLoading && !isError) && photos.map(photo => {
              return(
                <div key={`photoCard-${photo.id}`} className="col-12 col-md-6 col-lg-4">
                  <Card {...photo} className='my-2'></Card>
                </div>
              )
            })
          }

        </div>
      </div>
      <div className="container">
        {isLoading && <div className='alert alert-success'>Caricamento</div>}
        {(!isLoading && isError) && <div className="alert alert-warning">Si è verificato un errore</div>}
      </div>
    </>
  )
}

export default App
