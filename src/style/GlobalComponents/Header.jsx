import styled from 'styled-components';

export const Container = styled.header`
    font-family: ${props => props.theme.fonts.header};
    width: 100vw;
    font-size: 2rem;
    padding: 0 15%;
    z-index: 1000;
    box-shadow: rgba(0, 0, 0, 0.35) 0 -50px 36px -28px inset;
    
    @media ${props => props.theme.breakpoints.lg} {
        padding: 50px 11%;
        font-size: 2rem;
    }
    @media ${props => props.theme.breakpoints.md} {
        font-size: 1.45rem;
        padding: 50px 10%;
    }
    @media ${props => props.theme.breakpoints.sm} {
        font-size: 1.2rem;
        padding: 50px 5%;
    }
   
`;

export const Ul = styled.ul`
    font-family: ${props => props.theme.fonts.header};
    background-color: ${props => props.theme.colors.background2};
    @media ${props => props.theme.breakpoints.lg} {
        font-size: 16px;
    }
    @media ${props => props.theme.breakpoints.md} {
        font-size: 10px;
    }
    @media ${props => props.theme.breakpoints.sm} {
        font-size: 9px
    }
`;
