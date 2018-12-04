import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Tabs, Tab } from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'
import CheckIcon from '@material-ui/icons/Check'
import EventDetails from '../../../components/Events/EventDetails'
import EventContributionSuggestions from '../../../components/Events/EventContributionSuggestions'
import EventGuestsList from '../../../components/Events/EventGuestsList'

import API from '../../../api'
import AuthUtils from '../../../utils/AuthUtils'
import SimpleAlert from '../../../components/Interaction/SimpleAlert'
import SimpleSnackbar from '../../../components/Interaction/SimpleSnackbar'

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
        snackbar: { open: false, message: '' },
        event: {},
        token: '',
        isEventCreation: true
    }

    componentWillMount() {
        this.setState({ token: AuthUtils.getToken() }, () => {
            const urlParams = new URLSearchParams(window.location.search)
            const eventId = urlParams.get('id')
            if (eventId) {
                this.setState({ isEventCreation: false, readOnly: true }); // Initializes view as readonly
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

    showSuccessSnackbar() {
        this.setState({ snackbar: { open: true, message: 'Evento salvo com sucesso' } });
    }

    render() {
        const { event, error, isEventCreation, selectedTab, readOnly, snackbar } = this.state
        const { classes } = this.props
        return (
            <div className={classes.main}>
                <div className={classes.root}>
                    <div className={classes.hero}>
                        {/* Awaits for event to load if id is passed */}
                        {this.state.loaded &&
                            <div className={classes.content}>
                                {/* Tabs for creation process */}
                                <Tabs color='primary' fullWidth value={selectedTab}>
                                    <Tab value={1} label='Informações' onClick={(e) => { this.setState({ selectedTab: 1 }) }} />
                                    {!readOnly && <Tab value={2} label='Contribuições' onClick={(e) => { this.setState({ selectedTab: 2 }) }} />}
                                    <Tab value={3} label='Participantes' onClick={(e) => { this.setState({ selectedTab: 3 }) }} />
                                </Tabs>
                                {/* Event general information */}
                                {selectedTab === 1 && // First tab content
                                    <EventDetails
                                        event={event}
                                        readOnly={readOnly}
                                        onSave={(data) => {
                                            let updatedEvent = Object.assign(event, data)
                                            this.saveEvent(updatedEvent, () => {
                                                if (isEventCreation) this.setState({ selectedTab: 2 })
                                                this.showSuccessSnackbar()
                                            })
                                        }}
                                    />
                                }
                                {/* Event contribution suggestions */}
                                {selectedTab === 2 && // Second tab content
                                    <EventContributionSuggestions
                                        event={event}
                                        readOnly={readOnly}
                                        onSave={(data) => {
                                            let updatedEvent = Object.assign(event, data)
                                            this.saveEvent(updatedEvent, () => {
                                                if (isEventCreation) this.setState({ selectedTab: 3 })
                                                this.showSuccessSnackbar()
                                            })
                                        }}
                                    />
                                }
                                {/* Event participants list */}
                                {selectedTab === 3 && // Third tab content
                                    <EventGuestsList event={event} readOnly={readOnly}
                                    />
                                }
                            </div>}
                    </div>
                </div>
                {/* Event action snackbar */}
                <SimpleSnackbar
                    open={snackbar.open}
                    message={snackbar.message}
                    duration={2000}
                    onClose={() => { this.setState({ snackbar: { open: false } }) }}
                />
                {/* Error dialog */}
                <SimpleAlert
                    isOpen={error.show}
                    title={error.title}
                    message={error.message}
                    onAccept={(e) => { this.setState({ error: { ...error, show: false } }) }}
                />
                {/* Toggle edit state FAB */}
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
                        {readOnly && <EditIcon />} {/* Readonly state icon */}
                        {!readOnly && <CheckIcon />} {/* Editting state icon */}
                    </Fab>
                </Tooltip>
            </div>
        )
    }
}

export default withRouter(withStyles(styles, { withTheme: true })(EventDetailsPage))