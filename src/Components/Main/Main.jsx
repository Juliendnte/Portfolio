import BgAnimation from '../BackgrooundAnimation/BackgroundAnimation';
import Presentation from '../Presentation/Presentation';
import { Section } from '../../style/GlobalComponents';
import Projects from "../Projects/Projects";
import Technologies from "../Technologies/Technologies.jsx";

const Home = () => {
    return (
        <>
            <Section grid>
                <Presentation />
                <BgAnimation />
            </Section>
            <Projects/>
            <Technologies/>
        </>
    );
};

export default Home;