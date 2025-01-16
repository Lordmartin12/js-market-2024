import { Link } from "react-router-dom"

const Register = () => {
    return (
        <>
            <div className="border-2 p-5 rounded-md bg-white">
                <form method="post" name="sign_form">
                    <div className="text-center mb-7">
                        <h1 className="text-4xl mb-2">Sign up</h1>
                        <p className="text-xs font-semibold">Sign up to continue</p>
                    </div>

                    <div className="max-w-full space-y-7 mb-8">
                        <input className="inpute" type="text" placeholder="First Name" name="firstname" />
                        <input className="inpute" type="text" placeholder="Last Name" name="lastname" />
                        <input className="inpute" type="email" placeholder="Email" name="email" />
                        <input className="inpute" type="password" placeholder="Password" name="password" />
                        <div>
                            <input type="checkbox" name="terms" id="terms" required />
                            <label htmlFor="terms" className="text-sm">
                                Agree to our <a href="#" target="_blank" className="text-secondary font-semibold">Policies</a> and
                                <a href="#" target="_blank" className="text-secondary font-semibold">Terms of services</a>
                            </label>
                        </div>
                    </div>

                    {/* <!-- Error Span to show error message --> */}
                    <span className="text-red-500 text-sm italic mb-2 block" id="errorSpan"></span>

                    <div className="bg-secondary text-center text-white py-2 rounded-md">
                        <button className="max-w-full font-bold">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>

            <div className="text-center mt-5 text-white">
                <p>
                    Already have an account?
                    <Link to="/login" className="text-secondary">Sign In</Link>
                </p>
            </div>
        </>
    )
}

export default Register