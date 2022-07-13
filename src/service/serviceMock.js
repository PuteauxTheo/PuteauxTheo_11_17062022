import logements  from '../data/logements.json'

function getLogement(id){
    const data = logements.find( logement => logement.id === id.logementID )
    // const data = logements.find( logement => logement.id === "c67ab8a7")
    return data;

}

// function getAllLogement(){
//     const allLogement = { logements }
//     return allLogement
// }

// const getData = async (id) =>{
//     // switch (id) {
//     //     case (id == null): return getAllLogement();
//     //     case (id != null): return getLogement(id);
//     //     default: return (id==null);
//     // }   
//     return getLogement(id);
// }

async function getData(id){
    // switch (id) {
    //     case (id == null): return getAllLogement();
    //     case (id != null): return getLogement(id);
    //     default: return (id==null);
    // }   
    return getLogement(id);
}
export default getData