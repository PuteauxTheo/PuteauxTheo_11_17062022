import { useParams } from 'react-router-dom'
// import { useState, useEffect } from 'react'
import Caroussel from '../../components/Caroussel';
import InfoLogement from '../../components/InfoLogement'
import logements from '../../data/logements.json'

function FicheLogement() {

    // const [dataLogements, setDataLogements] = useState([]);
    // console.log(dataLogements);     
    // const getDataLogements = () =>{
    //     fetch('logement.json' ,{headers: 
    //         {'Content-Type': 'application/json','Accept': 'application/json'}
    //     })
    //         .then((response) => response.json())
    //         .then((json) => setDataLogements(json))
    //         .catch((error) => console.error(error))
    // } 

    // useEffect(() => {
    //     getDataLogements()
    // }, []);

    let id = useParams();
    // console.log(dataLogements.length)
    // const logement = dataLogements.find( logement => logement.id === id.logementID )
    const logement = logements.find( logement => logement.id === id.logementID )
    return (
        <div className='container-ficheLogement'>  
            <div className='caroussel'>
                <Caroussel>
                    {
                        logement.pictures.map( (picture) => (
                            <img key={picture} src={picture} alt="caroussel" />
                    ))}
                </Caroussel> 
            </div>              
                       
            <InfoLogement logement={ logement }/>
            
        </div>
    )
}

export default FicheLogement