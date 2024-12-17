import styled from 'styled-components';

export const Container = styled.header`
    font-family: ${props => props.theme.fonts.header};
    width: 100vw;
    padding: 0 15%;
    z-index: 1000;
    box-shadow: rgba(0, 0, 0, 0.35) 0 -50px 36px -28px inset;
`;

export const Ul = styled.ul`
    font-family: ${props => props.theme.fonts.header};
    background-color: ${props => props.theme.colors.background2};
`;
