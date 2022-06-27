import bgAbout from "../../assets/bgAbout.jpg"
import topArrow from "../../assets/topArrow.svg"
import botArrow from "../../assets/botArrow.svg"
import { useState } from "react"

function About() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return(
        <div className="container-about">
            <div className="container-about-bgAbout">
                <img src={bgAbout} alt=""/>
            </div>
            <ul className="container-about-list">
                <li className="container-about-list-content">
                    <div onClick={toggle} className="container-about-list-content-title">
                        <h2>Fiabilité</h2>
                        { isOpen ? <img src={topArrow} alt=""/> : <img src={botArrow} alt=""/>}
                    </div>
                    {isOpen && 
                        <div className="container-about-list-content-text">                        
                            <p>vfvfvfvfv</p>
                        </div>       
                    } 
                </li>
                <li className="container-about-list-content">
                    <div onClick={toggle} className="container-about-list-content-title">
                        <h2>Respect</h2>
                        { isOpen ? <img src={topArrow} alt=""/> : <img src={botArrow} alt=""/>}
                    </div>
                    {isOpen && 
                        <div className="container-about-list-content-text">                        
                            <p>vfvfvfvfv</p>
                        </div>       
                    } 
                </li>
                <li className="container-about-list-content">
                    <div onClick={toggle} className="container-about-list-content-title">
                        <h2>Service</h2>
                        { isOpen ? <img src={topArrow} alt=""/> : <img src={botArrow} alt=""/>}
                    </div>
                    {isOpen && 
                        <div className="container-about-list-content-text">                        
                            <p>vfvfvfvfv</p>
                        </div>       
                    } 
                </li>
                <li className="container-about-list-content">
                    <div onClick={toggle} className="container-about-list-content-title">
                        <h2>Responsabilité</h2>
                        { isOpen ? <img src={topArrow} alt=""/> : <img src={botArrow} alt=""/>}
                    </div>
                    {isOpen && 
                        <div className="container-about-list-content-text">                        
                            <p>vfvfvfvfv</p>
                        </div>       
                    } 
                </li>        
            </ul>
        </div>
    )
}

export default About