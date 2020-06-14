import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import flower from '../Mehl.jpg';

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            name: "",
            amount: "",
            purchase_date: "",
            vailid_unitil: ""
        }
    }

    addProduct(event){
        this.props.add(this.state.name, this.state.amount, this.state.purchase_date, this.state.vailid_unitil);
        this.props.navigate();
    }

    handleClick(event) {
        this.props.navigate();
    }

    handleInput(event) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.id]: value
        })
    }

    render() {

        return (
            <div>
                {/*Picture*/}
                <img src={flower} alt="Produkt-Bild" />
                {/*Form*/}
                <form>
                <TextField
                    id="name"
                    label="Titel"
                    margin="dense"
                    variant="outlined"
                    onChange={this.handleInput}
                />
                <br />
                <TextField
                    id="amount"
                    label="Anzahl"
                    margin="dense"
                    variant="outlined"
                    onChange={this.handleInput}
                />
                <br />
                <TextField
                    id="purchase_date"
                    label="Eingekauft am"
                    margin="dense"
                    variant="outlined"
                    onChange={this.handleInput}
                />
                <br />
                <TextField
                    id="vailid_unitil"
                    label="Gültig bis"
                    margin="dense"
                    variant="outlined"
                    onChange={this.handleInput}
                />
                <br />
                {/*Add button*/}
                <Button
                    id="SaveButton"
                    variant="contained"
                    color="primary"
                    onClick={this.addProduct}>
                    Speichern
                </Button>
                </form>
                <Button
                    id="SaveButton"
                    variant="contained"
                    color="secondary"
                    onClick={this.handleClick}>
                    Zurück
                </Button>
            </div>
        );
    }
}

export default AddProduct;
