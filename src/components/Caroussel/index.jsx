import { useEffect } from "react"
import { useState } from "react"
import prevArrowCaroussel from "../../assets/prevArrowCaroussel.svg"
import nextArrowCaroussel from "../../assets/nextArrowCaroussel.svg"

function Caroussel( { children }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

// Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if(currentIndex === (children.length - 1)) {
            setCurrentIndex(prevState => 0)
        }
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    
    const prev = () => {
        if(currentIndex === 0){
            setCurrentIndex(prevState => prevState + (children.length - 1))
        }
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }
    
    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div onClick={prev} className="left-arrow">
                    <img src={prevArrowCaroussel} alt=""/>
                </div>
                <div className="carousel-content-wrapper">
                    <div className="carousel-content" style={{ transform: `translateX(-${currentIndex *100}%)` }}>
                        {children}
                    </div>
                    <div className="caroussel-content-numberPicture">{currentIndex+1}/{children.length}</div>
                </div>
                <div onClick={next} className="right-arrow">
                    <img src={nextArrowCaroussel} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Caroussel