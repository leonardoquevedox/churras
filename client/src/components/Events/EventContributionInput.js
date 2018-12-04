import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Input, FormControl, InputAdornment, Typography, Button } from '@material-ui/core';
import CocktailIcon from '@material-ui/icons/LocalBar';
import WaterIcon from '@material-ui/icons/LocalDrink';
import ContributionIcon from '@material-ui/icons/AttachMoney';
import CurrencyFormat from 'react-currency-format';

const styles = theme => ({
    fullWidthForm: {
        width: "80%",
        maxWidth: "600px",
        padding: "16px",
        margin: "auto"
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        maxWidth: '300px',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
    },
    primaryColor: {
        color: theme.palette.primary.main
    }
})

class EventContributionInput extends React.Component {

    state = {
        event: {
            suggestedContribution: {}
        }
    }

    render() {
        const { classes, style } = this.props;
        const { event } = this.state;
        return (
            <div style={{ ...style }}>
                <form className={classes.fullWidthForm}>
                    {/* Contribution values */}
                    <Typography align='center' variant='h6' color='inherit' gutterBottom style={{ marginTop: "15px" }}>
                        <ContributionIcon style={{ verticalAlign: "middle" }} className={classes.primaryColor} />
                        {'Sugestão de valores pra galera:'}
                    </Typography>
                    {/* Contribution with drinks value */}
                    <FormControl fullWidth className={classes.margin}>
                        <CurrencyFormat
                            value={event.suggestedContribution.withDrinks}
                            onValueChange={(e) => {
                                let updatedEvent = {
                                    ...event, // Clones everything from original event
                                    suggestedContribution: { //override the given property
                                        ...event.suggestedContribution, // Clones everything from event.user
                                        withDrinks: e.floatValue // Overrides 'withDrinks' value
                                    }
                                };
                                this.setState({ event: updatedEvent })
                            }}
                            customInput={Input}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            decimalSeparator=","
                            prefix="R$"
                            placeholder="Com bebida"
                            startAdornment={<InputAdornment position="start" className={classes.primaryColor} >
                                <CocktailIcon />
                            </InputAdornment>} />
                    </FormControl>
                    {/* Contribution without drinks value */}
                    <FormControl fullWidth className={classes.margin}>
                        <CurrencyFormat
                            value={event.suggestedContribution.withoutDrinks}
                            onValueChange={(e) => {
                                let updatedEvent = {
                                    ...event, // Clones everything from original event
                                    suggestedContribution: { //override the given property
                                        ...event.suggestedContribution, // Clones everything from event.user
                                        withoutDrinks: e.floatValue // Overrides 'withDrinks' value
                                    }
                                };
                                this.setState({ event: updatedEvent })
                            }}
                            customInput={Input}
                            decimalScale={2}
                            fixedDecimalScale={true}
                            decimalSeparator=","
                            prefix="R$"
                            placeholder="Sem bebida"
                            startAdornment={<InputAdornment position="start" className={classes.primaryColor} >
                                <WaterIcon />
                            </InputAdornment>} />
                    </FormControl>
                    {/* Save button */}
                    <Button
                        fullWidth
                        onClick={() => { this.props.onSave(event) }}
                        className={classes.button}
                        variant='contained'
                        color='primary'
                    >
                        {'Salvar'}
                    </Button>
                </form>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(EventContributionInput)