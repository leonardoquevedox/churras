import Button from '@material-ui/core/Button'
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Input, FormControl, InputAdornment, Typography, Grid } from '@material-ui/core';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import BubbleIcon from '@material-ui/icons/BubbleChart';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import DrinkIcon from '@material-ui/icons/LocalBar';
import WaterIcon from '@material-ui/icons/LocalDrink';
import EventPictureInput from './EventPictureInput'

const styles = theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column'
    },
    root: {
        flexGrow: 1,
        flex: '1 0 100%',
        padding: '20px',
        height: '100%',
        // overflow: 'hidden'
    },
    hero: {
        height: '100%',
        // minHeight: '80vh',
        flex: '0 0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
        color: "#666666"
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        letterSpacing: '.1rem',
        textIndent: '.7rem',
        marginTop: '10px',
        fontSize: 24,
        fontWeight: theme.typography.fontWeightLight,
        [theme.breakpoints.only('xs')]: {
            fontSize: 22,
            letterSpacing: '.1em',
            textIndent: '.1rem'
        },
        whiteSpace: 'wrap'
    },
    subtitle: {
        fontSize: 14,
        [theme.breakpoints.only('xs')]: {
            fontSize: 14,
            maxWidth: "200px"
        },
    },
    headline: {
        paddingLeft: theme.spacing.unit * 4,
        paddingRight: theme.spacing.unit * 4,
        marginTop: theme.spacing.unit,
        maxWidth: 600,
        textAlign: 'center',
        fontSize: 18
    },
    primaryColor: {
        color: theme.palette.primary.main
    },
    content: {
        height: '100%',
        // paddingTop: theme.spacing.unit * 8,
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing.unit
        }
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        maxWidth: '300px',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    fullWidthForm: {
        width: "80%",
        maxWidth: "700px",
        padding: "16px",
        margin: "auto"
    }
})

class EventDetails extends React.Component {

    render() {
        const { classes, event, history } = this.props;
        return (
            <div>
                <Typography
                    align='center'
                    color='inherit'
                    gutterBottom
                    style={{ marginTop: "15px" }}
                >
                    {'Para começar, escolha a imagem do evento abaixo ;)'}
                </Typography>
                <EventPictureInput />
                <form className={classes.fullWidthForm}>
                    <Grid container justify="flex-start" spacing={16}>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth className={classes.margin}>
                                <Input
                                    type="text"
                                    style={{ padding: "10px" }}
                                    placeholder="Quando?"
                                    autoComplete="true"
                                    autoCapitalize="true"
                                    startAdornment={
                                        <InputAdornment
                                            position="start"
                                            className={classes.primaryColor}
                                        >
                                            <CalendarIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl fullWidth className={classes.margin}>
                                <Input
                                    type="textarea"
                                    style={{ padding: "10px" }}
                                    placeholder="Por quê?"
                                    autoComplete="true"
                                    startAdornment={
                                        <InputAdornment
                                            position="start"
                                            className={classes.primaryColor}
                                        >
                                            <BubbleIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl fullWidth className={classes.margin}>
                                <Input
                                    type="password"
                                    style={{ padding: "10px" }}
                                    placeholder="Observações"
                                    autoComplete="true"
                                    startAdornment={
                                        <InputAdornment
                                            position="start"
                                            className={classes.primaryColor}
                                        >
                                            <ChatBubbleIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography
                                align='center'
                                variant='h6'
                                color='inherit'
                                gutterBottom
                                style={{ marginTop: "15px" }}
                            >
                                {'Valor de contribuição sugerido:'}
                            </Typography>
                            <FormControl fullWidth className={classes.margin}>
                                <Input
                                    type="password"
                                    style={{ padding: "10px" }}
                                    placeholder="Com bebida"
                                    autoComplete="true"
                                    startAdornment={
                                        <InputAdornment
                                            position="start"
                                            className={classes.primaryColor}
                                        >
                                            <DrinkIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl fullWidth className={classes.margin}>
                                <Input
                                    type="password"
                                    style={{ padding: "10px" }}
                                    placeholder="Sem bebida"
                                    autoComplete="true"
                                    startAdornment={
                                        <InputAdornment
                                            position="start"
                                            className={classes.primaryColor}
                                        >
                                            <WaterIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Button
                            fullWidth
                            onClick={() => { history.push('/home') }}
                            className={classes.button}
                            variant='contained'
                            color='primary'
                        >
                            {'Salvar'}
                        </Button>
                    </Grid>
                </form>

            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(EventDetails)