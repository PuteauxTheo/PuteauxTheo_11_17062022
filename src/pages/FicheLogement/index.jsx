import { useParams } from 'react-router-dom'
import bgFicheLogement from '../../assets/bgFicheLogement.jpg'
import InfoLogement from '../../components/InfoLogement'
import logement from '../../data/logements.json'

function FicheLogement() {

    let id = useParams();

    console.log(id)

    const location = logement.find( location => location.id === id.locationID )
    return (
        <div className='container-ficheLogement'>
            <div className='bgFicheLogement'> 
                <img src={bgFicheLogement} alt="salon"/>
            </div>
            <InfoLogement location={ location }/>
            
        </div>
    )
}

export default FicheLogement