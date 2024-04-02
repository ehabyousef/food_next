import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { FaGithub, FaInstagram } from "react-icons/fa";
import logo from '../../assets/Logo.png';
import Image from 'next/image';
import style from './Footer.module.css';
import Link from 'next/link';
const Footer = () => {
    return (
        <div className='mt-3' style={{ background: 'var(--dark)' }}>
            <div className="container p-3 d-flex flex-column flex-sm-row gap-3 gap-sm-0 justify-content-between align-items-center text-white">
                <div className={`d-flex align-items-center p-3 gap-3`}>
                    <Image src={logo} width={50} height={50} alt='logo' />
                    <span className='fs-3 fw-bold'>Pino</span>
                </div>
                <span className='fs-4'>All Right Reserved &copy; Ihab Y.</span>
                <div className="d-flex align-items-center justify-content-center gap-3">
                    <Link className={style.icon} href='/'> <ImFacebook2 size={40} /></Link>
                    <Link className={style.icon} href='/'><FaInstagram size={40} /></Link>
                    <Link className={style.icon} href='/'> <FaGithub size={40} /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer