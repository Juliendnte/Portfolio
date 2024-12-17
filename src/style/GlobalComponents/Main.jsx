import styled, {keyframes} from "styled-components";

export const ContainerMain = styled.main`
    width: 70vw; 
    margin-top: 90px;
`;

const gradientAnimation = keyframes`
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 200% 0; 
    }
`;

export const Title = styled.span`
    position:  ${(props) => props.absolute ?  "absolute" : "relative"};
    top: ${(props) => props.absolute ? 0 : ''}px;
    left: ${(props) => props.absolute ? 0 : ''}px;
    margin: ${(props) => props.margin ? '1rem 4rem' : ''};
    padding-bottom: 26px;
    width: fit-content;
    
    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-radius: 5px;
        height: 6px;
        background: ${props => props.theme.colors.borderLeft};
        background-size: 200% 100%;
        animation: ${gradientAnimation} 5s linear infinite;
    }
`;