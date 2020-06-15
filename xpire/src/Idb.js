import React, { useState } from 'react'
import Dexie from 'dexie'

function Idb() {

    const [allProducts, setProducts] = useState([]);
    const db = new Dexie();

    const handler = async () => {
        db.version(1).stores({
            products: "++id,name,expireDate"
        });
        await db.products.add({
            name: 'Kartoffel',
            expireDate: '23.08.3021'
        });
        setProducts(db.products);
        await db.products.toArray().then(function (arr) {
            console.log(arr);
            setProducts(arr);
        });
    }

    const deleteAProduct = () => {
        db.products.where('id').equals(1);
    }

    return (
        <div>
            <button onClick={handler}>Test</button>
            <button onClick={deleteAProduct}>Delete</button>
            <ul>
                {allProducts.map((product) =>
                    <li>{product.name}</li>
                )}
            </ul>
        </div>
    )
}

export default Idb

