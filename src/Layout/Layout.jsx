import { Container } from './LayoutStyle'
import Header from '../Components/Header/Header'
import Main from '../Components/Main/Main'

export const Layout = () => {
    return (
        <Container>
            <Header/>
            <Main/>
        </Container>
    )
}