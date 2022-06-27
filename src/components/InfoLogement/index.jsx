import profile from "../../assets/profile.png"
import topArrow from "../../assets/topArrow.svg"
import botArrow from "../../assets/botArrow.svg"
import starFull from "../../assets/starFull.svg"
import starEmpty from "../../assets/starEmpty.svg"
import { useState } from "react"

function InfoLogement() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return (
        <div className="container-infoLogement">
            <div className="container-infoLogement-presentation">
                <h3 className="container-infoLogement-presentation-title">Title Cozy loft one the canal</h3>
                <div className="container-infoLogement-presentation-profile">
                    <div className="container-infoLogement-presentation-profile-name">
                        <p>Alexandre Dumas</p>
                    </div>
                    <div className="container-infoLogement-presentation-profile-img">
                        <img src={profile} alt="profile"/>
                    </div>

                </div>
            </div>
            <p className="container-infoLogement-city">Paris, île de France</p>
            <div className="container-infoLogement-filter">
                <div className="container-infoLogement-filter-tag">
                    <span>nag</span>
                </div>
                <div>
                    <img src={starFull} alt="etoile rempli"/>
                    <img src={starFull} alt="etoile rempli"/>
                    <img src={starFull} alt="etoile rempli"/>
                    <img src={starFull} alt="etoile rempli"/>
                    <img src={starEmpty} alt="etoile vide"/>

                </div>
                
            </div>
            <ul className="container-infoLogement-list">
                <li className="container-infoLogement-list-content">
                    <div onClick={toggle} className="container-infoLogement-list-content-title">
                        <h4>Description</h4> 
                        { isOpen ? <img src={topArrow} alt=""/> : <img src={botArrow} alt=""/>}    
                    </div>
                    {isOpen && 
                        <div className="container-infoLogement-list-content-text">                        
                            <p>vfvfvfvfv</p>
                        </div>       
                    }                               
                </li>
                <li className="container-infoLogement-list-content">
                    <div className="container-infoLogement-list-content-title">
                        <h4>Equipements</h4>
                        <img src={topArrow} alt="derouler vers le bas"/>
                    </div>
                    <div className="container-infoLogement-list-content-text">
                        <p>vfvfvfvfv</p>
                    </div> 
                </li>                
            </ul>             
        </div>
    )
}

export default InfoLogement