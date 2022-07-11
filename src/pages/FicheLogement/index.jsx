import { useParams } from 'react-router-dom'
import { useState } from 'react';
// import { useState, useEffect } from 'react'
import Caroussel from '../../components/Caroussel';
import InfoLogement from '../../components/InfoLogement'
import getData from '../../service/serviceMock';

function FicheLogement() {

    let id = useParams();
    const [dataLogement, setDataLogements] = useState();
    
    getData(id)
    .then(data => {
        getData(id)
            .then(data => setDataLogements)
            .catch(err => console.log("erreur lors de la recuperation des données", err))
    })
    console.log(dataLogement)
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