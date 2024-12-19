import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'

const Post = () => {

  const [post, setPost] = useState(null)
  const { id } = useParams()

  const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

  const getPost = async () =>{
    const response = await fetch(`${apiUrl}/${id}`)

    const data = await response.json()

    setPost(data)
  }

  useEffect(()=>{
    getPost()
  },[id])
  

  return (<>
    {post && (<>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
            </>)
    }
  </>)
}

export default Post