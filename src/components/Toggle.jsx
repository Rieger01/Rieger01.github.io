import {useState, useEffect} from 'react';

const ToggleComponent = () => {
    const [isLight, setLightMode] = useState(false);

    const HandleToggleChange = () => {
        setLightMode(isLight => !isLight);
    }

    useEffect(() => {
        const root = document.documentElement;
        if(isLight) {
            // set light mode
            root.setAttribute("data-theme", "light");
        } else {
            // unset light mode
            root.removeAttribute("data-theme");
        }
    });

    return (
<button id="light-mode-toggle" name="toggle" aria-label="dark light mode toggle" onClick = {HandleToggleChange}>
    <i className="fa-regular fa-lightbulb"></i>
</button>
    )
}

export default ToggleComponent;