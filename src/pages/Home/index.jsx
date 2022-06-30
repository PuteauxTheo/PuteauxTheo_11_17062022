import Location from "../../components/Location"
import bgHome from "../../assets/bgHome.jpg"

function Home() {
    return( 
        <div className="container-home">
            <div className="container-home-bannerHome">
                <img src={bgHome} alt="mer avec des rochers "/>
                <p className="container-home-bannerHome-text">Chez vous, partout et ailleurs</p>
            </div>
            <Location/>
        </div>
    )
}

export default Home