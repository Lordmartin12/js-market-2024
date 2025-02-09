import React from 'react'
import { FaProductHunt, FaTachometerAlt } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { clearAuth } from '../hooks/AuthUser'

const SideBar = ({ onClose = () => {} }) => {
    const logout = () => {
        clearAuth();
    }
    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <section className='flex justify-end px-3 py-2'>
                <button onClick={() => onClose()} className="py-1 px-2 bg-primary text-white md:hidden">
                    <FaBars />
                </button>

                <span className="text-5xl">
                    Pro-Market
                </span>
            </section>

            <section className='flex-grow w-full px-2'>
                <ul className='space-y-1'>
                    <li>
                        <Link to={`/admin/`} className='flex justify-start items-center w-full py-2 px-4 gap-2'>
                            <FaTachometerAlt /> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to={`/admin/products`} className='flex justify-start items-center w-full py-2 px-4 gap-2'>
                            <FaProductHunt /> Products
                        </Link>
                    </li>
                </ul>
            </section>

            <section className='w-full px-4 py-2'>
                <Link onClick={logout} to={'/'} className='py-1 px-2 bg-primary text-white rounded-md w-full block'>Logout</Link>
            </section>
        </div>
    )
}

export default SideBar