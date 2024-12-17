import styled, {keyframes} from 'styled-components';

const gradientAnimation = keyframes`
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 0 200%; 
    }
`;

export const LeftSection = styled.div`
    position: relative;
    padding-left: 90px; 
    
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0; 
        width: 10px; 
        background: ${props => props.theme.colors.border};
        border-radius: 5px; 
        background-size: 100% 200%;
        animation: ${gradientAnimation} 5s linear infinite;
    }
`;

