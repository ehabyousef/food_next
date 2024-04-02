"use client"
import React, { useEffect, useState } from 'react'
import style from './Header.module.css';
import Image from 'next/image';
import logo from '../../assets/Logo.png';
import { BsCartPlus } from "react-icons/bs";
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
const Header = () => {
    const cart = useSelector((state) => state.cart)
    const [appear, setappear] = useState(false)
    const pathname = usePathname()
    return (
        <div className='d-flex justify-content-between align-items-center p-3'>
            <div className={`d-flex align-items-center  ${style.logo}`}>
                <Image src={logo} width={50} height={50} alt='logo' />
                <span className='fs-3 fw-bold'>Pino</span>
            </div>
            <ul id={style.menu} className='d-none d-md-flex justify-content-center align-items-center
             list-unstyled gap-5 '>
                <Link href={'/'}>
                    <li>Home</li>
                </Link>
                <Link href={'/pizaa'}>
                    <li>Menu</li>
                </Link>
                <li>Contact</li>
            </ul>
            <div className='d-md-none'>
                <input onClick={() => setappear(!appear)} hidden className={style.check_icon} id="check-icon" name="check-icon" type="checkbox" />
                <label className={style.icon_menu} htmlFor="check-icon">
                    <div className={`${style.bar} ${style.bar_1}`} />
                    <div className={`${style.bar} ${style.bar_2}`} />
                    <div className={`${style.bar} ${style.bar_3}`} />
                </label>
            </div>
            {appear ?
                <div className={style.pop}>
                    <ul id={style.menu} className='d-flex flex-column list-unstyled gap-5'>
                        <Link href={'/'}>
                            <li>Home</li>
                        </Link>
                        <Link href={'/pizaa'}>
                            <li>Menu</li>
                        </Link>
                        <Link href={'/pizaa'}>
                            <li>Contact</li>
                        </Link>
                    </ul>
                </div>
                : ""}
            {/* right side  */}
            <div className="d-flex align-items-center gap-4">
                <div className="position-relative d-flex " style={{ cursor: 'pointer' }}>
                    <Link href={'/Cart'}>
                        <BsCartPlus size={45} color='#2e2e2e' />
                    </Link>
                    <div style={{ background: "var(--red)", right: '-0.5rem' }} className="position-absolute d-flex text-white rounded-circle w-50 h-50 justify-content-center align-items-center p-2" >{cart.length}</div>
                </div>
            </div>

        </div>

    )
}

export default Header