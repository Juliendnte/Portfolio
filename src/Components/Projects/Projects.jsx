
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyle';
import { Section, SectionDivider, SectionTitle } from '../../style/GlobalComponents';
import { projects } from '../../constants/constant.jsx';

const Projects = () => (
    <Section id="Projects">
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        <GridContainer>
            {projects.map((p, i) => {
                return (
                    <BlogCard key={i}>
                        <Img src={p.image} />

                        <HeaderThree title={p.title}>{p.title}</HeaderThree>
                        <Hr />

                        <CardInfo className="card-info">{p.description}</CardInfo>
                        <div>
                            <TitleContent>Tech Stack</TitleContent>
                            <Hr />
                            <TagList>
                                {p.tags.map((t, i) => {
                                    return <Tag key={i}>{t}</Tag>;
                                })}
                            </TagList>
                        </div>
                        <UtilityList>
                            <ExternalLinks href={p.source} target='_blank'>Source Code</ExternalLinks>
                        </UtilityList>
                    </BlogCard>
                );
            })}
        </GridContainer>
    </Section>
);

export default Projects;