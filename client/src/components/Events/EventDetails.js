import Button from '@material-ui/core/Button'
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Input, FormControl, InputAdornment, Typography, Grid } from '@material-ui/core';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import BubbleIcon from '@material-ui/icons/BubbleChart';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import EventPictureInput from './EventPictureInput'
import ObjectUtils from '../../utils/ObjectUtils';

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
    maxWidthContainer: {
        maxWidth: '500px',
        margin: 'auto'
    },
    firstColumn: {
        [theme.breakpoints.up('md')]: {
            marginRight: '0px'
        }
    },
    secondColumn: {
        [theme.breakpoints.up('md')]: {
            marginTop: '132px',
            marginLeft: '0px'
        }
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
    fullWidthContent: {
        padding: "10px",
        margin: "auto"
    },
    datepicker: {
        marginTop: '-10px'
    },
    bottomDivider: {
        paddingBottom: '16px',
        borderBottom: '1px solid #dedede'
    }
})

class EventDetails extends React.Component {
    state = {
        event: {
            date: '',
            title: '',
            observations: ''
        }
    }
    isValidEventForm() {
        return ObjectUtils.hasKeys(this.state.event, ['title', 'date', 'observations']);
    }
    render() {
        const { event } = this.state;
        const { classes, style } = this.props;
        return (
            <div style={{ ...style }} className={classes.fullWidthContent}>
                <Grid container spacing={16}>
                    <Grid item xs={12} md={6}>
                        <div className={`${classes.maxWidthContainer} ${classes.firstColumn}`}>
                            <div className={classes.bottomDivider} >
                                {/* Image input message */}
                                <Typography
                                    align='left'
                                    color='inherit'
                                    gutterBottom
                                    style={{ marginTop: "15px", color: "#888888" }}
                                >
                                    {'1. Escolha a imagem do evento: '}
                                </Typography>
                                {/* Image input */}
                                <EventPictureInput />
                            </div>
                            {/* Event date input message */}
                            <Typography
                                align='left'
                                color='inherit'
                                gutterBottom
                                style={{ marginTop: "15px", color: "#888888" }}
                            >
                                {'2. Escolha a data do evento: '}
                            </Typography>
                            {/* Event date input */}
                            <FormControl fullWidth className={classes.margin}>
                                <Input
                                    type="datetime"
                                    value={event.date}
                                    onChange={(e) => {
                                        this.setState({
                                            event: { ...event, date: e.target.value }
                                        })
                                    }}
                                    placeholder="Quando vai rolar? (dd/mm)"
                                    autoComplete="true"
                                    startAdornment={<InputAdornment position="start" className={classes.primaryColor} >
                                        <CalendarIcon />
                                    </InputAdornment>}
                                />
                            </FormControl>
                        </div>
                    </Grid>
                    {/* Event information row */}
                    <Grid item xs={12} md={6}>
                        <form className={`${classes.maxWidthContainer} ${classes.secondColumn}`}>
                            {/* Event title input message */}
                            <Typography
                                align='left'
                                color='inherit'
                                gutterBottom
                                style={{ marginTop: "15px", color: "#888888" }}
                            >
                                {'3. Escolha um título para o evento: '}
                            </Typography>
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
                                    placeholder="Por quê o evento vai ocorrer?"
                                    autoComplete="true"
                                    startAdornment={<InputAdornment position="start" className={classes.primaryColor} >
                                        <BubbleIcon />
                                    </InputAdornment>}
                                />
                            </FormControl>
                            {/* Event observations input message */}
                            <Typography
                                align='left'
                                color='inherit'
                                gutterBottom
                                style={{ marginTop: "15px", color: "#888888" }}
                            >
                                {'4. Adicione observações pra galera (opcional): '}
                            </Typography>
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
                                    rows="6"
                                    placeholder="Observações"
                                    autoComplete="true"
                                    startAdornment={<InputAdornment position="start" className={classes.primaryColor} >
                                        <ChatBubbleIcon />
                                    </InputAdornment>}
                                />
                            </FormControl>

                        </form>
                    </Grid>
                    {/* Save button */}
                    <Button
                        fullWidth
                        onClick={() => { this.props.onSave(event) }}
                        disabled={!this.isValidEventForm()}
                        className={classes.button}
                        variant='contained'
                        color='primary'
                    >
                        {'Salvar'}
                    </Button>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(EventDetails)