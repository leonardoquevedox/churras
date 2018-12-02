import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import EmptyState from '../EmptyState'
import EventItem from './EventItem'
import { Grid } from '@material-ui/core';

const styles = theme => ({
    content: {
        minHeight: '70vh',
        padding: '30px',
        paddingTop: '5px'
    },
})

class EventsList extends React.Component {
    state = {
        events: [
            {
                title: "Níver do Gui",
                observations: "Lorem asduiqdw asiuqhwdbqwdqwe qwe qe qwe qw eqe qweqweqweqweq eqweqwe qweqweqwe qweqweqwe Lorem ipsum dolem sit amet",
                date: new Date(),
                amountRaised: 100.00
            },
            {
                title: "Final de Ano",
                observations: "Lorem asduiqdw asiuqhwdbqwdqwe qwe qe qwe qw eqe qweqweqweqweq eqweqwe qweqweqwe qweqweqwe Lorem ipsum dolem sit amet",
                date: new Date(),
                amountRaised: 100.00
            },
            {
                title: "Sem motivo",
                observations: "Lorem asduiqdw asiuqhwdbqwdqwe qwe qe qwe qw eqe qweqweqweqweq eqweqwe qweqweqwe qweqweqwe Lorem ipsum dolem sit amet",
                date: new Date(),
                amountRaised: 100.00
            },
            {
                title: "Níver do Gui",
                observations: "Lorem asduiqdw asiuqhwdbqwdqwe qwe qe qwe qw eqe qweqweqweqweq eqweqwe qweqweqwe qweqweqwe Lorem ipsum dolem sit amet",
                date: new Date(),
                amountRaised: 100.00
            },
            {
                title: "Níver do Gui",
                observations: "Lorem asduiqdw asiuqhwdbqwdqwe qwe qe qwe qw eqe qweqweqweqweq eqweqwe qweqweqwe qweqweqwe Lorem ipsum dolem sit amet",
                date: new Date(),
                amountRaised: 100.00
            },
            {
                title: "Níver do Gui",
                observations: "Lorem asduiqdw asiuqhwdbqwdqwe qwe qe qwe qw eqe qweqweqweqweq eqweqwe qweqweqwe qweqweqwe Lorem ipsum dolem sit amet",
                date: new Date(),
                amountRaised: 100.00
            }
        ]
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.content}>
                {/* No events... */}
                <div style={{ display: (this.state.events.length === 0 ? 'block' : 'none') }}>
                    <EmptyState
                        message='Bah! Nenhum churrasco cadastrado por enquanto. Mas não te preocupa: É só clicar no botão ali embaixo pra criar um e convidar a galera ;)'
                    />
                </div>
                {/* Events! */}
                <div style={{ display: (this.state.events.length > 0 ? 'block' : 'none') }}>
                    <Grid container justify="flex-start" spacing={16}>
                        {this.state.events.map((event, index) => (
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