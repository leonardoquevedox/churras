import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Input, InputAdornment, FormControlLabel, Grid, Checkbox } from '@material-ui/core';
import ContributionIcon from '@material-ui/icons/AttachMoney';

const styles = theme => ({
    card: {
        display: 'block',
        maxWidth: 400,
        height: '100%',
        borderRadius: '15px'
    },
    actions: {
        display: 'flex',
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
        paddingBottom: '0px',
        textAlign: 'center'
    },
    link: {
        color: theme.palette.primary.main
    },
    cardTitle: {
        color: theme.palette.primary.main,
        textTransform: 'uppercase',
        fontSize: '14px',
    },
    cardSubheader: {
        color: '#888888',
        textTransform: 'uppercase',
        fontSize: '12px'
    },
    cardContent: {
        textAlign: 'center'
    },
    smallFont: {
        fontSize: '12px !important'
    },
    button: {
        boxShadow: '0px 0px 2px rgba(0,0,0,0.2)',
        display: 'block',
        width: '100%',
        maxWidth: '400px',
        marginTop: '10px',
        fontSize: '12px',
        padding: '10px'
    },
    primaryColor: {
        color: theme.palette.primary.main
    }
})

class EventGuest extends React.Component {

    state = {
        withDrinks: false,
        paid: false,
    }

    render() {
        const { classes, guest, theme } = this.props;
        return (
            <Card className={classes.card}>
                <CardHeader
                    className={classes.cardHeader}
                    classes={{ title: classes.cardTitle, subheader: classes.cardSubheader }}
                    title={guest.name}
                    subheader={guest.email}
                />
                <CardContent className={classes.cardContent}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Input
                                type="number"
                                fullWidth
                                style={{ padding: "10px" }}
                                placeholder="Contribuição"
                                autoComplete="true"
                                autoCapitalize="true"
                                classes={{ input: classes.smallFont }}
                                startAdornment={
                                    <InputAdornment position="start" style={{ color: theme.palette.primary.main }}>
                                        <ContributionIcon />
                                    </InputAdornment>
                                }
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.withDrinks}
                                        onChange={(e) => { this.setState({ withDrinks: e.target.checked }) }}
                                        value="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Com bebida"
                                classes={{ label: `${classes.smallFont}` }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.paid}
                                        onChange={(e) => { this.setState({ paid: e.target.checked }) }}
                                        value="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Pago"
                                classes={{ label: `${classes.smallFont}` }}
                            />
                        </Grid>
                    </Grid>
                    {!guest.paid && /* Initial state */
                        < Button color="primary" variant="contained" className={classes.button}>
                            {'Enviar convite'}
                        </Button>}
                    {guest.paid && /* Invited state */
                        <Button color="primary" variant="contained" className={classes.button}>
                            {'Salvar'}
                        </Button>}
                </CardContent>

            </Card >
        )
    }
}

export default withStyles(styles, { withTheme: true })(EventGuest)