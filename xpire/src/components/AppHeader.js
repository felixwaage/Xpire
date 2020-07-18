import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import headerLogo from '../logo.svg';
import DeleteForeverIcon from '@material-ui/icons/DeleteOutlined';
import { clearTable } from '../Idb';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { withRouter } from 'react-router-dom';   

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: 'center'
    },
    logo: {
        maxWidth: '2.5rem',
    },
    deleteIcon: {
        color: theme.palette.primary.dark,
        cursor: "pointer"
    },
    dialogActions: {
        paddingRight: "20px",
        paddingBottom: "10px"
    }
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


class AppHeader extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.setOpenDialog = this.setOpenDialog.bind(this);
        this.state = {
            openDialog: false,
        }    
    }

    handleDelete = () => {
        clearTable('products')
        this.setState({openDialog: false});
        this.props.refreshPage()
    }

    setOpenDialog = (openState) => {
        this.setState({openDialog: openState});
    }

    render() {
        const { classes } = this.props;       
        const { location } = this.props;

        return (
            <AppBar position="fixed">
                <Toolbar>
                    <img src={headerLogo} alt="logo" className={classes.logo} />
                    <Typography variant="h6" className={classes.title}>
                        Xpire
                    </Typography>

                    { !location.pathname.match("/Xpire/Product") && <div>
                        <DeleteForeverIcon
                            className={classes.deleteIcon}
                            fontSize='large'
                            onClick={() => this.setOpenDialog(true)}
                        />
                    </div>}
                    <Dialog
                        open={this.state.openDialog}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={() => this.setOpenDialog(false)}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle id="alert-dialog-slide-title">Löschen bestätigen</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                Möchten Sie wirklich alle Produkte in Xpire löschen?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions className={classes.dialogActions}>
                            <Button onClick={() => this.setOpenDialog(false)} color="primary">
                                Abbrechen
                            </Button>
                            <Button onClick={() => this.handleDelete()} color="secondary">
                                Löschen
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Toolbar>
            </AppBar>
        );
    }
}
export default withRouter((withStyles(styles)(AppHeader)));