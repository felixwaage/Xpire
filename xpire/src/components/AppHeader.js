import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
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
        color: theme.palette.primary.dark
    },
    dialogActions: {
        paddingRight: "20px",
        paddingBottom: "10px"
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AppHeader(props) {
    const classes = useStyles();
    const [openDialog, setOpenDialog] = React.useState(false)

    const handleDelete = () => {
        clearTable('products')
        setOpenDialog(false)
        props.refreshPage()
    }

    const handleIconClick = () => {
        setOpenDialog(true)
    }

    return (
        <AppBar position="fixed">
            <Toolbar>
                <img src={headerLogo} alt="logo" className={classes.logo} />
                <Typography variant="h6" className={classes.title}>
                    Xpire
                    </Typography>
                <div>
                    <DeleteForeverIcon
                        className={classes.deleteIcon}
                        fontSize='large'
                        onClick={handleIconClick}
                    />
                </div>
                <Dialog
                    open={openDialog}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => setOpenDialog(false)}
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
                        <Button onClick={() => setOpenDialog(false)} color="primary">
                            Abbrechen
                        </Button>
                        <Button onClick={handleDelete} color="secondary">
                            Löschen
                        </Button>
                    </DialogActions>
                </Dialog>
            </Toolbar>
        </AppBar>
    );
}