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

<label className="mode-toggle">
    <button id="light-mode-toggle" name="toggle" onClick = {HandleToggleChange}>
        <i className="fa-regular fa-lightbulb"></i>
    </button>
</label>
    )
}

export default ToggleComponent;