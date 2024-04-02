"use client"
import style from './page.module.css';
import { MdDeleteOutline } from "react-icons/md";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from '@/app/redux/Slices/cartSlice';
import Swal from 'sweetalert2'
import Image from 'next/image';
const page = () => {
    const dispatch = useDispatch()
    const cartstate = useSelector((state => state.cart))
    const toalPrice = cartstate.reduce((acc, prod) => {
        acc += prod.Priza * prod.qty
        return acc
    }, 0)
    const handleMdal = () => {

        Swal.fire({
            icon: 'info',
            title: 'Are you sure?',
            text: 'This action cannot be undone.',
            showCancelButton: true,
            confirmButtonText: 'Place Order',
            cancelButtonText: 'cancel Prder',
            customClass: {
                confirmButton: 'confirm-button-class',
                title: 'title-class',
                icon: 'icon-class'
            },
            html: `
       <div class="mb-3">
         <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name">
        </div>
       <div class="mb-3">
         <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Phone">
        </div>
        <div class="mb-3">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Address"></textarea>
        </div>
      `,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
            } else if (result.isDismissed) {
                Swal.fire('Cancelled', 'You canceled the order :)', 'error');
            }
        });
    }
    return (
        <>
            <div className="container" style={{ minHeight: '78vh' }}>
                <div className="row">
                    <div className="col-12 col-md-8 table-responsive details">
                        <table class="table align-middle table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">quantity</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartstate.map((x, ind) => {
                                    return (

                                        <tr>
                                            <th scope="row">
                                                <td>
                                                    <Image src={x.image} width={100} height={100} alt='product' />
                                                </td>
                                            </th>
                                            <td>{x.Title}</td>
                                            <td>{x.Priza}</td>
                                            <td>{x.qty}</td>
                                            <td>{x.qty * x.Priza}</td>
                                            <td><MdDeleteOutline onClick={() => dispatch(deleteFromCart(x))} className={style.delete} /></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div id={style.cart} className="col-12 col-md-4 text-center p-3">
                        <h2>Cart</h2>
                        <div className="d-flex flex-column gap-3 mt-3">
                            <div className="d-flex justify-content-between fs-3">
                                <span>items</span>
                                <span>{cartstate.length}</span>
                            </div>
                            <div className="d-flex justify-content-between fs-3">
                                <span>Total</span>
                                <span>{toalPrice.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between flex-column flex-md-row gap-3 mt-3">
                                <button className={`${style.button}`} onClick={handleMdal}>Pay on delivery</button>
                                <button className={`${style.button}`}>pay now</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default page;
