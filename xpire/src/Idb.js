import React, { useState } from 'react'
import Dexie from 'dexie'

export const addProduct = async (name, expireDate) => {
    const db = new Dexie("Xpire");
    db.version(1).stores({
        products: "++id,name,expireDate"
    });
    db.open().catch(function (err) {
        console.error (err.stack || err);
    });
    await db.products.add({
        name: name,
        expireDate: expireDate
    });
    await db.products.toArray().then(function (arr) {
        console.log(arr);
    });
}

export const clearTable = async (tableName) => {
    const db = new Dexie("Xpire");
    db.version(1).stores({
        products: "++id,name,expireDate"
    });
    await db.open().catch(function (err) {
        console.error (err.stack || err);
    });
    await db.table(tableName).clear();
    db.close();
}
export const deleteProduct = async (id) => {
    const db = new Dexie("Xpire");
    db.version(1).stores({
        products: "++id,name,expireDate"
    });
    await db.products.where('id').equals(id).delete();
}

function Idb() {
    //component for testing
    const [allProducts, setProducts] = useState([]);
    const db = new Dexie("Xpire");

    const handler = async () => {
        console.log("async handler")
        db.version(1).stores({
            products: "++id,name,expireDate"
        });
        db.open().catch(function (err) {
            console.error (err.stack || err);
        });
        await db.products.add({
            name: 'Kartoffel',
            expireDate: '23.08.3021'
        });
        await db.products.toArray().then(function (arr) {
            setProducts(arr);
        });
    }
    const addProduct = (productArray) => {
        setProducts(allProducts.concat(productArray));
    }

    const deleteAProduct = () => {
        db.products.where('id').equals(1);
    }
    const clearTable = async () => {
        await db.open().catch(function (err) {
            console.error (err.stack || err);
        });
        await db.table("products").clear();
        db.close();
    }

    return (
        <div>
            <button onClick={handler}>Test</button>
            <button onClick={clearTable}>Clear</button>
            <ul>
                {allProducts.map((product) =>
                    <li>{product.name}</li>
                ) }
            </ul>
        </div>
    )
}

export default Idb