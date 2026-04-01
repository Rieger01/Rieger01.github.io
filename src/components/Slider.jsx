import React, {useState} from 'react';

const Slider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (evt) => {
        console.log(evt.target.className);
        if(evt.target.className.includes("right")) {
            if (currentIndex === slides.length - 1) {
                return setCurrentIndex(0);
            }
            return setCurrentIndex(currentIndex + 1);
        } else {
            if (currentIndex === 0) {
                return setCurrentIndex(slides.length - 1);
            }
            return setCurrentIndex(currentIndex - 1);
        }
    }

    return(
        <div className="image-slider">
            <button onClick = {handleClick} className="left"><i className="fa-solid fa-circle-arrow-left"></i></button>
            <button onClick = {handleClick} className="right"><i className="fa-solid fa-circle-arrow-right"></i></button>
            <ul>
                {slides.map((slide, index) => (
                    <li key = {index} className = {index === currentIndex ? "active" : ""}>
                        <img
                            src = {slide.src}
                            alt = {slide.alt}
                            style = {{
                                transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex*3}rem))`
                            }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Slider;