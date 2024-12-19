const Card = ({name, username, email, website, className = ''}) => {

    const classes = `card ${className}`

    return (
        <div className={classes} >
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{username}</p>
                <p className="card-text">{email}</p>
                <p className="card-text">{website}</p>
            </div>
        </div>
    )
}

export default Card