import { useEffect, useState } from "react";
import axios from "axios";

const Contact = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setUsers(res.data);
            })

        return () => {
            setUsers([]);
        }
    }, [])

    return (
        <div className="px-4 py-4 max-w-6xl mx-auto">
            <h1>Contact Page</h1>

            <ul className="divide-y">
                {users.length > 0 && users.map((user, index) => (
                    <li key={index} role="button" onClick={() => { setSelectedUser(user); setShowModal(true)}} className="cursor-pointer py-2 px-4 shadow rounded-2xl">
                        <div>
                            <h3 className="font-semibold">{ user.name }</h3>
                            <p className="text-xs italic">@{ user.username }</p>
                            <small className="text-sm">{ user.email }</small>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Modal Section */}
            { selectedUser && <div className={`fixed inset-0 z-10 bg-slate-950/80 ${showModal ? 'block' : 'hidden'}`}>
                <div className="fixed inset-0 flex justify-center items-center">
                    <div className="bg-white rounded-md p-4 w-full max-w-xl relative">
                        <button role="button" className="absolute top-2 right-3 py-2 px-4 bg-red-500 text-white rounded-md" 
                            onClick={() => setShowModal(false)}>
                            Close
                        </button>
                        
                         <section className="space-y-2">
                            <h3 className="font-semibold">{ selectedUser.name }</h3>
                            <p className="text-xs italic">@{ selectedUser.username }</p>
                            <p className="text-sm">{ selectedUser.email }</p>    
                            <p className="text-sm">{ selectedUser.phone }</p>    
                            <p className="text-sm">
                                { selectedUser.address.suite }, { selectedUser.address.street }, { selectedUser.address.city }
                            </p>    
                        </section> 
                    </div>
                </div>
            </div> }

        </div>
    )
}

export default Contact;