import styled from 'styled-components'

export const Section = styled.section`
    background-color: ${(props) => props.colorAlt ? props.theme.colors.background2 : props.theme.colors.background1};
    display: ${(props) => props.grid ? "grid" : "flex"};
    flex-direction: ${(props) => props.row ? "row" : "column"};
    padding: ${(props) => props.noPadding ? "0" : "1rem 4rem"};
    box-sizing: content-box;
    position: relative;
    overflow: ${(props) => props.nothidden ? "visible" : "hidden"};

    @media ${(props) => props.theme.breakpoints.xl} {
        flex-direction: ${(props) => props.columnMedia ? "column" : "row"};
        width: 95%;
    }

    @media ${(props) => props.theme.breakpoints.xlmaispastrop} {
        width: 95%;
    }
`

export const SectionTitle = styled.h2`
    font-weight: 800;
    font-size: ${(props) => props.main ? '65px' : '56px'};
    line-height: ${(props) => props.main ? '72px' : '67px'};
    width: max-content;
    max-width: 100%;
    background: ${props => props.theme.colors.title};
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 16px;
    padding: ${(props) => props.main ? '58px 0 16px' : '0'};

    @media ${props => props.theme.breakpoints.md} {
        font-size: ${(props) => props.main ? '56px' : '48px'};
        line-height: ${(props) => props.main ? '56px' : '48px'};
        margin-bottom: 12px;
        padding: ${(props) => props.main ? '40px 0 12px' : '0'};
    }

    @media ${props => props.theme.breakpoints.sm} {
        font-size: 32px;
        line-height: 40px;
        font-size: ${(props) => props.main ? '28px' : '32px'};
        line-height: ${(props) => props.main ? '32px' : '40px'};
        margin-bottom: 8px;
        padding: ${(props) => props.main ? '16px 0 8px' : '0'};
        max-width: 100%;
    }

    &::selection {
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2), -1px -1px 2px rgba(0, 0, 0, 0.2);
        background-color: transparent;
    }
`

export const SectionText = styled.p`
    max-width: 800px;
    font-size: 24px;
    line-height: 40px;
    font-weight: 300;
    padding-bottom: 3.6rem;
    color: rgba(255, 255, 255, 0.5);

    @media ${(props) => props.theme.breakpoints.md} {
        max-width: 670px;
        font-size: 20px;
        line-height: 32px;
        padding-bottom: 24px;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        max-width: 670px;
        font-size: 14px;
        line-height: 32px;
        padding-bottom: 24px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 16px;
        line-height: 24px;
        padding-bottom: 16px;
    }
    @media ${(props) => props.theme.breakpoints.xl} {
        font-size: 34px;
        line-height: 34px;
    }
`

export const ButtonBack = styled.div`
    width: ${({alt}) => alt ? '150px' : '262px'};
    height: ${({alt}) => alt ? '52px' : '64px'};
    border-radius: 50px;
    font-size: ${({alt}) => alt ? '20px' : '24px'};
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${({alt, form}) => (alt || form) ? '0' : '30px 0 10px'};
    color: #fff;
    background: ${({alt}) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
    cursor: pointer;
    transition: 0.5s ease;
    position: relative;
    overflow: hidden;
    opacity: ${({disabled}) => disabled ? '.5' : '1'};

    @media ${(props) => props.theme.breakpoints.md} {
        width: ${({alt}) => alt ? '150px' : '184px'};
        height: ${({alt}) => alt ? '52px' : '48px'};
        font-size: ${({alt}) => alt ? '20px' : '16px'};
        margin-bottom: ${({alt}) => alt ? '0' : '64px'};
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        width: 100%;
        height: 32px;
        font-size: 14px;
        margin-bottom: ${({alt}) => alt ? '0' : '32px'};
    }
`

export const SectionDivider = styled.div`

    width: 64px;
    height: 6px;
    border-radius: 10px;
    background-color: #fff;
    background: ${(props) => props.colorAlt ?
            'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' :
            'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};

    margin: ${(props) => props.divider ? "4rem 0" : ""};

    @media ${(props) => props.theme.breakpoints.md} {
        width: 48px;
        height: 4px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        width: 32px;
        height: 2px;
    }
`

export const ButtonFront = styled.button`
    border: none;
    border-radius: 50px;
    color: #fff;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({alt}) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
    opacity: ${({disabled}) => disabled ? '.5' : '1'};
    transition: .4s ease;
    font-size: ${({alt}) => alt ? '20px' : '24px'};
    font-weight: 600;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: ${({disabled}) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};

    &:hover {
        opacity: 0;
    }

    &:focus {
        outline: none;
    }

    &:active {
        opacity: 1;
        box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
    }

    &:disabled {
        background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
        opacity: 0.5;
        box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
    }

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: ${({alt}) => alt ? '20px' : '16px'};
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 14px;
    }
`;

export const H3 = styled.h3`
    font-size: 25px;
    line-height: 2.25rem /* 36px */;
`;