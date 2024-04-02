"use client";
import React, { useEffect, useState } from "react";
import style from "./page.module.css";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/Slices/prodSlice";
// Import statements

const Page = () => {
    const food = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const uniqueTypes = [...new Set(food.map((item) => item.Type))];
    const [filterButton, setFilterButton] = useState("");
    const [priceHandle, setPriceHandle] = useState("");
    const [filterdItems, setFilterdItems] = useState([]);

    const handleButtonClick = (type) => {
        if (filterButton === type) {
            setFilterButton("");
        } else {
            setFilterButton(type);
        }
        setPriceHandle('')
    };

    const handlePriceClick = (price) => {
        if (priceHandle === price) {
            setPriceHandle("");
        } else {
            setPriceHandle(price);
        }
    };

    const sortItemsByPrice = (order) => {
        const sortedItems = [...filterdItems].sort((a, b) => {
            return order === 'high' ? b.Priza - a.Priza : a.Priza - b.Priza;
        });
        setFilterdItems(sortedItems)
        if (order === 'normal') {
            setFilterdItems(food)
        }
    };
    console.log(priceHandle);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        const filteredItems = filterButton
            ? [...new Set(food.filter((x) => x.Type.toLowerCase() === filterButton))]
            : food;
        setFilterdItems(filteredItems);
    }, [filterButton, food]);

    return (
        <div className="container" style={{ minHeight: "78vh" }}>
            <div className="row my-5">
                <div className="col-12 col-lg-10 d-flex justify-content-center align-items-center flex-wrap gap-3">
                    {filterdItems.map((x, ind) => (
                        <div className={`rounded-3  ${style.cards}`} key={ind}>
                            <Link href={`/pizaa/${x.id}`}>
                                <Image
                                    src={x.image}
                                    alt="Food Image"
                                    className={style.img}
                                    width={300}
                                    height={250}
                                />
                                <div className="card-body d-flex flex-column gap-3 my-3">
                                    <h5 className="card-title fw-bold">{x.Title}</h5>
                                    <h4 className="card-title" style={{ color: "var(--red)" }}>
                                        {x.Priza} $
                                    </h4>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="clo-12 col-lg-2">
                    <h3>filter</h3>
                    <div className="cate my-3">
                        <h4 className="text-center" style={{ color: "var(--dark)" }}>
                            category
                        </h4>
                        <div className="d-flex flex-row flex-md-column gap-3 my-4">
                            {uniqueTypes.map((x, ind) => (
                                <button
                                    key={ind}
                                    onClick={() => handleButtonClick(x.toLowerCase())}
                                    className={`${filterButton === x ? style.active : ""} ${style.button}`}
                                >
                                    {x}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="cate my-3">
                        <h4 className="text-center" style={{ color: "var(--dark)" }}>
                            Price
                        </h4>
                        <div className="d-flex flex-row flex-md-column gap-3 my-4">
                            <button
                                onClick={() => { handlePriceClick('high'); sortItemsByPrice('high') }}
                                className={`${priceHandle === 'high' ? style.active : ""} ${style.button}`}
                            >
                                Higher
                            </button>
                            <button
                                onClick={() => { handlePriceClick('low'); sortItemsByPrice('low') }}
                                className={`${priceHandle === 'low' ? style.active : ""} ${style.button}`}
                            >
                                Lower
                            </button>
                            <button
                                onClick={() => { handlePriceClick('normal'); sortItemsByPrice('normal') }}
                                className={`${priceHandle === 'normal' ? style.active : ""} ${style.button}`}
                            >
                                Normal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;

