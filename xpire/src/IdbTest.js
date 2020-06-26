import React, { useState, useEffect } from 'react'
import { addProduct, deleteProductById, clearTable, getAllProducts, updateProductById } from './Idb'

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
    const handleUpdate = async (id, newName) => {
        await updateProductById(id, {name: newName}).then(function (updated) {
            if (updated)
              console.log ("update success");
            else
              console.log ("Nothing was updated - error");
          });
    }

    return (
        <div>
            <button onClick={handleAdd}>Add Product</button>
            <button onClick={handleClear}>Delete all Products</button>
            <button onClick={handleGetAll}>Refresh Data</button>
            <ul>
                {allProducts ? allProducts.map((product) =>
                    <li key={product.id}><span>Name: {product.name}</span><span> ID: {product.id} </span>
                    <button onClick={() => handleDelete(product.id)}>Delete</button>
                    <button onClick={() => handleUpdate(product.id, "UpdateTest")}></button></li>
                ) : null}
            </ul>
        </div>
    )
}

export default IdbTest