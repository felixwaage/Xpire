import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import flower from '../Mehl.jpg';
import ArrowIcon from '@material-ui/icons/KeyboardBackspace';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
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
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.navigate();
      }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.toolbar}>
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
                        />
                    </div>
                </div>
                <form className={classes.form}>
                    <TextField
                        id="productTitle-input"
                        label="Titel"
                        margin="dense"
                        variant="outlined"
                        className={classes.textField}
                    />
                    <br />
                    <TextField
                        id="productCount-input"
                        label="Anzahl"
                        margin="dense"
                        variant="outlined"
                        className={classes.textField}
                    />                           
                    <br />
                    <TextField
                        id="buyDate-input"
                        label="Eingekauft am"
                        margin="dense"
                        variant="outlined"
                        className={classes.textField}
                    />
                    <br />
                    <TextField
                        id="dueDate-input"
                        label="Gültig bis"
                        margin="dense"
                        variant="outlined"
                        className={classes.textField}
                    />
                    <br />
                    
                    <Button
                        id="SaveButton"
                        variant="contained"
                        color="primary"
                        className={classes.submitButton}>
                        Speichern
                    </Button>
                </form>                           
            </div>
        );
    }
}

export default withStyles(styles)(AddProduct);
