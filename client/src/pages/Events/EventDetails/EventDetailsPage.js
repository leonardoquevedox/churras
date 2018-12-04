import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Tabs, Tab } from '@material-ui/core'
import EventDetails from '../../../components/Events/EventDetails'
import EventContributionInput from '../../../components/Events/EventContributionInput'
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
    }
})

class EventDetailsPage extends Component {
    state = {
        error: { show: false },
        isLoading: false,
        selectedTab: 1,
        token: '',
        event: {}
    }

    componentWillMount() {
        this.setState({ token: AuthUtils.getToken() }, () => {
            const urlParams = new URLSearchParams(window.location.search)
            const eventId = urlParams.get('id')
            if (eventId) this.getEvent(eventId)
            else this.setState({ loaded: true })
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
        const { event, error, selectedTab } = this.state
        const { classes } = this.props
        return (
            <div className={classes.main}>
                <div className={classes.root}>
                    <div className={classes.hero}>
                        {/* Awaits for event to load if id is passed */}
                        {this.state.loaded &&
                            <div className={classes.content}>
                                <Tabs color='primary' fullWidth value={selectedTab}>
                                    <Tab value={1} label='Informações' onClick={(e) => { this.setState({ selectedTab: 1 }) }} />
                                    <Tab value={2} label='Contribuições' onClick={(e) => { this.setState({ selectedTab: 2 }) }} />
                                    <Tab value={3} label='Participantes' onClick={(e) => { this.setState({ selectedTab: 3 }) }} />
                                </Tabs>
                                <EventDetails
                                    event={event}
                                    style={{ display: (selectedTab === 1 ? 'block' : 'none') }}
                                    onSave={(data) => {
                                        let updatedEvent = Object.assign(event, data)
                                        this.saveEvent(updatedEvent, () => { this.setState({ selectedTab: 2 }) })
                                    }}
                                />
                                <EventContributionInput
                                    event={event}
                                    style={{ display: (selectedTab === 2 ? 'block' : 'none') }}
                                    onSave={(data) => {
                                        let updatedEvent = Object.assign(event, data)
                                        console.log(data)
                                        this.saveEvent(updatedEvent, () => { this.setState({ selectedTab: 3 }) })
                                    }}
                                />
                                <EventGuestsList
                                    event={event}
                                    style={{ display: (selectedTab === 3 ? 'block' : 'none') }}
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
            </div>
        )
    }
}

export default withRouter(withStyles(styles, { withTheme: true })(EventDetailsPage))