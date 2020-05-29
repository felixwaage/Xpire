import React, { Component } from 'react'
import loki from 'lokijs'

class Idb extends Component {

    componentDidMount() {
        let db = new loki("xpire.db", {
            autoload: true,
            autosave: true,
            autosaveInterval: 4000
        });

        let products = db.addCollection('products');
        products.insert({ name: 'Kartoffelpuffer', expireDate: "30.05.2020" });
        var select = products.findOne({ name: 'Kartoffelpuffer' });
        console.log(select);
        //console.log(db);
    }

    render() {
        return (
            <div>
                <p>Test</p>
            </div>
        )
    }
}

export default Idb
