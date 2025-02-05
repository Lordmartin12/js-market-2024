import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const submit = (e) => {
        e.preventDefault()
        navigate('/admin/')
    }

    return (
        <>
            <div className="border-2 p-5 rounded-md bg-white">
                <form onSubmit={submit}>
                    <div className="text-center mb-7">
                        <h1 className="text-4xl mb-2">Sign in</h1>
                        <p className="text-xs font-semibold">Sign in to continue</p>
                    </div>

                    <div className="max-w-full space-y-7 mb-8">
                        <input className="inpute" type="email" placeholder="Email" name="email" />
                        <input className="inpute" type="password" placeholder="Password" name="password" />
                        <div className="flex items-start justify-between">
                            <aside>
                                <input type="checkbox" name="terms" id="terms" />
                                <label htmlFor="terms" className="text-sm">
                                    Remember me
                                </label>
                            </aside>

                            <aside>
                                <a href="#" className="font-semibold text-secondary text-sm">Forgot password?</a>
                            </aside>
                        </div>
                    </div>
                    {/* <!-- Error Span to show error message --> */}
                    <span className="text-red-500 text-sm italic mb-2 block" id="errorSpan"></span>

                    <div className="bg-secondary text-center text-white py-2 rounded-md">
                        <button className="max-w-full font-bold cursor-pointer">
                            Sign in
                        </button>
                    </div>
                </form>
            </div>

            <div className="text-center mt-5">
                <p>
                    {`Don't have an account?`}
                    <Link to="/signup"  className="text-secondary">Sign Up</Link>
                </p>
            </div>
        </>
    )
}

export default Login