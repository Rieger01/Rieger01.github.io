const skills = [
	{icon: "fa-brands fa-python", skill: "Skill 1", rating : "r3"},
    {icon: "fa-brands fa-js", skill: "Skill 2", rating : "r2"},
    {icon: "fa-brands fa-java", skill: "Skill 3", rating : "r1"}
];

const SkillsItems = () => {
    return(
        <ul>
            {skills.map((array, index) => (
                <li key = {index} class={array.rating} >
                    <i className={array.icon}></i><p>{array.skill}</p>
                    <div></div><div></div><div></div>
                </li>
            ))}
        </ul>
    )
}

export default SkillsItems;