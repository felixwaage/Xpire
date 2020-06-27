import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
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
            return '#F4E132';
        } else {
            return '#F96523';
        }
    }

    render() {
        const { classes } = this.props;

        if (this.state.redirect) {
            return <Redirect push to="/Xpire/Product" />;
        }

        return (
            <List dense className={classes.root}>
                {this.props.products ? this.props.products.map((product) =>
                    <div className={classes.listitemframe}>
                        <ListItem className={classes.listitem} button onClick={() => this.handleListItemClick(product.id)}>
                            <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar n°${product + 1}`}
                                    src={product.img_url}
                                />
                            </ListItemAvatar>
                            <ListItemText primary={`${product.name} (${product.amount})`} secondary={
                                <div>
                                    <div>Gültig bis: {format(new Date(product.expireDate),"dd.MM.yyyy")}</div>
                                    <div style={{
                                        height: '0.5rem',
                                        width: '100%',
                                        marginTop: '0.3rem',
                                        backgroundColor: this.statusColor(product.expireDate),
                                    }}></div>
                            </div>
                            }/>
                        </ListItem>
                    </div>
                ) : null}
            </List>
        );
    }
}
export default withStyles(styles)(ProductsList);