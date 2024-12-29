import styled from "styled-components";

export const FooterContainer = styled.footer`
    border-top: 4px dotted ${p => p.theme.colors.background2};
    width: 100%;
`

export const FooterParagraph = styled.p`
    border: 1px solid  ${p => p.theme.colors.background2};
    border-radius: 40px;
    padding: 6px 13px;
    transition: all .3s ease-in-out;
    box-shadow: 0 5px 20px 0 rgba(0,0,0,.2);

    &:hover {
        border-color: #fff;
    }
`