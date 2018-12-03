import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Tabs, Tab } from '@material-ui/core';
import EventDetails from '../../../components/Events/EventDetails'
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
        selectedTab: 0
    }

    componentDidMount() { }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.main}>
                <div className={classes.root}>
                    <div className={classes.hero}>
                        <div className={classes.content}>
                            <Tabs color="primary" fullWidth value={this.state.selectedTab}>
                                <Tab value={0} label="Informações" onClick={(e) => { this.setState({ selectedTab: 0 }) }} />
                                <Tab value={1} label="Participantes" onClick={(e) => { this.setState({ selectedTab: 1 }) }} />
                            </Tabs>
                            <EventDetails
                                onSave={(e) => { this.setState({ selectedTab: 1 }) }}
                                style={{ display: (this.state.selectedTab === 0 ? 'block' : 'none') }}
                            />
                            <EventGuestsList 
                                style={{ display: (this.state.selectedTab === 1 ? 'block' : 'none') }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(withStyles(styles, { withTheme: true })(EventDetailsPage))