import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import EventGuest from './EventGuest'
import { Grid } from '@material-ui/core'

const styles = theme => ({
    content: {
        minHeight: '70vh',
        padding: '16px',
        paddingTop: '20px'
    },
})

class EventGuestsList extends React.Component {
    state = {
        guests: [{}]
    }

    render() {
        const { classes, style } = this.props
        return (
            <div className={classes.content} style={{ ...style }}>
                {/* Guests! */}
                <Grid container justify='flex-start' spacing={8}>
                    {this.state.guests.map((contact, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                            <EventGuest guest={contact} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(EventGuestsList)