import bgAbout from "../../assets/bgAbout.jpg"
import Dropdown from "../../components/Dropdown"

function About() {
    const aboutFiability = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
    const aboutRespect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const aboutService = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const aboutSecurity = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

    return(
        <div className="container-about">
            <div className="container-about-bgAbout">
                <img src={bgAbout} alt=""/>
            </div>
            <ul className="container-about-list">
                <Dropdown dropDownTitle="Fiabilité">
                    <p>{aboutFiability}</p>
                </Dropdown>
                <Dropdown dropDownTitle="Respect">
                    <p>{aboutRespect}</p>
                </Dropdown>
                <Dropdown dropDownTitle="Service">
                    <p>{aboutService}</p>
                </Dropdown>
                <Dropdown dropDownTitle="Sécurité">
                    <p>{aboutSecurity}</p>
                </Dropdown>
            </ul>
        </div>
    )
}

export default About