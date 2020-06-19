import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

const styles = theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(4),
        right: theme.spacing(4),
    },
});

class FloatingButton extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <Link to="/addProduct">
                <Fab color="primary" aria-label="add" className={classes.fab} >
                    <AddIcon />
                </Fab>
            </Link>
        );
    }
}

export default withStyles(styles)(FloatingButton);