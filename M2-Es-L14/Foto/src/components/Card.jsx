const Card = ({title, thumbnailUrl, className = ''}) => {

    const classes = `card ${className}`

    return (
        <div className={classes} >
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <img className="card-text" src={thumbnailUrl}></img>
            </div>
        </div>
    )
}

export default Card