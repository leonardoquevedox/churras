import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import EmptyState from '../EmptyState'
import ContactItem from './ContactItem'
import { Grid } from '@material-ui/core';

const styles = theme => ({
    content: {
        minHeight: '70vh',
        padding: '30px',
        paddingTop: '20px'
    },
})

class ContactsList extends React.Component {
    state = {
        contacts: [
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
        const { classes } = this.props;
        return (
            <div className={classes.content}>
                {/* No contacts... */}
                <div style={{ display: (this.state.contacts.length === 0 ? 'block' : 'none') }}>
                    <EmptyState
                        message='Bah! Nenhum churrasco cadastrado por enquanto. Mas não te preocupa: É só clicar no botão ali embaixo pra criar um e convidar a galera ;)'
                    />
                </div>
                {/* Events! */}
                <div style={{ display: (this.state.contacts.length > 0 ? 'block' : 'none') }}>
                    <Grid container justify="flex-start" spacing={16}>
                        {this.state.contacts.map((contact, index) => (
                            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                                <ContactItem contact={contact} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(ContactsList)