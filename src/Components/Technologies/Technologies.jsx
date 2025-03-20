import {Title} from "../../style/GlobalComponents/Main.jsx";
import {useState} from "react";
import {skills} from "../../constants/constant.jsx";
import {H3, IMG, ABBR, ContainerImg} from "../../style/GlobalComponents/Technologies.jsx";
import theme from "../../style/default.jsx";


const Technologies = () => {
    const [selectedSkillsIndex, setSelectedSkillsIndex] = useState(0);

    const handleSkillsClick = (index) => {
        setSelectedSkillsIndex(index);
    }

    const selectedSkills = skills[selectedSkillsIndex];

    return (
        <div id="Skills" className="w-full pt-80 h-max">
            <Title className="inline-flex pb-10 ">
                <h2 className="text-7xl w-fit">Compétences</h2>
            </Title>
            <div className="flex flex-col items-center">
                <div className="flex mt-32 gap-10">
                    {skills.map((skill, index) => (
                        <div key={skill.title} className="flex flex-col">
                            <H3 style={{backgroundColor: selectedSkills.title === skill.title ? theme.colors.background2 : theme.colors.background1}}
                                onClick={() => handleSkillsClick(index)}>{skill.title}</H3>
                        </div>
                    ))}
                </div>
                <ContainerImg className="flex gap-10 mt-36 justify-center">
                    {selectedSkills.description.map((skill) => (
                        <ABBR key={skill.name} className="flex flex-col gap-10">
                            <IMG src={skill.path} alt={"skill " + skill.name}/>
                        </ABBR>
                    ))}
                </ContainerImg>
            </div>
        </div>
    );
};

export default Technologies;