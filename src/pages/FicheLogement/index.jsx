import { useParams } from 'react-router-dom'
import Caroussel from '../../components/Caroussel';
import InfoLogement from '../../components/InfoLogement'
import logement from '../../data/logements.json'

function FicheLogement() {

    let id = useParams();

    const location = logement.find( location => location.id === id.locationID )
    return (
        <div className='container-ficheLogement'>  
            <div className='caroussel'>
                <Caroussel>
                    {
                        location.pictures.map( (picture) => (
                            <img key={picture} src={picture} alt="caroussel" />
                    ))}
                </Caroussel> 
            </div>              
                       
            <InfoLogement location={ location }/>
            
        </div>
    )
}

export default FicheLogement