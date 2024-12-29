import {ContactA, ContainerContact} from "../../style/GlobalComponents/contact.jsx";

const Contact = () => (
    <ContainerContact className="inline-grid items-center overflow-hidden hover:transition-all font-medium max-[980px]:px-[40px] px-[60px] min-[1112px]:h-[164px] min-[980px]:h-[140px] max-[980px]:h-[120px] max-[780px]:px-[28px] max-[780px]:h-[79px] rounded-[100px] border-2 border-transparent btnbo max-[406px]:text-[30px] min-[1112px]:text-[100px] min-[980px]:text-[90px] max-[980px]:text-[70px] max-[780px]:text-[48px] tracking-[-2px] "  id='Contact'>
        <ContactA href="mailto:julien.dante@ynov.com">Contact Me</ContactA>
    </ContainerContact>
)

export default Contact;