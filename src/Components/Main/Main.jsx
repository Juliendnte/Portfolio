import {ContainerMain} from "../../style/GlobalComponents/Main.jsx";
import Presentation from "../Presentation/Presentation.jsx";
import {Section} from "../../style/GlobalComponents/index.jsx";
import BgAnimation from "../BackgrooundAnimation/BackgroundAnimation.jsx";
import Experience from "../Experience/Experience.jsx";
import Technologies from "../Technologies/Technologies.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
import Projects from "../Projects/Projects.jsx";

const Home = () => {
    return (
        <ContainerMain className="flex flex-col items-center">
            <Section colorAlt flex row noPadding className="w-full mt-24 items-center place-content-around">
                <Presentation/>
                <BgAnimation/>
            </Section>
            <Experience/>
            <Technologies/>
            <Projects/>
            <Contact/>
            <Footer/>
        </ContainerMain>
    );
};

export default Home;