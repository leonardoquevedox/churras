import Button from '@material-ui/core/Button'
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Input, FormControl, InputAdornment, Typography } from '@material-ui/core';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import BubbleIcon from '@material-ui/icons/BubbleChart';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import EventPictureInput from './EventPictureInput'

const styles = theme => ({
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
    button: {
        marginTop: theme.spacing.unit * 3,
        maxWidth: '300px',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
    },
    fullWidthForm: {
        width: "80%",
        maxWidth: "600px",
        padding: "16px",
        margin: "auto"
    }
})

class EventDetails extends React.Component {
    state = {
        event: {
            title: '',
            date: new Date(),
            observations: '',
        }
    }
    render() {
        const { event } = this.state;
        const { classes, style } = this.props;
        return (
            <div style={{ ...style }}>
                {/* Image input message */}
                <Typography
                    align='center'
                    color='inherit'
                    gutterBottom
                    style={{ marginTop: "15px", color: "#888888" }}
                >
                    {'Para começar, escolha a imagem do evento abaixo ;)'}
                </Typography>
                {/* Image input */}
                <EventPictureInput />
                <form className={classes.fullWidthForm}>
                    {/* Event information row */}
                    <FormControl fullWidth className={classes.margin}>
                        {/* Event date input */}
                        <Input
                            type="text"
                            value={event.date}
                            onChange={(e) => {
                                this.setState({
                                    event: { ...event, date: e.target.value }
                                })
                            }}
                            placeholder="Quando?"
                            autoComplete="true"
                            autoCapitalize="true"
                            startAdornment={<InputAdornment position="start" className={classes.primaryColor} >
                                <CalendarIcon />
                            </InputAdornment>}
                        />
                    </FormControl>
                    {/* Event title input */}
                    <FormControl fullWidth className={classes.margin}>
                        <Input
                            type="textarea"
                            value={event.title}
                            onChange={(e) => {
                                this.setState({
                                    event: { ...event, title: e.target.value }
                                })
                            }}
                            placeholder="Por quê?"
                            autoComplete="true"
                            startAdornment={<InputAdornment position="start" className={classes.primaryColor} >
                                <BubbleIcon />
                            </InputAdornment>}
                        />
                    </FormControl>
                    {/* Event title input */}
                    <FormControl fullWidth className={classes.margin}>
                        <Input
                            type="text"
                            value={event.observations}
                            onChange={(e) => {
                                this.setState({
                                    event: { ...event, observations: e.target.value }
                                })
                            }}
                            multiline={true}
                            rows="4"
                            placeholder="Observações"
                            autoComplete="true"
                            startAdornment={<InputAdornment position="start" className={classes.primaryColor} >
                                <ChatBubbleIcon />
                            </InputAdornment>}
                        />
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

export default withStyles(styles, { withTheme: true })(EventDetails)