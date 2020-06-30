import Dexie from 'dexie'

const db = new Dexie('Xpire');
db.version(1).stores({
    products: "++id,name,amount,purchaseDate,expireDate, img_url"
});

export const addProduct = async (name, amount, purchaseDate, expireDate, img_url=undefined) => {
    await db.products.add({
        name: name,
        amount: amount,
        purchaseDate: purchaseDate,
        expireDate: expireDate,
        img_url: img_url
    });
    return await db.products.toArray().then(function (arr) {
        return arr;
    });
}
export const updateProductById = async (id, product) => {
    console.log(product) //has to be one or multiple key(s) + value(s) according to database table attributes
    await db.products.update(id, product);
}

export const clearTable = async (tableName) => {
    await db.table(tableName).clear().catch(() => {
        console.log('scheise')
    })
}

export const deleteProductById = async (theId) => {
    await db.products.where('id').equals(theId).delete()
}

export const getProductById = async (id) => {
    return await db.products.get(id).then(function (prod) {
        return prod
    }).catch((err) => {
        return console.log(err)
    })
}

export const getAllProducts = async () => {
    return await db.products.toArray().then(function (arr) {
        // console.log(arr);
        return arr;
    }).catch((err) => {
        return console.log(err)
    })
}

export const createDatabase = async () => { //use for debugging 
    const db = new Dexie('Xpire');
    db.version(1).stores({
        products: "++id,name,amount,purchaseDate,expireDate, img_rl"
    });
}