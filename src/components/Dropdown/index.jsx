import { useState } from "react"
import topArrow from "../../assets/topArrow.svg"
import botArrow from "../../assets/botArrow.svg"

function Dropdown( { dropDownTitle, children }){
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return (
        <li className="container-infoLogement-list-content">
                    <div onClick={toggle} className="container-infoLogement-list-content-title">
                        <h4>{dropDownTitle}</h4> 
                        { isOpen ? <img src={topArrow} alt=""/> : <img src={botArrow} alt=""/>}    
                    </div>
                    {isOpen && 
                <div className="container-infoLogement-list-content-text">                        
                    {children}
                </div>       
            }                               
        </li>   
    )
}

export default Dropdown