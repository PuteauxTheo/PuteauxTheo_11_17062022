
import starFull from "../../assets/starFull.svg"
import starEmpty from "../../assets/starEmpty.svg"
import Dropdown from "../Dropdown"

function InfoLogement({ location }) {
    let starTab =[ 1, 2, 3, 4, 5]
    return (
        <div className="container-infoLogement">
            <div className="container-infoLogement-presentation">
                <h3 className="container-infoLogement-presentation-title">{location.title}</h3>
                <div className="container-infoLogement-presentation-profile">
                    <div className="container-infoLogement-presentation-profile-name">
                        <p>{location.host.name}</p>
                    </div>
                    <div className="container-infoLogement-presentation-profile-img">
                        <img src={location.host.picture} alt="profile"/>
                    </div>

                </div>
            </div>
            <p className="container-infoLogement-city">{location.location}</p>
            <div className="container-infoLogement-filter">
                <div className="container-infoLogement-filter-tag">
                    {
                        location.tags.map( (tag) => ( 
                            <span key={tag}>
                                <p>{tag}</p>
                            </span> 
                    ))}
                </div>
                <div>
                    {
                        starTab.map(( el ) => (
                            location.rating >= el ? <img key={el+"full"} src={starFull} alt="etoile rempli"/> : <img key={el+"empty"} src={starEmpty} alt="etoile vide"/>
                        ))
                    }

                </div>
                
            </div>
            <ul className="container-dropDown-list">
                <Dropdown dropDownTitle="Description">
                    <p className="description-text">{location.description}</p>
                </Dropdown>
                <Dropdown dropDownTitle="Equipements">
                    {
                        location.equipments.map((equipment) => (
                            <p key={equipment} className="equipement-text">{equipment}</p>
                    ))}
                </Dropdown>                
            </ul>             
        </div>
    )
}

export default InfoLogement