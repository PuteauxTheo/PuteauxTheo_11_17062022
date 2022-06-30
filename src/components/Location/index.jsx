import { Link } from "react-router-dom"
import logement from "../../data/logements.json"

function Location() {
    return (
        <div className="container-location">
            { logement.map( (logement) => (
                <article className="container-location-article" key={logement.id}>
                    <Link to={`location/${logement.id}`} className="container-location-link">
                        <img src={logement.cover} className="container-location-link-cover" alt=""/>
                        <div className="container-location-link-gradient"></div>
                        <h3 className="container-location-link-title">{logement.title}</h3>
                    </Link>
                </article>
            ))}        
        </div>
        
    )
}

export default Location