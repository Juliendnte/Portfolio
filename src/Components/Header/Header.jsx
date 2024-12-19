import {Container, Ul} from '../../style/GlobalComponents/Header.jsx';
import Time from "../../style/GlobalComponents/Time.jsx";

const Header = () => (
    <Container
        className="nav w-full px-6 lg:px-60 text-sm font-medium text-shadow text-white fixed h-28 bg-gradient-to-b to-transparent backdrop-blur-lg flex items-center">
        <div className=" relative flex items-center justify-between tracking-[-2%] text-2xl w-full">
            <h1 className="font-medium leading-[9.52px] uppercase"><a href="/Portfolio">Julien dante</a></h1>
            <nav>
                <Ul className="text-white flex p-4 gap-1.5 bg-hash rounded-[100px] text-xl uppercase w-max mx-auto tracking-[-2%] leading-[9.52px] items-center">
                    <li className="backdrop: px-3 py-2"><a className="cursor-none" href="#Experience">Experience</a>
                    </li>
                    <li className="backdrop: px-3 py-2"><a className="cursor-none" href="#Skills">Skills</a>
                    </li>
                    <li className=" px-3 py-2"><a className="cursor-none" href="#Projects">Projects</a></li>
                    <li className="px-3 py-2"><a className="cursor-none" href="#Contact">Contact</a></li>
                </Ul>
            </nav>
            <Time className=" z-20 font-medium leading-[9.52px] "></Time>
        </div>
    </Container>
);

export default Header;