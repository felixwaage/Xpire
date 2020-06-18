import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import flower from '../Mehl.jpg';
import ArrowIcon from '@material-ui/icons/KeyboardBackspace';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    root: {
        marginTop: "56px"
    },
    img: {
        height: '15rem',
        backgroundImage: "url(" + flower + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "auto 80%"
    },
    imgOverlay: {
        height: '15rem',
        backgroundColor: "hsla(0, 0%, 0%, 0.23)"
    }, 
    arrowIcon: {
        float: 'left',
        marginLeft: "16px",
        marginTop: "10px",
        color: "white"
    }, 
    deleteIcon: {
        float: 'right',
        marginRight: "28px",
        marginTop: "10px",
        color: "white"
    },
    form: {
        margin: '1.6rem'
    },
    textField: {
        width: '100%'
    },
    submitButton: {
        float: 'right',
        marginTop: '1rem'
    } 
});

class ShowProduct extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.state = {
            name: this.props.product.name,
            amount: this.props.product.amount,
            purchase_date: this.props.product.purchase_date,
            vailid_until: this.props.product.vailid_until
        }
    }

    addProduct(event){
        this.props.add(this.state.name, this.state.amount, this.state.purchase_date, this.state.vailid_until);
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

    handleClickDelete(event) {
        this.props.delete(this.props.product.id);
        this.props.navigate();
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.img}>
                    <div className={classes.imgOverlay}>
                        <ArrowIcon 
                            edge="end"
                            className={classes.arrowIcon}
                            onClick={this.handleClick}
                        />
                        <DeleteIcon 
                            edge="end"
                            className={classes.deleteIcon}
                            onClick={this.handleClickDelete}
                        />
                    </div>
                </div>
                <form className={classes.form}>
                    <TextField
                        id="name"
                        label="Titel"
                        margin="dense"
                        variant="outlined"
                        value={this.state.name}
                        className={classes.textField}
                        onChange={this.handleInput}
                    />
                    <br />
                    <TextField
                        id="amount"
                        label="Anzahl"
                        margin="dense"
                        variant="outlined"
                        value={this.state.amount}
                        className={classes.textField}
                        onChange={this.handleInput}
                    />                           
                    <br />
                    <TextField
                        id="purchase_date"
                        label="Eingekauft am"
                        margin="dense"
                        variant="outlined"
                        value={this.state.purchase_date}
                        className={classes.textField}
                        onChange={this.handleInput}
                    />
                    <br />
                    <TextField
                        id="vailid_until"
                        label="Gültig bis"
                        margin="dense"
                        variant="outlined"
                        value={this.state.vailid_until}
                        className={classes.textField}
                        onChange={this.handleInput}
                    />
                    <br />
                    
                    <Button
                        id="SaveButton"
                        variant="contained"
                        color="primary"
                        className={classes.submitButton}
                        // todo here we need to update
                        onClick={this.addProduct}>
                        Speichern
                    </Button>
                </form>                           
            </div>
        );
    }
}

export default withStyles(styles)(ShowProduct);
