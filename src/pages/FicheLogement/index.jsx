//import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Caroussel from '../../components/Caroussel';
import InfoLogement from '../../components/InfoLogement'
// import logements from '../../data/logements.json';
import getData from '../../service/serviceMock.js';
import React, { useEffect, useState } from 'react';

function FicheLogement() {

    const id = useParams();

    
    const [dataLogement, setDataLogement] = useState();

    useEffect(() => {
        getData(id)
            .then(data => {setDataLogement(data)
                console.log(data)})
            .catch(err => console.log("erreur lors de la recuperation des données", err))
    },[id]);

    if(!dataLogement){
        return null;
    }


    return (
        <div className='container-ficheLogement'>  
            <div className='caroussel'>
                <Caroussel>
                    {
                        dataLogement.data.pictures.map( (picture) => (
                            <img key={picture} src={picture} alt="caroussel" />
                    ))}
                </Caroussel> 
            </div>              
                       
            <InfoLogement logement={ dataLogement.data }/>
            
        </div>
    )
}

export default FicheLogement