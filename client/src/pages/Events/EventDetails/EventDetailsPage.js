import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Tabs, Tab, Grid } from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'
import CheckIcon from '@material-ui/icons/Check'
import EventDetails from '../../../components/Events/EventDetails'
import EventContributionSuggestions from '../../../components/Events/EventContributionSuggestions'
import EventGuestsList from '../../../components/Events/EventGuestsList'

import API from '../../../api'
import AuthUtils from '../../../utils/AuthUtils'
import SimpleAlertDialog from '../../../components/Interaction/SimpleAlert'

const styles = theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
    },
    root: {
        flexGrow: 1,
        flex: '1 0 100%',
        padding: '20px'
    },
    hero: {
        height: '100%',
        flex: '0 0 auto',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
        color: '#666666'
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    padding: {
        padding: '16px'
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing.unit * 10,
        right: theme.spacing.unit * 4,
        '&:hover': {
            backgroundColor: theme.palette.primary.main
        }
    }
})

class EventDetailsPage extends Component {
    state = {
        error: { show: false },
        isLoading: false,
        selectedTab: 1,
        readOnly: false,
        token: '',
        event: {}
    }

    componentWillMount() {
        this.setState({ token: AuthUtils.getToken() }, () => {
            const urlParams = new URLSearchParams(window.location.search)
            const eventId = urlParams.get('id')
            if (eventId) {
                this.setState({ readOnly: true }); // Initializes view as readonly
                this.getEvent(eventId); // Gets event data
            }
            else this.setState({ loaded: true, readOnly: false })
        })
    }

    getEvent(id) {
        this.setState({ isLoading: true }) // Sets loading state 
        API.getEvent({ xAccessToken: this.state.token, id: id }).then((response) => { // In case of success...
            this.setState({ event: response.data })
        }).catch((error) => {  // In case of error...
            this.setState({ // Shows error message
                error: {
                    ...this.state.error,
                    show: true,
                    title: 'Ops! Houve um erro ao carregar o churrasco.',
                    message: 'Por favor, tente novamente mais tarde.'
                },
                isLoading: false
            })
        }).finally(() => {
            this.setState({ loaded: true })
        })
    }

    saveEvent(event, callback) {
        this.setState({ isLoading: true }) // Sets loading state 
        API.saveEvent({ xAccessToken: this.state.token, event: event }).then((response) => { // In case of success...
            this.setState({ event: response.data })
            if (callback) callback()
        }).catch((error) => {  // In case of error...
            console.log(error)
            this.setState({ // Shows error message
                error: {
                    ...this.state.error,
                    show: true,
                    title: 'Ops! Houve um erro ao salvar o churrasco.',
                    message: 'Verifique as informações preenchidas e tente novamente )'
                },
                isLoading: false
            })
        })
    }

    render() {
        const { event, readOnly, error, selectedTab } = this.state
        const { classes } = this.props
        return (
            <div className={classes.main}>
                <div className={classes.root}>
                    <div className={classes.hero}>
                        {/* Awaits for event to load if id is passed */}
                        {this.state.loaded &&
                            <div className={classes.content}>
                                {/* Tabs for creation process */}
                                {!readOnly &&
                                    <Tabs color='primary' fullWidth value={selectedTab}>
                                        <Tab value={1} label='Informações' onClick={(e) => { this.setState({ selectedTab: 1 }) }} />
                                        <Tab value={2} label='Contribuições' onClick={(e) => { this.setState({ selectedTab: 2 }) }} />
                                        <Tab value={3} label='Participantes' onClick={(e) => { this.setState({ selectedTab: 3 }) }} />
                                    </Tabs>
                                }
                                <Grid container spacing={16} className={readOnly ? classes.padding : ''}>
                                    <Grid item xs={12} md={readOnly ? 12 : 12}>
                                        <EventDetails
                                            event={event}
                                            readOnly={readOnly}
                                            style={{ display: (selectedTab === 1 || readOnly ? 'block' : 'none') }}
                                            onSave={(data) => {
                                                let updatedEvent = Object.assign(event, data)
                                                this.saveEvent(updatedEvent, () => { this.setState({ selectedTab: 2 }) })
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={readOnly ? 12 : 12}>
                                        <EventGuestsList
                                            event={event}
                                            readOnly={readOnly}
                                            style={{ display: (selectedTab === 3 || readOnly ? 'block' : 'none') }}
                                        />
                                    </Grid>
                                </Grid>
                                <EventContributionSuggestions
                                    event={event}
                                    readOnly={readOnly}
                                    style={{ display: (selectedTab === 2 ? 'block' : 'none') }}
                                    onSave={(data) => {
                                        let updatedEvent = Object.assign(event, data)
                                        console.log(data)
                                        this.saveEvent(updatedEvent, () => { this.setState({ selectedTab: 3 }) })
                                    }}
                                />

                            </div>}
                    </div>
                </div>
                {/* Error dialog */}
                <SimpleAlertDialog
                    isOpen={error.show}
                    title={error.title}
                    message={error.message}
                    onAccept={(e) => { this.setState({ error: { ...error, show: false } }) }}
                />
                <Tooltip id='tooltip-icon2' title={readOnly ? 'Editar evento' : 'Concluir edição'} placement='top'>
                    <Fab color='primary'
                        aria-label='Add'
                        size='large'
                        className={classes.fab}
                        onClick={(e) => {
                            if (!this.state.readOnly) // In case the user is editing...
                                this.saveEvent(this.state.event, () => { this.setState({ readOnly: true, selectedTab: 1 }) }) // Saves the event...
                            else // Otherwise, just enable editions
                                this.setState({ readOnly: false })
                        }}>
                        {readOnly && <EditIcon />}
                        {!readOnly && <CheckIcon />}
                    </Fab>
                </Tooltip>
            </div>
        )
    }
}

export default withRouter(withStyles(styles, { withTheme: true })(EventDetailsPage))