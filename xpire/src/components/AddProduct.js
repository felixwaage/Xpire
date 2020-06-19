import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import flower from '../Mehl.jpg';
import ArrowIcon from '@material-ui/icons/KeyboardBackspace';
import DeleteIcon from '@material-ui/icons/Delete';
import { addProduct } from '../Idb';
import { Redirect } from 'react-router';

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

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickArrow = this.handleClickArrow.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.handleClickSave = this.handleClickSave.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            redirect: false
        }
    }

    handleClickArrow(event) {
        this.setState({redirect: true});
        this.props.reset();
    }

    handleClickDelete(event) {
        this.props.delete(this.props.product.id);
        this.setState({redirect: true});
        this.props.reset();
    }

    handleClickSave(event){
        if (Object.keys(this.props.product).length == 0){
            this.props.add(this.state.name, this.state.amount, this.state.purchase_date, this.state.vailid_unitil);
        }
        this.setState({redirect: true});
        this.props.reset();
    }

    handleInput(event) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.id]: value
        })
    }

    render() {
        const { classes } = this.props;

        if (this.state.redirect) {
            return <Redirect push to="/" />;
        }

        return (
            <div className={classes.root}>
                <div className={classes.img}>
                    <div className={classes.imgOverlay}>
                        <ArrowIcon 
                            edge="end"
                            className={classes.arrowIcon}
                            onClick={this.handleClickArrow}
                        />
                        { !Object.keys(this.props.product).length == 0 && <DeleteIcon 
                            edge="end"
                            className={classes.deleteIcon}
                            onClick={this.handleClickDelete}
                        />}
                    </div>
                </div>
                <form className={classes.form}>
                    <TextField
                        id="name"
                        label="Titel"
                        margin="dense"
                        variant="outlined"
                        value={this.props.product.name}
                        className={classes.textField}
                        onChange={this.handleInput}
                    />
                    <br />
                    <TextField
                        id="amount"
                        label="Anzahl"
                        margin="dense"
                        variant="outlined"
                        value={this.props.product.amount}
                        className={classes.textField}
                        onChange={this.handleInput}
                    />                           
                    <br />
                    <TextField
                        id="purchase_date"
                        label="Eingekauft am"
                        margin="dense"
                        variant="outlined"
                        value={this.props.product.purchase_date}
                        className={classes.textField}
                        onChange={this.handleInput}
                    />
                    <br />
                    <TextField
                        id="vailid_unitil"
                        label="Gültig bis"
                        margin="dense"
                        variant="outlined"
                        value={this.props.product.vailid_until}
                        className={classes.textField}
                        onChange={this.handleInput}
                    />
                    <br />
           
                    <Button
                        id="SaveButton"
                        variant="contained"
                        color="primary"
                        className={classes.submitButton}
                        onClick={this.handleClickSave}>
                        Speichern
                    </Button>
                </form>                           
            </div>
        );
    }
}

export default withStyles(styles)(AddProduct);
