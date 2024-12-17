import {FooterContainer} from "../../style/GlobalComponents/Footer.jsx";
import {base_url, media} from "../../constants/constant.jsx";

const height = '45px'
const width = '45px'

const Footer = () => (
    <FooterContainer className='absolute bottom-0 flex justify-around items-center pt-11 pb-11'>
        <div className="flex justify-between w-52">
            <a href={media[0].link} target='_blank'>
                <img width={width} height={height} src={base_url + media[0].path} alt={media[0].link}/>
            </a>
            <a href={media[1].link} target='_blank'>
                <img width={width} height={height} src={base_url + media[1].path} alt={media[1].link}/>
            </a>
        </div>
        <div className="flex items-center justify-center flex-col">
            <p>© 2024 Julien. All rights reserved.</p><br/>
            <p>Designed and developed by Julien Dante</p>
        </div>
        <div className="flex justify-between w-52">
            <a href={media[2].link} target='_blank'>
                <img width={width} height={height} src={base_url + media[2].path} alt={media[2].link}/>
            </a>
            <a href={media[3].link} target='_blank'>
                <img width={width} height={height} src={base_url + media[3].path} alt={media[3].link}/>
            </a>
        </div>
    </FooterContainer>
)

export default Footer;