import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import flower from '../Mehl.jpg';

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.navigate();
      }

    render() {

        return (
            <div>
                {/*Picture*/}
                <img src={flower} alt="Produkt-Bild" />
                {/*Form*/}
                <form>
                <TextField
                    id="productTitle-input"
                    label="Titel"
                    margin="dense"
                    variant="outlined"
                />
                <br />
                <TextField
                    id="productCount-input"
                    label="Anzahl"
                    margin="dense"
                    variant="outlined"
                />
                <br />
                <TextField
                    id="buyDate-input"
                    label="Eingekauft am"
                    margin="dense"
                    variant="outlined"
                />
                <br />
                <TextField
                    id="dueDate-input"
                    label="Gültig bis"
                    margin="dense"
                    variant="outlined"
                />
                <br />
                {/*Add button*/}
                <Button
                    id="SaveButton"
                    variant="contained"
                    color="primary">
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
