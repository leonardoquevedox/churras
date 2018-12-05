import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import EventGuest from './EventGuest'
import { Grid } from '@material-ui/core'

import API from '../../api'
import AuthUtils from '../../utils/AuthUtils'

import EmptyState from '../EmptyState'

const styles = theme => ({
    content: {
        minHeight: '70vh',
        padding: '30px'
    },
})

class EventGuestsList extends React.Component {
    state = {
        error: {},
        guests: []
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers() {
        let token = AuthUtils.getToken();
        API.listUsers({ xAccessToken: token }).then((response) => {
            this.setState({
                guests: response.data
            })
        }).catch((error) => {
            this.setState({
                error: {
                    show: true,
                    message: 'Bah! Deu erro no carregamento dos usuários. Tu podes tentar novamente mais tarde?'
                }
            })
        })
    }

    render() {
        const { error, guests } = this.state
        const { classes, style } = this.props
        return (
            <div className={classes.content} style={{ ...style }}>
                {/* Error message */}
                {
                    (error.show) && // In case of errors
                    <EmptyState message={error.message} />
                }
                {/* No guests... */}
                {
                    (!error.show && !(guests.length > 0)) && // In case of empty guests list
                    <EmptyState message="Bah! O sistema ainda não tem nenhum usuário além de ti. Mas fica tranquilx: Tu podes adicionar participantes ao churrasco a qualquer momento ;)" />
                }

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