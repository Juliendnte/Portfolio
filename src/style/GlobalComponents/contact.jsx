import styled from "styled-components";

export const ContainerContact = styled.a`
    font-size: 100px;
    margin: 300px;
    border-left: 15px solid ${p => p.theme.colors.background2};
    border-right: 15px solid ${p => p.theme.colors.background2};
    
    padding: 30px 90px;
    border-radius: 100px;
    transition: .3s;

    &:hover {
        background-color: ${props => props.theme.colors.background2};
    }
`