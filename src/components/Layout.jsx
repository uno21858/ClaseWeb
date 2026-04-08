import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router";

const Layout = () => {
    return (
        <>
            <Navbar>
                <Outlet />
            </Navbar>
            <Footer />
        </>
    )
}

export default Layout;