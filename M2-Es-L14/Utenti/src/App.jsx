import { useState, useEffect } from 'react'
import Card from './component/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    
    try{

      const response = await fetch(apiUrl)

      if(!response.ok){
        throw new Error(`Errore: ${response.status}`)
      }

      const data = await response.json()

      setUsers(data)

    }catch(err){

      console.log(err.message);
      setIsError(true)

    }finally{

      setIsLoading(false)

    }

  }

  useEffect(() => {

    setTimeout(()=>{
      getUsers()
    }, 3000)

  }, [])

  return (
    <>

    <div className="container">

      <h1>Lista degli Utenti</h1>

      <div className="row">
        { (!isLoading && !isError) && users.map(user => {
            return (
              <div key={`userCard-${user.id}`} className="col-12 col-md-6 col-lg-4">
                <Card {...user} className='my-2'></Card>
              </div>
            )
          })
        }
      </div>

    </div>
    <div className="container">
        {isLoading && <div className='alert alert-success'>Caricamento in corso</div>}
        {(!isLoading && isError) && <div className="alert alert-warning">Si è verificato un errore, per favore riprova più tardi</div> }
      </div>
    </>
  )
}

export default App
