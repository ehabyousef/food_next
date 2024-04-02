'use client'
import Joi from "joi";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import style from './page.module.css';
import Swal from "sweetalert2";
const page = () => {
    const router = useRouter();
    const [userValues, setuserValues] = useState([]);
    const [userDetails, setuserDetails] = useState({
        email: "",
        password: "",
    });
    const [alertfalse, setalertfalse] = useState(false);
    const [auth, setauth] = useState('')
    const getuser = (e) => {
        let myuser = { ...userDetails };
        myuser[e.target.name] = e.target.value;
        setuserDetails(myuser);
        console.log(userDetails);
    };

    async function submitLogin(e) {
        e.preventDefault();
        let validateForm = validateLogin(userDetails);
        if (validateForm.error) {
        } else {
            let isExist = false;
            userValues.forEach((ele) => {
                if (
                    ele.email === userDetails.email &&
                    ele.password === userDetails.password
                ) {
                    isExist = true;
                    setauth(ele)
                }
            });
            const userAllData = userValues.filter(
                (x) => x.email === userDetails.email
            );
            if (isExist) {
                localStorage.setItem("userToken", JSON.stringify(userAllData));
                handleAlert()
                console.log(userAllData[0].usertype);
                if (userAllData[0].usertype === 'user') {
                    router.push("/", { scroll: false });
                } else if (userAllData[0].usertype === 'admin') {
                    router.push("/dashboard/add", { scroll: false });
                }
            } else {
                setalertfalse(true);
            }
        }
    }

    function validateLogin() {
        let schema = Joi.object({
            email: Joi.string()
                .email({
                    minDomainSegments: 2,
                    tlds: { allow: ["com", "net"] },
                })
                .required(),
            password: Joi.string()
                .pattern(new RegExp("^[a-zA-Z0-9]{3,10}$"))
                .required(),
        });
        return schema.validate(userDetails, { abortEarly: false });
    }
    const handleAlert = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
        })
    }
    useEffect(() => {
        axios.get("http://localhost:7000/customers").then((res) => {
            setuserValues(res.data);
        }).catch((err) => console.log(err))
    }, [])
    return (
        <div className="container my-5 d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
            <div className={style.container}>
                <div className={style.heading}>Sign In</div>
                <form action className={style.form} onSubmit={submitLogin}>
                    <input onChange={getuser} className={style.input} type="email" name="email" id="email" placeholder="E-mail" />
                    <input onChange={getuser} className={style.input} type="password" name="password" id="password" placeholder="Password" />
                    <span className={style.forgot_password}><a href="#">Forgot Password ?</a></span>
                    <input className={style.login_button} type="submit" defaultValue="Sign In" />
                    <input onClick={() => router.push('/register')} className={style.login_button} type="button" defaultValue="Sign up" />
                </form>
            </div>
        </div>
    );
};
export default page