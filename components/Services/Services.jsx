import Image from 'next/image'
import React from 'react'
import s1 from '../../assets/s1.png';
import s2 from '../../assets/s2.png';
import s3 from '../../assets/s3.png';
const Services = () => {
    return (
        <div className='container'>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <span className='fs-5 fw-bold' style={{ color: "var(--red)" }}>What we serve</span>
                <span className='fs-1 fw-bold'>Your favourite food</span>
                <span className='fs-2 fw-bold'>delivery partner</span>
            </div>
            <div className="row d-flex flex-column flex-md-row gap-4 my-4 align-items-center justify-content-center">
                <div className=" col-12 col-md-3 d-flex flex-column align-items-center justify-content-center gap-2">
                    <Image src={s1} alt='del' width={200} height={200} />
                    <h4>Easy To Order</h4>
                    <p>you only need a few steps in food ordering</p>
                </div>
                <div className=" col-12 col-md-3 d-flex flex-column align-items-center justify-content-center gap-2">
                    <Image src={s2} alt='del' width={200} height={200} />
                    <h4>Easy To Order</h4>
                    <p>delivery is always in time even faster</p>
                </div>
                <div className=" col-12 col-md-3 d-flex flex-column align-items-center justify-content-center gap-2">
                    <Image src={s3} alt='del' width={200} height={200} />
                    <h4>Easy To Order</h4>
                    <p>not only fast for us quality is also number one</p>
                </div>
            </div>
        </div>
    )
}

export default Services