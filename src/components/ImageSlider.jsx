import React, {useState, useEffect} from 'react';

const Slider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    var elem = null;
    var size = null;
    var num = 1;

    useEffect(() => {
        elem = document.getElementsByClassName("active")[0];
        size = getComputedStyle(elem).width.replace("px", "");
        num = size/window.innerWidth < .70 ? 4 : 1;
    })

    const handleClick = (evt) => {
        console.log(evt.target.className);

        elem = document.getElementsByClassName("active")[0];
        size = getComputedStyle(elem).width.replace("px", "");
        num = size/window.innerWidth < .70 ? 4 : 1;

        console.log(num);

        if(evt.target.className.includes("right")) {
            if (currentIndex === slides.length - num) {
                return setCurrentIndex(0);
            }
            return setCurrentIndex(currentIndex + 1);
        } else {
            if (currentIndex === 0) {
                return setCurrentIndex(slides.length - num);
            }
            return setCurrentIndex(currentIndex - 1);
        }
    }

    return(
        <div className="image-slider">
            <button onClick = {handleClick} className="left" aria-label="left"><i className="fa-solid fa-chevron-left"></i></button>
            <button onClick = {handleClick} className="right" aria-label="right"><i className="fa-solid fa-chevron-right"></i></button>
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