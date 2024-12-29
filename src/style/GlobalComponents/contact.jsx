import styled from "styled-components";

export const ContainerContact = styled.button`
    margin: 300px 0;
    position: relative;
    overflow: hidden; 

    &:before,
    &:after {
        z-index: -1;
        transition: all .7s ease-out;
        content: "";
        position: absolute;
        height: 100%;
        width: 12%;
        top: 0;
        border: 2px solid #FFFFFF66;
        border-radius: 100px;
    }

    &:before {
        right: 0;
        border-left: 0;
        border-radius: 0 100px 100px 0/0 100px 100px 0;
    }

    &:after {
        left: 0;
        border-right: 0;
        border-radius: 100px 0 0 100px/100px 0 0 100px;
    }

    &:hover:before,
    &:hover:after {
        width: 50.002%; 
        z-index: 1; 
        transition: all .7s ease-in;
    }
`;

export const ContactA = styled.a`
    transform: none;
    background-color: ${(props) => props.theme.colors.background1};
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 15px;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
`;
