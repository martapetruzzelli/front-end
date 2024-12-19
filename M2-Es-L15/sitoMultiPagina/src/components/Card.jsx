import { Link } from "react-router"
import { useParams } from 'react-router'


// eslint-disable-next-line react/prop-types
const Card = ({title, body, className = ''}) => {

    const { id } = useParams()  

    const classes = `card ${className}`

    return (<>
            <div className={classes} >
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                    <Link to={`/post/${id}`}>Vedi post</Link>
                </div>
            </div>
    </>)
}

export default Card