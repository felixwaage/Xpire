import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import ArrowIcon from '@material-ui/icons/KeyboardBackspace';
import DeleteIcon from '@material-ui/icons/Delete';
import { Redirect } from 'react-router';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import BarcodeIcon from '@material-ui/icons/CropFree';
import InputAdornment from '@material-ui/core/InputAdornment';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Scanner from "./Scanner";

const styles = theme => ({
    toolbar: theme.mixins.toolbar, 
    imgOverlay: {
        height: '15rem',
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
        this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this);
        this.setBackgroundImg = this.setBackgroundImg.bind(this);
        this.setDate = this.setDate.bind(this);
        this.handleClickUpdate = this.handleClickUpdate.bind(this);
        this.onDetected = this.onDetected.bind(this);
        this.onStartScan = this.onStartScan.bind(this);
        this.state = {
            redirect: false,
            product_name: "",
            product_amount: "",
            product_purchaseDate: "",
            product_expireDate: "",
            product_img_url: "",
            imgStyle: {
                height: '15rem',
                backgroundImage: "url(" + this.props.products.img_url + ")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "auto 100%"
            },
            barcode: "",
            anchorEl: {},
            open: false,
            openSnackbar: false,
            id: 'simple-popover',
            simple_popover_message: "",
            result: null,
            camera: false
        }
    }

    componentDidMount = () => {
        if (this.props.productID !== 0){
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

    setBackgroundImg(product_img_url){
        this.setState({
            imgStyle: {
                ...this.state.imgStyle,
                backgroundImage: "url(" + product_img_url + ")",
            },
            product_img_url: product_img_url
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

    handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        this.setState({openSnackbar: false})
    };

    getProductInformationByBarcode(event){
        if(event.keyCode == 13){
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
    }

    handleClickArrow(event) {
        this.setState({redirect: true});
        this.props.refreshPage();
    }

    handleClickDelete(event) {
        this.props.delete(this.props.productID);
        this.setState({redirect: true});
        this.props.refreshPage();
    }

    handleClickSave(event){
        if(!this.state.product_purchaseDate){
            this.setDate(new Date(), "purchaseDate");
        }
        if(!this.state.product_expireDate){
            this.setDate(new Date(), "expireDate");
        }
        if (this.props.productID === 0 ){
            this.props.add(this.state.product_name, this.state.product_amount, this.state.product_purchaseDate, this.state.product_expireDate, this.state.product_img_url);
        }
        this.setState({redirect: true});
        this.props.refreshPage();
    }

    handleDateChange(event, id) {
        this.setDate(event, id);   
    }

    async setDate(date, id){
        const isoDate = date.toISOString().split('T')[0];
        await this.setState({[id]: isoDate});  
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
        this.setState({openSnackbar: true})
    }

    onDetected(result) {
        this.setState({ barcode: result,
                        camera: false })
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
                <div className={classes.toolbar}/>
                <div className={classes.img} style={this.state.imgStyle}>
                    <div className={classes.imgOverlay}>
                        <ArrowIcon 
                            edge="end"
                            className={classes.arrowIcon}
                            onClick={this.handleClickArrow}
                        />
                        { this.props.productID !== 0 && <DeleteIcon 
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
                    { this.props.productID === 0 && <div>
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
                    <TextField
                        required
                        id="product_amount"
                        label="Anzahl"
                        margin="dense"
                        variant="outlined"
                        value={this.state.product_amount}
                        className={classes.textField}
                        onChange={this.handleInput}
                    />                           
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
           
                    { this.props.productID === 0 && <Button
                        id="SaveButton"
                        variant="contained"
                        color="primary"
                        className={classes.submitButton}
                        onClick={this.handleClickSave}>
                        Speichern
                    </Button>}

                    { this.props.productID !== 0 && <Button
                        id="UpdateButton"
                        variant="contained"
                        color="primary"
                        className={classes.submitButton}
                        onClick={this.handleClickUpdate}>
                        Ändern
                    </Button>}
                </form> 
                
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.openSnackbar}
                    autoHideDuration={6000}
                    onClose={this.handleCloseSnackbar}
                    message="Daten wurden geändert!"
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
