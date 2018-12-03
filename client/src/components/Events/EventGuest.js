import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Avatar, Input, InputAdornment, Switch, FormControlLabel } from '@material-ui/core';
import ContributionIcon from '@material-ui/icons/AttachMoney';

const styles = theme => ({
    card: {
        display: 'block',
        maxWidth: 400,
        height: '100%'
    },
    media: {
        height: 0,
        backgroundPosition: 'top',
        paddingTop: '150px', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
        opacity: 0.8
    },
    textCenter: {
        textAlign: 'center',
        marginBottom: '0px'
    },
    cardHeader: {
        paddingBottom: '0px'
    },
    link: {
        color: theme.palette.primary.main
    },
    cardTitle: {
        color: '#444444',
        textTransform: 'uppercase'
    }
})

class EventGuest extends React.Component {

    state = {
        withDrinks: false
    }

    render() {
        const { classes, guest, theme } = this.props;
        return (
            <Card className={classes.card}>
                <CardHeader
                    className={classes.cardHeader}
                    classes={{ title: classes.cardTitle }}
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            {guest.name[0]}
                        </Avatar>
                    }
                    title={guest.name}
                    subheader={guest.email}
                />
                <CardContent className={classes.cardContent}>
                    <Input
                        type="text"
                        style={{ padding: "10px" }}
                        placeholder="Contribuição"
                        autoComplete="true"
                        autoCapitalize="true"
                        startAdornment={
                            <InputAdornment
                                position="start"
                                style={{ color: theme.palette.primary.main }}
                            >
                                <ContributionIcon />
                            </InputAdornment>
                        }
                    />
                    <FormControlLabel
                        control={
                            <Switch

                                checked={this.state.withDrinks}
                                onChange={(e) => { this.setState({ withDrinks: e.target.checked }) }}
                                value="checkedB"
                                color="primary"
                            />
                        }
                        label="Com bebida"
                    />
                </CardContent>
                <Button color="primary" variant="outlined" className={classes.textCenter}>
                    Incluir no churrasco
                </Button>
            </Card>
        )
    }
}

export default withStyles(styles, { withTheme: true })(EventGuest)