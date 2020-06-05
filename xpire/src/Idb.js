import React, { Component } from 'react'
import loki from 'lokijs'

class Idb extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }


    componentDidMount() {
        let db = new loki("xpire.db", {
            autoload: true,
            autosave: true,
            autosaveInterval: 4000
        });

        let products = db.addCollection('products');
        products.insert({ name: 'Kartoffelpuffer', expireDate: "30.05.2020" });
        //var odin = users.findOne({ name: 'Thor' });
        console.log("Products: " + products.toString());
        console.log(db);
    }

    render() {
        return (
            <div>
                <p>Test</p>
                <input></input>
                <input></input>
                <button>Submit</button>
            </div>
        )
    }
}

export default Idb
