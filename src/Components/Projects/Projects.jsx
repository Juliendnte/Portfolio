import {
    GridContainer, Img, Proj,
} from '../../style/GlobalComponents/Projects.jsx';
import {projects} from '../../constants/constant.jsx';
import {Title} from "../../style/GlobalComponents/Main.jsx";

const Projects = () => (<div id="Projects" className="w-full pt-80 h-max flex justify-center relative mt-44">
    <Title absolute className="inline-flex">
        <h2 className="text-7xl w-fit mt-36">Projets</h2>
    </Title>
    <GridContainer>
        {projects.map((p, i) => {
            return (<Proj key={i} className="card  shadow-xl text-white">
                <figure>
                    <Img src={p.image} alt={p.title}/>
                </figure>
                <div className="card-body">
                    <h2 title={p.title} className="card-title">
                        {p.title}
                        {p.tags.map((t, i) => {
                            return <div className="badge badge-secondary" key={i}> {t}</div>;
                        })}
                    </h2>
                    <p>{p.description}</p>
                    <div className="card-actions justify-end">
                        {p.source && <a href={p.source} className="badge badge-outline">Github</a>}
                        {p.website && <a href={p.website} className="badge badge-outline">Website</a>}

                    </div>
                </div>
            </Proj>);
        })}
    </GridContainer>
</div>);

export default Projects;