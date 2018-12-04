import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import EmptyState from '../EmptyState'
import EventItem from './EventItem'
import { Grid } from '@material-ui/core';

const styles = theme => ({
    
})

class EventsList extends React.Component {
    state = {}
    render() {
        const { classes, events } = this.props;
        return (
            <div className={classes.content}>
                {/* No events... */}
                <div style={{ display: (events.length === 0 ? 'block' : 'none') }}>
                    <EmptyState
                        message='Bah! Nenhum churrasco cadastrado por enquanto. Mas não te preocupa: É só clicar no botão ali embaixo pra criar um e convidar a galera ;)'
                    />
                </div>
                {/* Events! */}
                <div style={{ display: (events.length > 0 ? 'block' : 'none') }}>
                    <Grid container alignItems="center" alignContent="center" spacing={16}>
                        {events.map((event, index) => (
                            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                                <EventItem event={event} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(EventsList)