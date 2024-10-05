import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyle';

const Header = () => (
    <Container>
        <Div1>
            <a href="/" style={{ display: 'flex', alignItems: 'center', color: "white" }}>
                <img src="/logo.png" height={50} width={60} alt="logo" />
                <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }}>DANTE Julien</span>
            </a>
        </Div1>
        <Div2>
            <li>
                <a href="#About" style={{color: 'white'}}>
                    <NavLink>About</NavLink>
                </a>
            </li>
            <li>
                <a href="#Projects" style={{color: 'white'}}>
                    <NavLink>Projects</NavLink>
                </a>
            </li>
            <li>
                <a href="#Skills" style={{color: 'white'}}>
                    <NavLink>Skills</NavLink>
                </a>
            </li>
        </Div2>
        <Div3>
            <SocialIcons href="https://github.com/Juliendnte" target="_blank" rel="noopener noreferrer">
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/julien-dante-783537260/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.instagram.com/julien.dnte/" target="_blank" rel="noopener noreferrer">
                <AiFillInstagram size="3rem" />
            </SocialIcons>
        </Div3>
    </Container>
);

export default Header;