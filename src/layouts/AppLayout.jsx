import { useState } from "react";
import { FaBars } from "react-icons/fa6"
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-slate-100 min-h-screen">
            {/* Side Bar */}
            <div className={`fixed md:left-0 ${isOpen ? 'left-0' : '-left-52'} top-0 h-dvh w-52 bg-slate-950 text-white z-10 transition-all duration-500`}>
                <SideBar onClose={() => setIsOpen((prev) => !prev)} />
            </div>
            

            <main className="md:ml-52">
                <header className="min-h-8 bg-slate-300 w-full sticky top-0 px-4 py-2">
                    {/* Toggle Button */}
                    <button onClick={() => setIsOpen((prev) => !prev)} className="py-1 px-2 bg-primary text-white md:hidden">
                        <FaBars />
                    </button>
                    {/* Top Navigation */}
                </header>

                {/* The main Unique content of each page is render here with the outlet component */}
                <div>
                    <Outlet />
                </div>
            </main>

            {/* Navigation Overlay */}
            { isOpen && <section onClick={() => setIsOpen((prev) => !prev)} className="fixed top-0 left-0 h-dvh w-full bg-slate-900/70"></section> }
        </div>
    )
}

export default AppLayout