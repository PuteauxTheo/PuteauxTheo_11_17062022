import { Link } from "react-router-dom"

function Error404() {
    return( 
        <div className="container-error404"> 
            <h1>404</h1>
            <p className="message-error">Oups! La page que vous demandez n'existe pas.</p>
            <p className="button-back-home"><Link to="/" >Retourner a la page d'acceuil</Link></p>
        </div>
    )
}


export default Error404