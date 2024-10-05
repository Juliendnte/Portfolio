import { Container } from './LayoutStyle'
import Header from '../Components/Header/Header'
import Main from '../Components/Main/Main'
import Footer from '../Components/Footer/Footer'

export const Layout = () => {
    return (
        <Container>
            <Header/>
            <Main/>
            <Footer/>
        </Container>
    )
}