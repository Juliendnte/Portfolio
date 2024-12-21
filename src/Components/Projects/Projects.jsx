import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    Img
} from '../../style/GlobalComponents/Projects.jsx';
import {base_url, projects} from '../../constants/constant.jsx';
import {Title} from "../../style/GlobalComponents/Main.jsx";

const Projects = () => (
    <div id="Projects" className="w-full pt-80 h-max flex justify-center relative mt-44">
        <Title absolute className="inline-flex">
            <h2 className="text-7xl w-fit mt-36">Projects</h2>
        </Title>
        <GridContainer>
            {projects.map((p, i) => {
                return (
                    <BlogCard key={i}>
                        <Img src={p.image}/>

                        <HeaderThree title={p.title}>{p.title}</HeaderThree>
                        <Hr/>

                        <CardInfo className="card-info">{p.description}</CardInfo>
                        <div>
                            <TitleContent>Stacks</TitleContent>
                            <Hr/>
                            <TagList>
                                {p.tags.map((t, i) => {
                                    return <Tag key={i}>{t}</Tag>;
                                })}
                            </TagList>
                        </div>
                        <UtilityList>
                            <ExternalLinks href={p.source} target='_blank'><img width='35px' src={base_url + '/images/github.webp'} alt='source code'/></ExternalLinks>
                            {p.website && (
                                <ExternalLinks href={p.website} target='_blank'><img width='35px'
                                                                                     src={base_url + '/images/website.png'}
                                                                                     alt='demo'/></ExternalLinks>
                            )}
                        </UtilityList>
                    </BlogCard>
                );
            })}
        </GridContainer>
    </div>
);

export default Projects;