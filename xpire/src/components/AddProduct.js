import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import ArrowIcon from '@material-ui/icons/KeyboardBackspace';
import DeleteIcon from '@material-ui/icons/Delete';
import { Redirect } from 'react-router';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import BarcodeIcon from '@material-ui/icons/CropFree';
import InputAdornment from '@material-ui/core/InputAdornment';
//import Paper from '@material-ui/core/Paper';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Scanner from "./Scanner";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
    imgOverlay: {
        height: '100%',
        backgroundColor: "hsla(0, 0%, 0%, 0.23)"
    },
    arrowIcon: {
        marginLeft: "16px",
        marginTop: "10px",
        color: "white",
        position: "fixed"
    },
    deleteIcon: {
        marginRight: "16px",
        marginTop: "10px",
        color: "white",
        position: "fixed",
        right: "0"
    },
    datePicker: {
        width: '100%'
    },
    formContainer: {
        //marginTop: "208px",
        //backgroundColor: "white"
    },
    form: {
        padding: '1.6rem'
    },
    formControl: {
        width: '100%'
    },
    textField: {
        width: '100%'
    },
    submitButton: {
        float: 'right',
        marginTop: '1rem'
    },
    typography: {
        padding: theme.spacing(2)
    }
});

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.formatPurchaseDate = this.formatPurchaseDate.bind(this);
        this.handleClickArrow = this.handleClickArrow.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.handleClickSave = this.handleClickSave.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.getProductInformationByBarcode = this.getProductInformationByBarcode.bind(this);
        this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this);
        this.setBackgroundImg = this.setBackgroundImg.bind(this);
        this.setDate = this.setDate.bind(this);
        this.handleClickUpdate = this.handleClickUpdate.bind(this);
        this.onDetected = this.onDetected.bind(this);
        this.onStartScan = this.onStartScan.bind(this);
        this.state = {
            redirect: false,
            product_name: "",
            product_amount: 1,
            product_purchaseDate: [new Date()],
            product_expireDate: null,
            product_img_url: "",
            imgStyle: {
                //zIndex: "-1",
                //width: "100%",
                //position: "fixed",
                height: '13rem',
                backgroundImage: "url(" + this.props.products.img_url + ")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "auto 100%"
            },
            barcode: "",
            openSnackbar: false,
            id: 'simple-popover',
            simple_popover_message: "",
            result: null,
            camera: false,
            message: ""
        }
    }

    componentDidMount = () => {
        if (this.props.productID !== 0) {
            var product = this.props.products.find(e => e.id === this.props.productID);
            this.setState({
                product_name: product.name,
                product_amount: product.amount,
                product_purchaseDate: product.purchaseDate,
                product_expireDate: product.expireDate,
                product_img_url: product.img_url,
                imgStyle: {
                    ...this.state.imgStyle,
                    backgroundImage: "url(" + product.img_url + ")",
                }
            })
        }
    }

    setBackgroundImg(product_img_url) {
        this.setState({
            imgStyle: {
                ...this.state.imgStyle,
                backgroundImage: "url(" + product_img_url + ")",
            },
            product_img_url: product_img_url
        })
    }

    handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ openSnackbar: false })
    };

    getProductInformationByBarcode(event) {
        if (event.keyCode === 13 || event.keyCode === 9) {
            var barcode = this.state.barcode;
            if (barcode) {
                //check for valid barcode

                //var searchResult = {};
                if (barcode.length === 13 || barcode.length === 8) {
                    fetch("https://world.openfoodfacts.org/api/v0/product/" + barcode + ".json")
                        .then(res => res.json())
                        .then((result) => {
                            var product = result.product;
                            //check if product found
                            if (result.status === 1) {
                                if (product.product_name) {
                                    //this.props.update(product.product_name);
                                    this.setState({
                                        product_name: product.product_name,
                                    })
                                    this.setBackgroundImg(product.image_url);
                                } else {
                                    // throw error
                                    this.setState({ openSnackbar: true, message: "Produktname nicht gefunden!" })
                                }

                            } else {
                                // throw error
                                this.setState({ openSnackbar: true, message: "Das Produkt exitiert nicht!" })
                            }
                        },
                            (error) => {
                                this.setState({ openSnackbar: true, message: "Prüfe deine Internetverbindung!" })
                            })
                } else {
                    this.setState({ openSnackbar: true, message: "Barcode nicht korrekt!" })
                }
            } else {
                this.setState({ openSnackbar: true, message: "Bitte Barcode eingeben!" })
            }
        }
    }

    handleClickArrow(event) {
        this.setState({ redirect: true });
        this.props.refreshPage();
    }

    handleClickDelete(event) {
        this.props.delete(this.props.productID);
        this.setState({ redirect: true });
        this.props.refreshPage();
    }

    handleClickSave(event) {
        if (!this.state.product_name || !this.state.product_amount || !this.state.product_expireDate || !this.state.product_purchaseDate) {
            this.setState({ openSnackbar: true, message: "Bitte die Pflichtfelder ausfüllen." })
        } else {
            if (this.props.productID === 0) {
                this.state.product_purchaseDate = this.formatPurchaseDate(this.state.product_purchaseDate);
                this.props.add(this.state.product_name, this.state.product_amount, this.state.product_purchaseDate, this.state.product_expireDate, this.state.product_img_url);
            }
            this.setState({ redirect: true });
            this.props.refreshPage();
        }
    }

    formatPurchaseDate(string) {
        var date = new Date(string);
        var isoDate = date.toISOString().split('T')[0];
        return isoDate;
    }

    handleDateChange(event, id) {
        this.setDate(event, id);
    }

    async setDate(date, id) {
        const isoDate = date.toISOString().split('T')[0];
        await this.setState({ [id]: isoDate });
    }

    handleInput(event) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.id]: value
        })

    }

    handleClickUpdate(event) {
        var product = {
            name: this.state.product_name,
            amount: this.state.product_amount,
            purchaseDate: this.state.product_purchaseDate,
            expireDate: this.state.product_expireDate
        }
        this.props.productUpdate(this.props.productID, product);
        this.setState({ openSnackbar: true, message: "Daten wurden geändert!" })
    }

    onDetected(result) {
        this.setState({
            barcode: result,
            camera: false
        })
    }

    onStartScan(event) {
        this.setState({
            camera: !this.state.camera
        })
    }


    render() {
        const { classes } = this.props;

        if (this.state.redirect) {
            return <Redirect push to="/Xpire" />;
        }

        return (
            <div className={classes.root}>
                <div className={classes.toolbar} />
                <div className={classes.img} style={this.state.imgStyle}>
                    <div className={classes.imgOverlay}>
                        <ArrowIcon
                            edge="end"
                            className={classes.arrowIcon}
                            onClick={this.handleClickArrow}
                        />
                        {this.props.productID !== 0 && <DeleteIcon
                            edge="end"
                            className={classes.deleteIcon}
                            onClick={this.handleClickDelete}
                        />}
                    </div>
                </div>

                <div className={classes.formContainer}>
                    <form className={classes.form}>
                        {this.props.productID === 0 && <div>
                            <TextField
                                id="barcode"
                                label="Barcode"
                                margin="dense"
                                variant="outlined"
                                value={this.state.barcode}
                                className={classes.textField}
                                onChange={this.handleInput}
                                onKeyDown={this.getProductInformationByBarcode}

                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <BarcodeIcon
                                                onClick={this.onStartScan}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <div className="container">
                                {this.state.camera && <Scanner onDetected={this.onDetected} />}
                            </div>

                        </div>}

                        <TextField
                            required
                            id="product_name"
                            label="Titel"
                            margin="dense"
                            variant="outlined"
                            value={this.state.product_name}
                            className={classes.textField}
                            onChange={this.handleInput}
                        />
                        <br />
                        <FormControl variant="outlined" margin="dense" required className={classes.formControl}>
                            <InputLabel htmlFor="product_amount">Anzahl</InputLabel>
                            <Select
                                native
                                value={this.state.product_amount}
                                onChange={this.handleInput}
                                label="Anzahl"
                                inputProps={{
                                    name: 'Anzahl',
                                    id: 'product_amount',
                                }}
                            >
                                <option aria-label="None" value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                            </Select>
                        </FormControl>
                        <br />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                                required
                                id="product_purchaseDate"
                                label="Eingekauft am"
                                margin="dense"
                                inputVariant="outlined"
                                format="dd.MM.yyyy"
                                value={this.state.product_purchaseDate}
                                className={classes.datePicker}
                                onChange={(event) => this.handleDateChange(event, "product_purchaseDate")}
                            />
                        </MuiPickersUtilsProvider>
                        <br />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                                required
                                id="product_expireDate"
                                label="Gültig bis"
                                margin="dense"
                                inputVariant="outlined"
                                format="dd.MM.yyyy"
                                value={this.state.product_expireDate}
                                className={classes.datePicker}
                                onChange={(event) => this.handleDateChange(event, "product_expireDate")}
                            />
                        </MuiPickersUtilsProvider>
                        <br />

                        {this.props.productID === 0 && <Button
                            id="SaveButton"
                            variant="contained"
                            color="primary"
                            className={classes.submitButton}
                            onClick={this.handleClickSave}>
                            Speichern
                    </Button>}

                        {this.props.productID !== 0 && <Button
                            id="UpdateButton"
                            variant="contained"
                            color="primary"
                            className={classes.submitButton}
                            onClick={this.handleClickUpdate}>
                            Ändern
                    </Button>}
                    </form>
                </div>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.openSnackbar}
                    autoHideDuration={6000}
                    onClose={this.handleCloseSnackbar}
                    message={this.state.message}
                    action={
                        <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleCloseSnackbar}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    }
                />
            </div>
        );
    }
}

export default withStyles(styles)(AddProduct);