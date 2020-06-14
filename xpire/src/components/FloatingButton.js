import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '90%',
        marginTop: '1rem',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(4),
        right: theme.spacing(4),
    },
}));


{/*export default function FloatingButton() {
    const classes = useStyles();

    return (
        <Fab className={classes.fab} position='absolute' color="primary" aria-label="add" onClick={() => this.sendFeedbackMessage('ThumbsDown')}>
            <AddIcon />
        </Fab>
    );
}*/}

class FloatingButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.navigate();
      }

    render() {

        return (
            <Fab position='absolute' color="primary" aria-label="add" onClick={this.handleClick}>
                <AddIcon />
            </Fab>
        );
    }
}

export default FloatingButton;