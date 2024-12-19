import { useState } from 'react'
import { useEffect } from 'react'
import Card from '../components/Card'


const Blog = () => {

    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

    const [posts, setPosts] = useState(null)

    const getPosts = async () => {

        try{
            const response = await fetch(`${apiUrl}`)

            if(!response.ok){
                throw new Error(`Errore: ${response.status}`)
            }

            const data = await response.json()

            setPosts(data)
        }catch(err){
            console.error(err.message)
        }
    }

    useEffect(()=>{
        getPosts()
      },[])

  return (<>
    {posts && (<>
        <div className="container">
            <h1>Blog</h1>
            <div className="row">
                {posts.map(post => {
                    return(
                        <div key={`postCard-${post.id}`} className="col-12 col-md-6 col-lg-4">
                            <Card {...post} className='my-2'></Card>
                        </div>
                    )
                    })
                }
            </div>
        </div>
    </>)}
    </>)
}

export default Blog