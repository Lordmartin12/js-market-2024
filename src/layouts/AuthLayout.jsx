import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
        <section className="max-w-full min-h-dvh flex items-center bg-primary/85">
            <div className="max-w-96 m-auto">
                <Outlet />
            </div>
        </section>
    )
}

export default AuthLayout