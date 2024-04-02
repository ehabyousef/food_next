"use client"
import axios from 'axios';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import style from './id.module.css';
import arrLeft from '../../../assets/arrowLeft.png';
import arrRight from '../../../assets/arrowRight.png';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart, increaseQuantity } from '@/app/redux/Slices/cartSlice';
const PizzaDetails = () => {
    const [meal, setMeal] = useState([]);
    const [activeButton, setActiveButton] = useState('Medium');
    const [quantity, setquantity] = useState(1)
    const [exist, setexist] = useState(false)
    const params = useParams();
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const existAtCart = cart.find((x) => x.id === meal.id)
    const getMeal = () => {
        axios
            .get(`http://localhost:8000/Data/${params.pizzaid}`)
            .then((respo) => {
                console.log(respo.data);
                setMeal(respo.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getMeal();
        console.log(cart);
    }, []);

    const handleButtonClick = (size) => {
        setActiveButton(size);
    };
    const increaseQua = () => {
        setquantity((prevItems) => prevItems + 1)
    }
    const decreaseQua = () => {
        if (quantity === 1) {
            setquantity(1)
        }
        else {
            setquantity((prevItems) => prevItems - 1)
        }
    }
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '78vh ' }}>
            <div className="rounded-3 px-4 d-flex flex-column flex-lg-row gap-3 align-items-center">
                <Image src={meal.image} alt="Food Image" width={300} height={250} />
                <div className="card-body d-flex flex-column gap-4">
                    <h2 className="card-title fw-bold">{meal.Title}</h2>
                    <h4 className="card-title" style={{ color: 'var(--red)' }}>
                        {meal.Priza} $
                    </h4>
                    <div className="d-flex align-items-center fs-3 fw-bold">
                        Size:
                        <div className="d-flex flex-row flex-wrap mx-3 gap-4">
                            <button
                                onClick={() => handleButtonClick('Small')}
                                className={`${activeButton === 'Small' ? style.active : ''} ${style.button}`}
                            >
                                Small
                            </button>
                            <button
                                onClick={() => handleButtonClick('Medium')}
                                className={`${activeButton === 'Medium' ? style.active : ''} ${style.button}`}
                            >
                                Medium
                            </button>
                            <button
                                onClick={() => handleButtonClick('Large')}
                                className={`${activeButton === 'Large' ? style.active : ''} ${style.button}`}
                            >
                                Large
                            </button>
                        </div>
                    </div>
                    {exist ?
                        <div className="d-flex align-items-center fs-3 fw-bold">
                            Quantity :
                            <div className="d-flex gap-3 mx-5 fs-3 align-items-center">
                                <Image style={{ cursor: "pointer" }} onClick={decreaseQua} src={arrLeft} />
                                <span>{quantity}</span>
                                <Image
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                        increaseQua();
                                        dispatch(increaseQuantity(meal));
                                    }}
                                    src={arrRight}
                                />
                            </div>
                        </div>
                        :
                        ""}
                    {existAtCart ?
                        <button onClick={() => {
                            setexist(!exist)
                            dispatch(deleteFromCart(meal))
                        }} className={`w-50 ${style.button}`}>Remove From Cart</button>
                        :
                        <button onClick={() => {
                            setexist(!exist)
                            dispatch(addToCart(meal))
                        }} className={`w-50 ${style.button}`}>Add To Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default PizzaDetails;