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
        width: '100%',
        maxWidth: '90%',
        marginTop: '1rem',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
    listitem: {
        padding: '1rem',
        margin: '0.5rem',
        borderWidth: '0.1rem',
        borderStyle: 'solid',
        borderRadius: '0.5rem',
        borderColor: theme.palette.primary.main
    }
}));


export default function ProductsList(props) {
    const classes = useStyles();

    return (
        <List dense className={classes.root}>
            {props.products.map((value) => {
                const labelId = `checkbox-list-secondary-label-${value.name}`;
                return (
                    <ListItem key={value.id} className={classes.listitem} button>
                        <ListItemAvatar>
                            <Avatar
                                alt={`Avatar n°${value + 1}`}
                                src={`/static/images/avatar/${value + 1}.jpg`}
                            />
                        </ListItemAvatar>
                        <ListItemText id={labelId} primary={`${value.name}`} secondary={value.vailid_until}/>
                        <ListItemSecondaryAction>
                            <CloseIcon 
                                edge="end"
                                color="primary"
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
}