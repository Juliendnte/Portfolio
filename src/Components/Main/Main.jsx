import BgAnimation from '../BackgrooundAnimation/BackgroundAnimation';
import Presentation from '../Presentation/Presentation';
import { Section } from '../../style/GlobalComponents';
import Projects from "../Projects/Projects";
import Technologies from "../Technologies/Technologies.jsx";
import {Contenu} from './MainStyle';

const Home = () => {
    return (
        <Contenu>
            <Section grid>
                <Presentation />
                <BgAnimation />
            </Section>
            <Projects/>
            <Technologies/>
        </Contenu>
    );
};

export default Home;