import styled from 'styled-components';

export const ButtonsExperience = styled.ul`
    background-color: ${props => props.theme.colors.background1};
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`;

export const Detail = styled.div`
    background-color: ${props => props.theme.colors.background2};
    border-radius: 10px;
    padding: 20px 20px 50px;
    width: 5000px;
    height: 28rem;
    box-shadow: 0 5px 20px 0 rgba(0,0,0,.2);
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 20px 0 50px;
    }
`;

export const ExperienceButton = styled.li`
    min-width: ${(props) => (props.selected ? "200px" : "100%")};
    padding: ${(props) => (props.selected ? "10px 20px 10px 20px" : "10px 20px")};
    background-color: ${(props) => (props.selected ? props.theme.colors.background2 : props.theme.colors.background1)};
    cursor: ${props => props.selected};
    color: ${(props) => (props.selected ? "#382a79" : "#fff")};
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    width: 110%;
    
    &:hover {
        color: #382a79;
    }
`;

export const TitleContent = styled.div`
    font-size: 3.5rem;
    margin: 10px 0 20px 40px;
    @media ${(props) => props.theme.breakpoints.xl} {
        font-size: 2.5rem;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 1.5rem;
    }
`;

export const Description = styled.div`
   font-size: 2rem;
    margin: 10px 40px;
    @media ${(props) => props.theme.breakpoints.xxl} {
        font-size: 1.7rem;
    }
    @media ${(props) => props.theme.breakpoints.xlmaispastrop} {
        font-size: 1.5rem;
    }
    @media ${(props) => props.theme.breakpoints.lg} {
        font-size: 1.3rem;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 1.05rem;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: .9rem;
        margin: 10px 20px;
    }
    @media ${(props) => props.theme.breakpoints.xs} {
        font-size: .5rem;
    }
`;