import React, { useState, useEffect } from 'react'
import { addProduct, deleteProductById, clearTable, getAllProducts } from './Idb'

function IdbTest() {
    //component for testing the IDB
    const [allProducts, setProducts] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            await getAllProducts().then((arr) => {
                setProducts(arr)
            })
        }
        fetch();
    })

    const handleAdd = async () => {
        await addProduct('Test', 'Test', 'Test', 'Test').then((arr) => {
            setProducts(arr);
        })
    }

    const handleDelete = async (id) => {
        await deleteProductById(id)
    }

    const handleClear = async () => {
        await clearTable('products');
        await getAllProducts().then((arr) => {
            setProducts(arr)
        })
    }

    const handleGetAll = async () => {
        await getAllProducts().then((arr) => {
            setProducts(arr)
        })
    }

    return (
        <div>
            <button onClick={handleAdd}>Add Product</button>
            <button onClick={handleClear}>Delete all Products</button>
            <button onClick={handleGetAll}>Refresh Data</button>
            <ul>
                {allProducts.map((product) =>
                    <li key={product.id}><span>Name: {product.name}</span><span> ID: {product.id} </span><button onClick={() => handleDelete(product.id)}>Delete</button></li>
                )}
            </ul>
        </div>
    )
}

export default IdbTest