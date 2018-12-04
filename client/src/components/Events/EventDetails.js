import Button from '@material-ui/core/Button'
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Input, FormControl, InputAdornment, Typography, Grid } from '@material-ui/core'
import CalendarIcon from '@material-ui/icons/CalendarToday'
import BubbleIcon from '@material-ui/icons/BubbleChart'
import ObservationsIcon from '@material-ui/icons/NewReleases'
import EventPicture from './EventPicture'
import InputMask from 'react-input-mask'
import moment from 'moment-mini'

import ObjectUtils from '../../utils/ObjectUtils'

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
            marginTop: '154px',
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
        padding: '10px',
        margin: 'auto'
    },
    datepicker: {
        marginTop: '-10px'
    },
    bottomDivider: {
        paddingBottom: '16px'
    },
    label: {
        marginTop: '15px',
        color: '#888888'
    },
    infoTitle: {
        fontSize: '18px',
        paddingLeft: '10px',
        marginBottom: '0px'
    },
    textareaIcon: {
        marginTop: '-20px'
    }
})

class EventDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            event: this.props.event || { // Loads event data or initializes it if is empty
                title: '',
                picture: EventPicture.pictures[0],
                scheduledTo: '',
                observations: ''
            }
        }
        this.state.event.formattedDate = (new Date(this.state.event.scheduledTo)).toLocaleDateString('pt-BR');
    }


    isValidEventForm() {
        return ObjectUtils.hasKeys(this.state.event, ['title', 'scheduledTo', 'observations'])
    }

    format(event) {
        let parsedDate = moment(event.formattedDate, 'DD/MM').toDate() // Parses event date
        return Object.assign(event, { scheduledTo: parsedDate })
    }

    render() {
        const { event } = this.state
        const { classes, style, readOnly } = this.props
        return (
            <div style={{ ...style }} className={classes.fullWidthContent}>
                <Grid container spacing={16}>
                    <Grid item xs={12} md={readOnly ? 6 : 6}>
                        <div className={`${classes.maxWidthContainer} ${readOnly ? "" : classes.firstColumn}`}>
                            <div className={classes.bottomDivider} >
                                {/* Image input message */}
                                <Typography
                                    align='left'
                                    color='inherit'
                                    gutterBottom
                                    style={{}}
                                >
                                    {readOnly ? '' : '1. Escolha a imagem do evento: '}
                                </Typography>
                                {/* Image input */}{}
                                <EventPicture
                                    readOnly={readOnly}
                                    event={event}
                                    onChange={(picture) => {
                                        this.setState({ event: { ...event, picture: picture } })
                                    }}
                                />
                            </div>
                            {/* Event date input message */}
                            <Typography
                                align='left'
                                color='inherit'
                                gutterBottom
                                className={readOnly ? classes.infoTitle : classes.label}
                            >
                                {readOnly ? 'Data:' : '2. Escolha a data do evento: '}
                            </Typography>
                            {/* Event date input */}
                            <FormControl fullWidth className={classes.margin}>
                                {/* Masked input */}
                                <InputMask
                                    mask='99/99'
                                    maskChar='X'
                                    value={event.formattedDate}
                                    disableUnderline={readOnly}
                                    readOnly={readOnly}
                                    onChange={(e) => {
                                        this.setState({ event: { ...event, formattedDate: e.target.value } })
                                    }}
                                >
                                    {/* Based on the mask properties... */}
                                    {(inputProps) =>
                                        /* Renders Material UI input: */
                                        <Input
                                            {...inputProps}
                                            type='tel'
                                            placeholder='Quando vai rolar? (dd/mm)'
                                            autoComplete='true'
                                            startAdornment={<InputAdornment position='start' className={classes.primaryColor} >
                                                <CalendarIcon />
                                            </InputAdornment>}
                                        />
                                    }
                                </InputMask>
                            </FormControl>
                        </div>
                    </Grid>
                    {/* Event information row */}
                    <Grid item xs={12} md={readOnly ? 6 : 6}>
                        <form className={`${classes.maxWidthContainer} ${readOnly ? "" : classes.secondColumn}`}>
                            {/* Event title input message */}
                            <Typography
                                align='left'
                                color='inherit'
                                gutterBottom
                                className={readOnly ? classes.infoTitle : classes.label}
                            >
                                {readOnly ? 'Por quê?' : '3. Escolha um título para o evento: '}
                            </Typography>
                            {/* Event title input */}
                            <FormControl fullWidth className={classes.margin}>
                                <Input
                                    type='textarea'
                                    value={event.title}
                                    onChange={(e) => {
                                        this.setState({
                                            event: { ...event, title: e.target.value }
                                        })
                                    }}
                                    readOnly={readOnly}
                                    disableUnderline={readOnly}
                                    placeholder='Por que o evento vai ocorrer?'
                                    autoComplete='true'
                                    startAdornment={<InputAdornment position='start' className={classes.primaryColor} >
                                        <BubbleIcon />
                                    </InputAdornment>}
                                />
                            </FormControl>
                            {/* Event observations input message */}
                            <Typography
                                align='left'
                                color='inherit'
                                gutterBottom
                                className={readOnly ? classes.infoTitle : classes.label}
                            >
                                {readOnly ? 'Observações' : '4. Adicione observações pra galera (opcional): '}
                            </Typography>
                            {/* Event title input */}
                            <FormControl fullWidth className={classes.margin}>
                                <Input
                                    type='text'
                                    value={event.observations}
                                    onChange={(e) => {
                                        this.setState({
                                            event: { ...event, observations: e.target.value }
                                        })
                                    }}
                                    readOnly={readOnly}
                                    disableUnderline={readOnly}
                                    multiline={true}
                                    rows='3'
                                    placeholder='Observações'
                                    autoComplete='true'
                                    startAdornment={<InputAdornment position='start' className={`${classes.primaryColor} ${classes.textareaIcon}`} >
                                        <ObservationsIcon />
                                    </InputAdornment>}
                                />
                            </FormControl>
                        </form>
                    </Grid>
                    {/* Save button */}
                    {!readOnly && <Button
                        fullWidth
                        onClick={() => {
                            let formatted = this.format(event)
                            this.props.onSave(formatted)
                        }}
                        disabled={!this.isValidEventForm()}
                        className={classes.button}
                        variant='contained'
                        color='primary'
                    >
                        {'Salvar'}
                    </Button>}
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(EventDetails)