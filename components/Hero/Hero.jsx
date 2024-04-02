'use client'
import React from 'react'
import style from './Hero.module.css';
import Image from 'next/image';
import { TbPhoneCall } from "react-icons/tb";
import cherry from '../../assets/Cherry.png';
import hero1 from '../../assets/HeroImage.png';
import pizza1 from '../../assets/p1.jpg';
import { useRouter } from 'next/navigation';

const Hero = () => {
    const router = useRouter()
    return (
        <div id={style.container} className="container my-3">
            <div className='row flex-column flex-md-row'>
                {/* left side  */}
                <div className="col-md-6 col-12 d-flex flex-column gap-4" >
                    <div id={style.cherry} className="d-flex align-items-center justify-content-center mt-5 p-3 fw-bold rounded-4 fs-6">
                        <span>more than faster</span>
                        <Image src={cherry} alt='ch' width={35} height={30} />
                    </div>
                    <div id={style.headtext} className="d-flex flex-column justify-content-center gap-2 text-capitalize">
                        <div>be the fastest</div>
                        <div>In Delivering</div>
                        <div>You <span style={{ color: 'var(--red)' }}>Pizza</span></div>
                    </div>
                    <span className='w-75 opacity-50 fw-medium' >
                        our mission is to fill you tummy with delicious food and with fast and good delivery
                    </span>
                    <button onClick={() => router.push('/login')} className={style.btn}>
                        get start
                    </button>
                </div>
                {/* left side  */}
                <div className="col-6 position-relative">
                    <div className='d-none d-md-block'>
                        <Image className={style.heroImg} src={hero1} alt='hero' layout='internisic' width={600} />
                    </div>
                    <div className={`d-none d-md-flex ${style.contact}`}>
                        <span>contact us</span>
                        <div>
                            <TbPhoneCall />
                        </div>
                    </div>
                    <div className={`d-none d-md-flex ${style.pizzImg}`}>
                        <div >
                            <Image src={pizza1} alt='pizza' width={100} />
                        </div>
                        <div className="d-flex flex-column gap-3 fw-bold">
                            <span>Italian Pizza</span>
                            <span>$ 10</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero