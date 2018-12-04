import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import EventGuest from './EventGuest'
import { Grid, Typography } from '@material-ui/core'

const styles = theme => ({
    content: {
        minHeight: '70vh',
        padding: '20px',
        paddingTop: '0px'
    },
})

class EventGuestsList extends React.Component {
    state = {
        guests: [{}, {}]
    }

    render() {
        const { classes, style, readOnly } = this.props
        return (
            <div className={classes.content} style={{ ...style }}>
                {/* Event guest list title */}
                <Typography
                    align='left'
                    variant='subtitle1'
                    color='inherit'
                    gutterBottom
                >
                    {readOnly ? 'Galera' : ''}
                </Typography>
                {/* Guests! */}
                <Grid container justify='flex-start' spacing={16}>
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