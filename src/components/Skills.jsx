const skills = [
	{icon: "fa-brands fa-python", skill: "Skill 1", rating : "r1"},
    {icon: "fa-brands fa-python", skill: "Skill 2", rating : "r2"},
    {icon: "fa-brands fa-python", skill: "Skill 3", rating : "r3"}
];

<div class="container skills">
    <ul>
        {skills.map(skill => (
            <li class={rating} >
                <i class={icon}></i>
                <p>{skill}</p>
                <div></div><div></div><div></div>
            </li>
        ))}
    </ul>
</div>