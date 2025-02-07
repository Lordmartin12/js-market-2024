import axios from "axios";
import { useState } from "react";
import { FaCircleNotch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"

const Register = () => {
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const navigator = useNavigate();
    const submitForm = async (ev) => {
        ev.preventDefault();
        setError('')
        setSubmitting(true)
        let baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

        let data = new FormData(ev.target)
        await axios.post(`${baseUrl}/user/add_user.php`, data)
        .then((res) => {
            alert(res.data.message);
            if(res.data.success){
                navigator('/login')
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
                <form method="post" name="sign_form" onSubmit={submitForm}>
                    <div className="text-center mb-7">
                        <h1 className="text-4xl mb-2">Sign up</h1>
                        <p className="text-xs font-semibold">Sign up to continue</p>
                    </div>

                    <div className="max-w-full space-y-7 mb-2">
                        <input className="inpute" type="text" placeholder="First Name" name="firstname" required />
                        <input className="inpute" type="text" placeholder="Last Name" name="lastname" />
                        <input className="inpute" type="email" placeholder="Email" name="email" required />
                        <input className="inpute" type="password" placeholder="Password" name="password" required />
                        <div>
                            <input type="checkbox" name="terms" id="terms" required />
                            <label htmlFor="terms" className="text-sm">
                                Agree to our <a href="#" target="_blank" className="text-secondary font-semibold">Policies</a> and
                                <a href="#" target="_blank" className="text-secondary font-semibold">Terms of services</a>
                            </label>
                        </div>
                    </div>

                    {/* <!-- Error Span to show error message --> */}
                    <span className="text-red-500 text-sm italic mb-2 block">{error}</span>

                    <button disabled={submitting} className={`${submitting ? 'bg-secondary/50' : 'bg-secondary'} w-full flex justify-center items-center text-center text-white py-2 rounded-md font-bold`}>
                        {submitting && <FaCircleNotch className="animate-spin" /> } <span>Sign Up</span>
                    </button>
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