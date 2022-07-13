//import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
// import { useState } from 'react';
import Caroussel from '../../components/Caroussel';
import InfoLogement from '../../components/InfoLogement'
import logements from '../../data/logements.json';
// import getData from '../../service/serviceMock.js';
// import { useEffect } from 'react';

function FicheLogement() {

    let id = useParams();
    //let navigate = useNavigate();

    const dataLogement = logements.find( logement => logement.id === id.logementID )
    // const [dataLogement, setDataLogement] = useState();
    // useEffect(() => {
    //     getData(id)
    //         .then(data => setDataLogement(data))
    //         .catch(err => console.log("erreur lors de la recuperation des données", err))
    // })

    return (
        <div className='container-ficheLogement'>  
            <div className='caroussel'>
                <Caroussel>
                    {
                        dataLogement.pictures.map( (picture) => (
                            <img key={picture} src={picture} alt="caroussel" />
                    ))}
                </Caroussel> 
            </div>              
                       
            <InfoLogement logement={ dataLogement }/>
            
        </div>
    )
}

export default FicheLogement