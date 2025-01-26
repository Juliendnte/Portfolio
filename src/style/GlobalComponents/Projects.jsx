import styled from 'styled-components';

export const Img = styled.img`
    width: auto;
    height: 200px;
`

export const GridContainer = styled.section`
    display: flex;
    margin-top: 80px;
    flex-wrap: wrap;
    padding-top: 3rem;
    justify-content: center;
    padding-bottom: 3rem;
    place-items: center;
    column-gap: 10rem;
    row-gap: 3rem;
    width: 80vw;
    max-width: 1000px;
    min-width: 450px;
    
    @media ${(props) => props.theme.breakpoints.lg} {
        column-gap: 5rem;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 2rem 2rem 1.5rem;
    }

`

export const Proj = styled.div`
    width: 41rem;
    background-color: ${(props) => props.theme.colors.background2};
    
    @media ${(props) => props.theme.breakpoints.xl} {
        width: 36rem;
    }
`