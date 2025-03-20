import {experience} from "../../constants/constant.jsx";
import {
    ButtonsExperience, Description,
    Detail,
    ExperienceButton,
    TitleContent
} from "../../style/GlobalComponents/Experience.jsx";
import {Section, H3} from "../../style/GlobalComponents/index.jsx";
import {useState} from "react";
import {Title} from "../../style/GlobalComponents/Main.jsx";

const Experience = () => {
    const [selectedExpIndex, setSelectedExpIndex] = useState(0);

    const handlExpClick = (index) => {
        setSelectedExpIndex(index);
    };

    const selectedExp = experience[selectedExpIndex];

    return (
        <div id='Experience' className="w-full pt-80 h-max ">
            <Title className="inline-flex pb-10 ">
                <h2 className="text-7xl w-fit">Expérience</h2>
            </Title>
            <Section flex row noPadding className="w-full mt-24 items-center">
                <ButtonsExperience className="flex flex-col gap-10 ">
                    {experience.map((exp, index) => (
                        <ExperienceButton key={exp.title} selected={index === selectedExpIndex}>
                            <H3 onClick={() => handlExpClick(index)}>{exp.title}</H3>
                        </ExperienceButton>))}
                </ButtonsExperience>
                <Detail className="w-8/12 ">
                    <div>
                        <TitleContent>
                            {selectedExp.title} - {selectedExp.date}
                        </TitleContent>
                    </div>
                    <Description dangerouslySetInnerHTML={{
                        __html: selectedExp.description || "<p>No description available</p>",
                    }}>
                    </Description>
                </Detail>
            </Section>
        </div>)
};

export default Experience;