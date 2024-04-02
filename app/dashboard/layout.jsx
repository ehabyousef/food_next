'use client'
import React, { useState } from 'react'
import style from './page.module.css';
import { MdAddBusiness, MdOutlineDeleteSweep } from "react-icons/md";
import { FaRegUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useRouter } from 'next/navigation';
const dashLayout = ({ children }) => {
    const userData = localStorage.getItem('userToken')
    console.log(userData);
    const [active, setactive] = useState('add')
    const router = useRouter();
    return (
        <div className='container' style={{ minHeight: "78vh" }}>
            <div className="row">
                <div className="col-3 rounded-3 py-4 px-0 ps-2 text-white text-center h-100" style={{ backgroundColor: "var(--black)", minHeight: "78vh" }}>
                    <span className='my-3'><FaRegUserCircle size={50} style={{ fill: 'var(--red)' }} /></span>
                    <h1 className='my-4'>Ehab</h1>
                    <div className="d-flex flex-column gap-5 my-3">
                        <div onClick={() => { router.push('/dashboard/add'); setactive('add') }} className={`d-flex justify-content-between fs-5 px-3 align-items-center w-100 ${active === 'add' ? style.active : ''}`} style={{ cursor: 'pointer' }}>
                            <MdAddBusiness size={50} />
                            Add Product
                        </div>
                        <div onClick={() => { router.push('/dashboard/delete'); setactive('del') }} className={`d-flex justify-content-between fs-5 px-3 align-items-center w-100 ${active === 'del' ? style.active : ''}`} style={{ cursor: 'pointer' }}>
                            <MdOutlineDeleteSweep size={50} />
                            Delete Product
                        </div>
                        <div onClick={() => { router.push('/login'); localStorage.removeItem('userToken') }} className={`d-flex justify-content-evenly align-items-center w-100`} style={{ cursor: 'pointer' }}>
                            <FaSignOutAlt size={50} />
                            Sign Out
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    {children}
                </div>
            </div>
        </div >
    )
}

export default dashLayout