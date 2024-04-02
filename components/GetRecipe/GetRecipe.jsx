"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import style from './Get.module.css';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/app/redux/Slices/prodSlice';
const GetRecipe = () => {
    const food = useSelector((state) => state.products)
    console.log(food);
    const dipatch = useDispatch()
    useEffect(() => {
        dipatch(fetchProducts())
    }, [])

    return (
        <div className='container'>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column justify-content-between" style={{ minHeight: "130px" }}>
                    <h6 className='text-capitalize' style={{ color: 'var(--red)' }}>our menu</h6>
                    <div className="d-flex flex-column">
                        <h3>Menu That Always</h3>
                        <h3>Make You Fall In Love</h3>
                    </div>
                </div>
                <div className="button">
                    <Link href='/pizaa'>
                        <button className={style.button}>Show all</button>
                    </Link>
                </div>
            </div>
            <div className="row gap-4 flex-column flex-md-row flex-wrap align-items-center justify-content-center my-5">
                {food.slice(0, 6).map((x, ind) => {
                    return (
                        <div className={`col-10 col-md-3 rounded-3 d-flex flex-column gap-3 ${style.cards}`} id={ind}>
                            <Link href={`/pizaa/${x.id}`}>
                                <Image
                                    src={x.image}
                                    alt='Food Image'
                                    className={style.img}
                                    width={300}
                                    height={250}
                                />
                                <div class="card-body d-flex flex-column gap-3">
                                    <h5 class="card-title fw-bold">{x.Title}</h5>
                                    <h4 class="card-title" style={{ color: 'var(--red)' }}>{x.Priza} $</h4>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GetRecipe