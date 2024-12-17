import styled from "styled-components";

export const IMG = styled.img`
    position: absolute;
    width: 60%;
    height: 60%;
    top: 50%;
    left: 50%;
    object-fit: cover;
    object-position: center;
    transform: translate(-50%, -50%);
    mix-blend-mode: multiply;
    max-width: 100%;
    display: block;
    vertical-align: middle;
    filter: grayscale(100%) contrast(1);
    transition: all 0.3s ease;
    &:hover {
        filter: none;
        mix-blend-mode: normal;
    }
`

export const H3 = styled.h3`
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 20px;
`;

export const ABBR = styled.abbr`
    opacity: 1;
    transform:none;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    position: relative;
    transition: background-color .3s ease-out;
    width: 100px;
    height: 103px;
    -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    text-align: center;
    text-decoration: underline dotted;
    background-color: ${props => props.theme.colors.background2};
    &:hover {
        background-color: transparent;
    }
`

export const ContainerImg = styled.div`
    width: 80%;
    max-width: 800px;
    flex-wrap: wrap;
`