import bgAbout from "../../assets/bgAbout.jpg"
function About() {
    return(
        <div className="container-about">
            <div className="bgAbout">
                <img src={bgAbout} alt=""/>
            </div>
            <ul>
                <li>
                    <h2>Fiabilité</h2>
                    <p> blablabla</p>
                </li>
                <li>
                    <h2>Respect</h2>
                    <p>blablabla</p>
                </li>
                <li>
                    <h2>Service</h2>
                    <p>bsddfsdf</p>    
                </li>
                <li>
                    <h2>Responsabilité</h2>
                    <p>dccdcdcd</p>
                </li>
            </ul>
        </div>
    )
}

export default About