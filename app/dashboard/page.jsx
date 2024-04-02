'use client'
import React from 'react'
import style from './page.module.css';
import { MdAddBusiness, MdOutlineDeleteSweep } from "react-icons/md";
import { FaRegUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useRouter } from 'next/navigation';
const page = () => {
    const userData = localStorage.getItem('userToken')
    console.log(userData);
    const router = useRouter();
    return (
        <>
        </>
    )
}

export default page