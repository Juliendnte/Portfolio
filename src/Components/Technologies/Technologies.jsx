import { Section, SectionDivider, SectionText, SectionTitle, } from "../../style/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle, } from "./TechnologiesStyle";
import { Skills } from '../../constants/constant.jsx'

const Technologies = () => (
    <Section id="skills">
        <SectionDivider divider />
        <SectionTitle>Skills</SectionTitle>
        <SectionText>
            I&#39;m still learning a variety of technologies as a developer.
            I&#39;ve developed and tried multiple projects using these technologies, and I&#39;m always eager to learn more.
        </SectionText>
        <List>
            {Skills.map((Skill) => (
                <ListItem key={Skill.slug}>
                    <picture>
                        <Skill.Component size="3rem" />
                    </picture>
                    <ListContainer>
                        <ListTitle>{Skill.title}</ListTitle>
                        <ListParagraph>
                            <Skill.Description />
                        </ListParagraph>
                    </ListContainer>
                </ListItem>
            ))}
        </List>
        <SectionDivider colorAlt />
    </Section>
);

export default Technologies;