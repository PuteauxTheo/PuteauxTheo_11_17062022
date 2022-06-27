import bgFicheLogement from '../../assets/bgFicheLogement.jpg'
import InfoLogement from '../../components/InfoLogement'

function FicheLogement() {
    return (
        <div className='container-ficheLogement'>
            <div className='bgFicheLogement'> 
                <img src={bgFicheLogement} alt="salon"/>
            </div>
            <InfoLogement/>
            
        </div>
    )
}

export default FicheLogement