import Location from "../../components/Location"
import bgHome from "../../assets/bgHome.jpg"

function Home() {
    return( 
        <div className="container-home">
            <div className="bgHome">
                <img src={bgHome} alt="mer avec des rochers "/>
                <p className="bgHome-text">Chez vous, partout ailleurs</p>
            </div>
            <Location/>
        </div>
    )
}

export default Home