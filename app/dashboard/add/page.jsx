'use client'
import axios from 'axios'
import React, { useState } from 'react'
const page = () => {
    const [prod, setProd] = useState({ Title: '', Type: '', Priza: 0, qty: 1, image: 'https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?w=826&t=st=1703704276~exp=1703704876~hmac=71b8e36a1650ecce9ae5aa7fd6805135e472495203fdfd6d92f975882b96f8dd' })
    let handleChange = (e) => {
        const { name, value } = e.target;
        setProd(old => ({
            ...old, [name]: value
        }))
        console.log(prod)
    }
    const addprd = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/Data", prod)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <div className='p-4'>
            <form action="" className='d-flex flex-column' onSubmit={addprd}>
                {/* <div className="form-floating mb-3">
                    <input onChange={handleChange} value={prod.id} type="text" className="form-control" id="name" name="id" />
                    <label htmlFor="name"> Product Id</label>
                </div> */}
                <div className="form-floating mb-3">
                    <input onChange={handleChange} value={prod.Title} type="text" className="form-control" id="name" name="Title" />
                    <label htmlFor="name"> Product Title</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleChange} value={prod.Priza} type="number" className="form-control" id="floatingInput" name="Priza" />
                    <label htmlFor="floatingInput"> Product Price</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleChange} value={prod.Type} type="text" className="form-control" id="floatingInput" name="Type" />
                    <label htmlFor="floatingInput"> Product Type</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleChange} value={prod.image} type="text" className="form-control" id="floatingInput" name="image" />
                    <label htmlFor="floatingInput"> Product Image</label>

                </div>
                <button className="btn btn-danger px-3" style={{ width: 'max-content' }}>Add</button>
            </form>
        </div>
    )
}

export default page