'use client'
import axios from 'axios';
import React, { useState } from 'react';

const Page = () => {
    const [productId, setProductId] = useState('');

    const deleteProduct = (id) => {
        axios
            .delete(`http://localhost:8000/Data/${id}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        console.log(id);
    };
    const handleDelete = (e) => {
        e.preventDefault();
        deleteProduct(productId);
    };

    return (
        <div className="p-4">
            <form onSubmit={handleDelete} className="d-flex flex-column">
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                        name="id"
                    />
                    <label htmlFor="name">Product Id</label>
                </div>
                <button type="submit" className="btn btn-danger px-3" style={{ width: 'max-content' }}>
                    Delete
                </button>
            </form>
        </div>
    );
};

export default Page;