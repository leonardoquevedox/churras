import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import EventGuest from './EventGuest'
import { Grid } from '@material-ui/core'

const styles = theme => ({
    content: {
        minHeight: '70vh',
        padding: '1 readOnly ? p : 12x',
        paddingTop: '20px'
    },
})

class EventGuestsList extends React.Component {
    state = {
        guests: [{}]
    }

    render() {
        const { classes, style, readOnly } = this.props
        console.log(this.props);
        return (
            <div className={classes.content} style={{ ...style }}>
                {/* Guests! */}
                <Grid container justify='flex-start' spacing={8}>
                    {this.state.guests.map((contact, index) => (
                        <Grid key={index} item xs={12} sm={readOnly ? 12 : 6} md={readOnly ? 12 : 4} lg={readOnly ? 12 : 3}>
                            <EventGuest guest={contact} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(EventGuestsList)