import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CloseIcon from '@material-ui/icons/Close';
import { Redirect } from 'react-router';

const styles = theme => ({
    root: {
        padding: '1rem',
        marginTop: "56px"
    },
    listitemframe: {
        margin: '0.6rem'
    },
    listitem: {
        borderWidth: '0.1rem',
        borderStyle: 'solid',
        borderRadius: '0.5rem',
        borderColor: theme.palette.primary.main
    },
    bar: {
        height: '0.5rem',
        width: '100%',
        marginTop: '0.3rem',
        backgroundColor: theme.palette.primary.main,
    }
});

class ProductsList extends React.Component {
    constructor(props) {
        super(props);
        this.handleListItemClick = this.handleListItemClick.bind(this);
        this.state = {
            redirect: false,
        }    
    }

    handleListItemClick = (id) => {
        this.setState({redirect: true});
        this.props.showProduct(id);
    }

    render() {
        const { classes } = this.props;

        if (this.state.redirect) {
            return <Redirect push to="/Product" />;
        }

        return (
            <List dense className={classes.root}>
                {this.props.products.map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value.name}`;
                    const productId = value.id;
                    return (
                        <div className={classes.listitemframe}>
                            <ListItem className={classes.listitem} button onClick={() => this.handleListItemClick(value.id)}>
                                <ListItemAvatar>
                                    <Avatar
                                        alt={`Avatar n°${value + 1}`}
                                        src={`/static/images/avatar/${value + 1}.jpg`}
                                    />
                                </ListItemAvatar>
                                <ListItemText primary={`${value.name}`} secondary={
                                    <div>
                                        <div>Gültig bis: {value.vailid_until}</div>
                                        <div className={classes.bar}></div>
                                </div>
                                }/>
                                {/*<ListItemSecondaryAction>
                                    <CloseIcon 
                                        edge="end"
                                        color="primary"
                                        //onClick={this.handleClick}
                                    />
                                </ListItemSecondaryAction>*/}
                            </ListItem>
                            
                        </div>
                    );
                })}
            </List>
        );
    }
}
export default withStyles(styles)(ProductsList);