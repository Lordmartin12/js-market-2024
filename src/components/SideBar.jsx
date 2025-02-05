import React from 'react'
import { FaBars } from 'react-icons/fa6'

const SideBar = ({ onClose = () => {} }) => {
    return (
        <div>
            <section className='flex justify-end px-3 py-2'>
                <button onClick={() => onClose()} className="py-1 px-2 bg-primary text-white md:hidden">
                    <FaBars />
                </button>
            </section>
        </div>
    )
}

export default SideBar