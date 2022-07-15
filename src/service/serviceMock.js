import logements  from '../data/logements.json'

function getLogement(id){
    const data = logements.find( logement => logement.id.toString() === id.logementID )
    const test = {data};
    return test;
}

// function getAllLogement(){
//     const allLogement = logements
//     return allLogement
// }


const getData = async (id) => {
    // switch (id) {
    //     case (id == null): return getAllLogement();
    //     case (id != null): return getLogement(id);
    //     default: return getAllLogement();
    // }   
    return getLogement(id);
}
export default getData