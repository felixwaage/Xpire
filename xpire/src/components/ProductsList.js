import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1rem'
    },
    listitemframe: {
        margin: '0.6rem'
    },
    listitem: {
        borderWidth: '0.1rem',
        borderStyle: 'solid',
        borderRadius: '0.5rem',
        borderColor: theme.palette.primary.main
    }
}));


export default function ProductsList() {
    const classes = useStyles();

    return (
        <List dense className={classes.root}>
            {['Mehl', 'Schlagsahne', 'Banane', 'Schokoladeneis'].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                    <div className={classes.listitemframe}>
                        <ListItem key={value} className={classes.listitem} button>
                            <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar n°${value + 1}`}
                                    src={`/static/images/avatar/${value + 1}.jpg`}
                                />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={`${value}`} secondary={`Gültig bis: 24.07.2020`}/>
                            <ListItemSecondaryAction>
                                <CloseIcon 
                                    edge="end"
                                    color="primary"
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                    </div>
                );
            })}
        </List>
    );
}