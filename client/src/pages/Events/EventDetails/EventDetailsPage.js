import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Tabs, Tab } from '@material-ui/core';
import EventDetails from '../../../components/Events/EventDetails'
import EventContributionInput from '../../../components/Events/EventContributionInput'
import EventGuestsList from '../../../components/Events/EventGuestsList'

const styles = theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
    },
    root: {
        flexGrow: 1,
        flex: '1 0 100%',
        padding: '20px'
        // height: '100%',
        // overflow: 'hidden'
    },
    hero: {
        height: '100%',
        // minHeight: '80vh',
        flex: '0 0 auto',
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
    }
})

class EventDetailsPage extends Component {
    state = {
        selectedTab: 1,
        event: {}
    }

    componentDidMount() { }

    render() {
        const { event, selectedTab } = this.state;
        const { classes } = this.props;
        return (
            <div className={classes.main}>
                <div className={classes.root}>
                    <div className={classes.hero}>
                        <div className={classes.content}>
                            <Tabs color="primary" fullWidth value={selectedTab}>
                                <Tab value={1} label="Informações" onClick={(e) => { this.setState({ selectedTab: 1 }) }} />
                                <Tab value={2} label="Contribuições" onClick={(e) => { this.setState({ selectedTab: 2 }) }} />
                                <Tab value={3} label="Participantes" onClick={(e) => { this.setState({ selectedTab: 3 }) }} />
                            </Tabs>
                            <EventDetails
                                onSave={(data) => {
                                    console.log(data);
                                    this.setState({
                                        event: { ...event, data },
                                        selectedTab: 2
                                    })
                                }}
                                style={{ display: (selectedTab === 1 ? 'block' : 'none') }}
                            />
                            <EventContributionInput
                                onSave={(data) => {
                                    console.log(data);
                                    this.setState({
                                        event: { ...event, data },
                                        selectedTab: 3
                                    })
                                }}
                                style={{ display: (selectedTab === 2 ? 'block' : 'none') }} />
                            <EventGuestsList
                                style={{ display: (selectedTab === 3 ? 'block' : 'none') }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(withStyles(styles, { withTheme: true })(EventDetailsPage))