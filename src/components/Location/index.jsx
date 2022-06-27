import { Link } from "react-router-dom"

function Location() {
    return (
        <div className="container-location">
            <article className="article-location">
                <Link to="location">
                    <h3 className="title-location"> Titre de la Location</h3>
                </Link>
            </article>
            <article className="article-location">
                <Link to="/location">
                    <h3 className="title-location"> Titre de la Location</h3>
                </Link>            
            </article>
            <article className="article-location">
                <Link to="/location">
                    <h3 className="title-location"> Titre de la Location</h3>
                </Link>
            </article>
        </div>
        
    )
}

export default Location