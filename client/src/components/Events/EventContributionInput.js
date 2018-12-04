import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Input, FormControl, InputAdornment, Typography, Button } from '@material-ui/core';
import DrinkIcon from '@material-ui/icons/LocalBar';
import WaterIcon from '@material-ui/icons/LocalDrink';
import ContributionIcon from '@material-ui/icons/AttachMoney';

const styles = theme => ({
    fullWidthForm: {
        width: "80%",
        maxWidth: "700px",
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
        withDrinks: false
    }

    render() {
        const { classes, style } = this.props;
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
                        <Input
                            type="number"
                            placeholder="Com bebida"
                            autoComplete="true"
                            startAdornment={<InputAdornment position="start" className={classes.primaryColor} >
                                <DrinkIcon />
                            </InputAdornment>}
                        />
                    </FormControl>
                    {/* Contribution without drinks value */}
                    <FormControl fullWidth className={classes.margin}>
                        <Input
                            type="number"
                            placeholder="Sem bebida"
                            autoComplete="true"
                            startAdornment={<InputAdornment position="start" className={classes.primaryColor} >
                                <WaterIcon />
                            </InputAdornment>}
                        />
                    </FormControl>
                    {/* Save button */}
                    <Button
                        fullWidth
                        onClick={() => { this.props.onSave() }}
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