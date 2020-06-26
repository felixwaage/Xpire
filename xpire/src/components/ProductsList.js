import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CloseIcon from '@material-ui/icons/Close';
import { Redirect } from 'react-router';
import format from 'date-fns/format';

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

    statusColor = (validDate) => {
        var bestBeforeMilliSec = new Date(validDate) - new Date();
        var bestBeforeDayCount = bestBeforeMilliSec/(1000*60*60*24); 
        
        if (bestBeforeDayCount > 3) {
            return '#C9DEBC';
        } else if (bestBeforeDayCount > 0) {
            return '#E8DD10';
        } else {
            return '#CE081f';
        }
    }

    render() {
        const { classes } = this.props;

        if (this.state.redirect) {
            return <Redirect push to="/Xpire/Product" />;
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
                                        src={value.img_url}
                                    />
                                </ListItemAvatar>
                                <ListItemText primary={`${value.name} (${value.amount})`} secondary={
                                    <div>
                                        <div>Gültig bis: {format(new Date(value.vailid_until),"dd.MM.yyyy")}</div>
                                        <div style={{
                                            height: '0.5rem',
                                            width: '100%',
                                            marginTop: '0.3rem',
                                            backgroundColor: this.statusColor(value.vailid_until),
                                        }}></div>
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