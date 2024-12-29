import {FooterContainer, FooterParagraph} from "../../style/GlobalComponents/Footer.jsx";
import {base_url, media} from "../../constants/constant.jsx";

const height = '45px'
const width = '45px'

const Footer = () => (
    <FooterContainer className='absolute bottom-0 flex justify-around items-center pt-11 pb-11'>
        <div className="flex justify-between w-52 gap-6 ">
            <a href={media[0].link} target='_blank'>
                <FooterParagraph> {media[0].path}</FooterParagraph>
            </a>
            <a href={media[1].link} target='_blank'>
                <FooterParagraph> {media[1].path}</FooterParagraph>
            </a>
        </div>
        <div className="flex items-center justify-center flex-col">
            <p>© 2024 Julien. All rights reserved.</p><br/>
            <p>Designed and developed by Julien Dante</p>
        </div>
        <div className="flex justify-between w-52 gap-6">
            <a href={media[2].link} target='_blank'>
                <FooterParagraph className='decoration-white '> {media[2].path}</FooterParagraph>
            </a>
            <a href={media[3].link} target='_blank'>
                <FooterParagraph> {media[3].path}</FooterParagraph>
            </a>
        </div>
    </FooterContainer>
)

export default Footer;