import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const GuestLayout = () => {
    return  (
        <>
            <Header />

            {/* The main Unique content of each page is render here with the outlet component */}
            <main className="min-h-screen">
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default GuestLayout;