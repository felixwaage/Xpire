import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(4),
        right: theme.spacing(4),
    },
});

class FloatingButton extends React.Component {
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
            <Fab color="primary" aria-label="add" className={classes.fab} onClick={this.handleClick}>
                <AddIcon />
            </Fab>
        );
    }
}

export default withStyles(styles)(FloatingButton);