import axios from "axios";
import { useContext, useState } from "react";
import { FaCircleNotch } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../../services/UserContext";
import { storeToken, storeUser } from "../../hooks/AuthUser";

const Login = () => {
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const user = useContext(UserContext)

    console.log(user);
    

    const submit = async (e) => {
        e.preventDefault()
        setError('')
        setSubmitting(true)
        let baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

        let data = new FormData(e.target)
        await axios.post(`${baseUrl}/user/authenticate.php`, data)
        .then((res) => {
            console.log(res.data);
            if(res.data.success){
                storeUser(res.data.user);
                storeToken(res.data.auth_token)
                navigate('/admin/')
            }
        })
        .catch((error) => {
            console.log(error.response.data);
            setError(error.response.data.message);
        })
        .finally(() => {
            setSubmitting(false)
        })
    }

    return (
        <>
            <div className="border-2 p-5 rounded-md bg-white">
                <form onSubmit={submit}>
                    <div className="text-center mb-7">
                        <h1 className="text-4xl mb-2">Sign in</h1>
                        <p className="text-xs font-semibold">Sign in to continue</p>
                    </div>

                    <div className="max-w-full space-y-7 mb-2">
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
                    <span className="text-red-500 text-sm italic mb-2 block">{error}</span>

                    <button disabled={submitting} className={`${submitting ? 'bg-secondary/50' : 'bg-secondary'} w-full gap-3 flex justify-center items-center text-center text-white py-2 rounded-md font-bold`}>
                        {submitting && <FaCircleNotch className="animate-spin" />} <span>Sign In</span>
                    </button>
                </form>
            </div>

            <div className="text-center mt-5">
                <p>
                    {`Don't have an account?`}
                    <Link to="/signup" className="text-secondary">Sign Up</Link>
                </p>
            </div>
        </>
    )
}

export default Login