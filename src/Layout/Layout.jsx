import Header from '../Components/Header/Header'
import Main from '../Components/Main/Main'
import Cursor from "../style/GlobalComponents/Cursor.jsx";

export const Layout = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <Header/>
            <Main/>
            <Cursor/>
        </div>
    )
}