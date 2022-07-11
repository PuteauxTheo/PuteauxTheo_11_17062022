import logements from '../data/logements.json'

function getLogement(id){
    const logement = logements.find( logement => logement.id === id.logementID )
    return logement

}

function getAllLogement(){
    const allLogement = { logements }
    return allLogement
}

const getData = async(id) =>{
    switch (id) {
        case (id == null): return getAllLogement();
        case (id != null): return getLogement(id);
        default: return (id==null);
    }   
        
}

export default getData