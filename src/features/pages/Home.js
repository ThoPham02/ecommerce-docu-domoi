import { Outlet } from "react-router-dom";
import HeaderUi from "../components/ui/Header/HeaderUi";

const HomePage = () => {
    return (
        <>
            <HeaderUi />
            <Outlet/>
        </>
    )
}

export default HomePage;