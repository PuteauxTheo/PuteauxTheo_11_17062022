import { Link } from "react-router-dom"

function Location() {
    return (
        <div className="container-location">
            <article className="container-location-article">
                <Link to="location">
                    <h3 className="container-location-article-title"> Titre de la Location</h3>
                </Link>
            </article>
            <article className="container-location-article">
                <Link to="/location">
                    <h3 className="container-location-article-title"> Titre de la Location</h3>
                </Link>            
            </article>
            <article className="container-location-article">
                <Link to="/location">
                    <h3 className="container-location-article-title"> Titre de la Location</h3>
                </Link>
            </article>
        </div>
        
    )
}

export default Location