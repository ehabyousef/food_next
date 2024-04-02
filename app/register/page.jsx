"use client";
import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import style from "./page.module.css";
import Swal from "sweetalert2";
import Link from "next/link";
const page = () => {
    const router = useRouter();
    const [isLoading, setisLoading] = useState(false);
    const [errorList, seterrorList] = useState([]);
    const [user, setuser] = useState({
        name: "",
        email: "",
        password: "",
        usertype: "user",
    });
    const getuser = (e) => {
        let myuser = { ...user };
        myuser[e.target.name] = e.target.value;
        setuser(myuser);
        console.log(user);
    };
    function handleregister(e) {
        e.preventDefault();
        setisLoading(true);
        let validateForm = validateRegister(user);
        if (validateForm.error) {
            setisLoading(false);
            seterrorList(validateForm.error.details);
            console.log(validateForm);
        } else {
            axios.post("http://localhost:7000/customers", user).then((resp) => {
                setisLoading(false);
                handleAlert()
                router.push('/login')
                console.log(resp);
            }
            ).catch((err) => {
                console.log("errrrrrrrrrrrrrror");
                setisLoading(false);
                console.log(err);
            })
        }
    }
    function validateRegister() {
        let schema = Joi.object({
            name: Joi.string().alphanum().min(3).max(8).required(),
            email: Joi.string()
                .email({
                    minDomainSegments: 2,
                    tlds: { allow: ["com", "net"] },
                })
                .required(),
            password: Joi.string()
                .pattern(new RegExp("^[a-zA-Z0-9]{3,10}$"))
                .required(),
            usertype: [
                Joi.string(),
            ],
        });
        return schema.validate(user, { abortEarly: false });
    }
    const handleAlert = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Signed up successfully'
        })
    }
    return (
        <div>
            <div className="container my-3 d-flex align-items-center justify-content-center position-relative" style={{ minHeight: "77vh" }}>
                <div className={style.container}>
                    <div className={style.heading}>Sign up</div>
                    <form action className={style.form} onSubmit={handleregister}>
                        <input required onChange={getuser} className={style.input} type="name" name="name" id="name" placeholder="Name" />
                        <input required onChange={getuser} className={style.input} type="email" name="email" id="email" placeholder="E-mail" />
                        <input required onChange={getuser} className={style.input} type="password" name="password" id="password" placeholder="Password" />
                        <span className={style.forgot_password}><Link href="/login">have account ➡️ log in </Link></span>
                        <h5>Your Rule :</h5>
                        <div className={style.radio_inputs}>
                            <label>
                                <input
                                    className={style.radio_input}
                                    defaultChecked
                                    onClick={getuser}
                                    value="admin"
                                    type="radio"
                                    name="usertype"
                                />
                                <span className={style.radio_tile}>
                                    <span className={style.radio_icon}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-person-circle"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path
                                                fill-rule="evenodd"
                                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                                            />
                                        </svg>
                                    </span>
                                    <span className={style.radio_label}>User</span>
                                </span>
                            </label>
                            <label>
                                <input
                                    className={style.radio_input}
                                    onClick={getuser}
                                    value="user"
                                    type="radio"
                                    name="usertype"
                                />
                                <span className={style.radio_tile}>
                                    <span className={style.radio_icon}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-person-workspace"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                            <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z" />
                                        </svg>
                                    </span>
                                    <span className={style.radio_label}>Admin</span>
                                </span>
                            </label>
                        </div>
                        <input className={style.login_button} type="submit" defaultValue="Sign Up" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;
