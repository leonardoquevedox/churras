import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import EmptyState from '../EmptyState'
import EventGuest from './EventGuest'
import { Grid } from '@material-ui/core';

const styles = theme => ({
    content: {
        minHeight: '70vh',
        padding: '30px',
        paddingTop: '20px'
    },
})

class EventGuestsList extends React.Component {
    state = {
        guests: [
            {
                name: 'Joana D\'arc',
                email: 'joana.darc@trin.ca'
            },
            {
                name: 'Ada Lovelace',
                email: 'ada.lovelace@trin.ca'
            },
            {
                name: 'John Maddog Hall',
                email: 'john.maddog@trin.ca'
            },
            {
                name: 'Linus Torvalds',
                email: 'linus.torvalds@trin.ca'
            },
            {
                name: 'Rita Lee',
                email: 'rita.lee@trin.ca'
            },
            {
                name: 'John Lennon',
                email: 'john.lennon@trin.ca'
            }
        ]
    }

    render() {
        const { classes, style } = this.props;
        return (
            <div className={classes.content} style={{...style}}>
                {/* No guests... */}
                <div style={{ display: (this.state.guests.length === 0 ? 'block' : 'none') }}>
                    <EmptyState
                        message='Bah! Nenhum churrasco cadastrado por enquanto. Mas não te preocupa: É só clicar no botão ali embaixo pra criar um e convidar a galera ;)'
                    />
                </div>
                {/* Events! */}
                <div style={{ display: (this.state.guests.length > 0 ? 'block' : 'none') }}>
                    <Grid container justify="flex-start" spacing={16}>
                        {this.state.guests.map((contact, index) => (
                            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                                <EventGuest guest={contact} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(EventGuestsList)