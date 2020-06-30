import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import ArrowIcon from '@material-ui/icons/KeyboardBackspace';
import DeleteIcon from '@material-ui/icons/Delete';
import { Redirect } from 'react-router';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

const styles = theme => ({
    root: {
        marginTop: "56px"
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
    datePicker: {
        width: '100%'
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
    },
    typography: {
        padding: theme.spacing(2)
    }
});

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickArrow = this.handleClickArrow.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.handleClickSave = this.handleClickSave.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.getProductInformationByBarcode = this.getProductInformationByBarcode.bind(this);
        this.showErrorPopOver = this.showErrorPopOver.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.setBackgroundImg = this.setBackgroundImg.bind(this);
        this.handleClickUpdate = this.handleClickUpdate.bind(this);
        this.state = {
            redirect: false,
            barcode: "",
            product_id: this.props.product.id,
            product_name: this.props.product.name,
            amount: this.props.product.amount,
            purchaseDate: this.props.product.purchaseDate,
            expireDate: this.props.product.expireDate,
            img_url: this.props.product.img_url,
            anchorEl: {},
            open: false,
            id: 'simple-popover',
            simple_popover_message: "",
            imgStyle: {
                height: '15rem',
                backgroundImage: "url(" + this.props.product.img_url + ")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "auto 100%"
            }
        }
    }

    setBackgroundImg(img_url){
        this.setState({
            imgStyle: {
                ...this.state.imgStyle,
                backgroundImage: "url(" + img_url + ")",
            },
            img_url: img_url
        })
    }

    showErrorPopOver(message,target){
        this.setState({
            open: true,
            anchorEl: target,
            simple_popover_message: message
        })

    }

    handleClose() {
        this.setState({
            anchorEl: null,
            open: false
        })
    };

    getProductInformationByBarcode(event){
        var barcode = this.state.barcode;
        if(barcode){
           //check for valid barcode

           //var searchResult = {};
           if(barcode.length === 13 || barcode.length === 8) {
                fetch("https://world.openfoodfacts.org/api/v0/product/"+barcode+".json")
                .then(res => res.json())
                .then((result) => {
                    var product = result.product;
                    //check if product found
                    if(result.status === 1){
                        if(product.product_name) {
                            //this.props.update(product.product_name);
                            this.setState({
                                product_name: product.product_name,
                            })
                            this.setBackgroundImg(product.image_url);
                        } else {
                            // throw error
                            this.showErrorPopOver("Produktname nicht gefunden!",event.currentTarget);
                        }
                        
                    } else {
                        // throw error
                        this.showErrorPopOver("Das Produkt existiert nicht!",event.currentTarget);
                    }
                },
                (error) => {
                    this.showErrorPopOver("Prüfe deine Internetverbindung!",event.currentTarget);
                })
           } else {
            this.showErrorPopOver("Barcode nicht korrekt!",event.currentTarget);
           }
        } else {
            this.showErrorPopOver("Bitte Barcode eingeben!",event.currentTarget);
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
        if (Object.keys(this.props.product).length === 0){
            this.props.add(this.state.product_name, this.state.amount, this.state.purchaseDate, this.state.expireDate, this.state.img_url);
        }
        this.setState({redirect: true});
        this.props.reset();
    }

    handleDateChange(event, id) {
        const date = event.toISOString().split('T')[0];       
        this.setState({
            ...this.state,
            [id]: date
        })    
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
            amount: this.state.amount,
            purchaseDate: this.state.purchaseDate,
            expireDate: this.state.expireDate
        }
        this.props.productUpdate(this.state.product_id, product);

        console.log("clicked")
    }

    render() {
        const { classes } = this.props;

        if (this.state.redirect) {
            return <Redirect push to="/Xpire" />;
        }

        return (
            <div className={classes.root}>
                <div className={classes.img} style={this.state.imgStyle}>
                    <div className={classes.imgOverlay}>
                        <ArrowIcon 
                            edge="end"
                            className={classes.arrowIcon}
                            onClick={this.handleClickArrow}
                        />
                        { Object.keys(this.props.product).length !== 0 && <DeleteIcon 
                            edge="end"
                            className={classes.deleteIcon}
                            onClick={this.handleClickDelete}
                        />}
                    </div>
                </div>


                <Popover
                    id={this.state.id}
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                >
                    <Typography className={classes.typography}>{this.state.simple_popover_message}</Typography>
                </Popover>  



                <form className={classes.form}>
                    { Object.keys(this.props.product).length === 0 && <div>
                        <TextField
                            id="barcode"
                            label="Barcode"
                            margin="dense"
                            variant="outlined"
                            value={this.state.barcode}
                            className={classes.textField}
                            onChange={this.handleInput}
                        />
                        <br />
                        <Button
                            id="SearchButton"
                            variant="contained"
                            color="primary"
                            className={classes.submitButton}
                            onClick={this.getProductInformationByBarcode}>
                            Suchen
                        </Button>
                        <br />
                    </div>}
                    
                    <TextField
                        id="product_name"
                        label="Titel"
                        margin="dense"
                        variant="outlined"
                        value={this.state.product_name}
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
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            id="purchaseDate"
                            label="Eingekauft am"
                            margin="dense"
                            inputVariant="outlined"
                            format="dd.MM.yyyy"
                            value={this.state.purchaseDate} 
                            className={classes.datePicker}
                            onChange={(event) => this.handleDateChange(event, "purchaseDate")}     
                        />                      
                    </MuiPickersUtilsProvider>                                        
                    <br />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            id="expireDate"
                            label="Gültig bis"
                            margin="dense"
                            inputVariant="outlined"
                            format="dd.MM.yyyy"
                            value={this.state.expireDate} 
                            className={classes.datePicker}
                            onChange={(event) => this.handleDateChange(event, "expireDate")}
                        />                      
                    </MuiPickersUtilsProvider>
                    <br />
           
                    {Object.keys(this.props.product).length === 0 && <Button
                        id="SaveButton"
                        variant="contained"
                        color="primary"
                        className={classes.submitButton}
                        onClick={this.handleClickSave}>
                        Speichern
                    </Button>}

                    {Object.keys(this.props.product).length !== 0 && <Button
                        id="UpdateButton"
                        variant="contained"
                        color="primary"
                        className={classes.submitButton}
                        onClick={this.handleClickUpdate}>
                        Ändern
                    </Button>}
                </form>                           
            </div>
        );
    }
}

export default withStyles(styles)(AddProduct);
