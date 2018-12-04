import Button from '@material-ui/core/Button'
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Input, FormControl, InputAdornment, Typography, Grid } from '@material-ui/core';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import BubbleIcon from '@material-ui/icons/BubbleChart';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import EventPictureInput from './EventPictureInput'
import InputMask from 'react-input-mask';
import moment from 'moment-mini'

import ObjectUtils from '../../utils/ObjectUtils';

const styles = theme => ({
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
        /* borderBottom: '1px solid #dedede' */
    }
})

class EventDetails extends React.Component {
    state = {
        event: {
            title: '',
            picture: EventPictureInput.pictures[0],
            scheduledTo: '',
            observations: ''
        }
    }
    isValidEventForm() {
        return ObjectUtils.hasKeys(this.state.event, ['title', 'scheduledTo', 'observations']);
    }
    format(event) {
        let parsedDate = event.scheduledTo instanceof Date ? event.scheduledTo : moment(event.scheduledTo, 'DD/MM').toDate(); // Parses event date
        return Object.assign(event, { scheduledTo: parsedDate });
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
                                <EventPictureInput 
                                    onChange={(picture)=>{
                                        this.setState({ event: { ...event, picture: picture } })
                                    }}
                                />
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
                                {/* Masked input */}
                                <InputMask
                                    mask="99/99"
                                    maskChar="X"
                                    value={event.scheduledTo}
                                    onChange={(e) => {
                                        this.setState({ event: { ...event, scheduledTo: e.target.value } })
                                    }}
                                >
                                    {/* Based on the mask properties... */}
                                    {(inputProps) =>
                                        /* Renders Material UI input: */
                                        <Input
                                            {...inputProps}
                                            type="tel"
                                            placeholder="Quando vai rolar? (dd/mm)"
                                            autoComplete="true"
                                            startAdornment={<InputAdornment position="start" className={classes.primaryColor} >
                                                <CalendarIcon />
                                            </InputAdornment>}
                                        />
                                    }
                                </InputMask>

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
                                    placeholder="Por que o evento vai ocorrer?"
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
                        onClick={() => {
                            let formatted = this.format(event);
                            this.props.onSave(formatted)
                        }}
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