import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    persona: {
        width: '250px',
        height: '250px',
        margin: 'auto',
        display: 'block'
    },
    message: {
        textAlign: 'center',
        maxWidth: '400px',
        backgroundColor: '#efefef',
        padding: '20px',
        fontSize: '14px',
        borderRadius: '10px',
        color: '#444444'
    },
    content: {
        padding: '16px'
    }
})

class EmptyState extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.content}>
                <div className={classes.message}>
                    {this.props.message}
                </div>
                <div>
                    <img src='/persona.png' alt='Assistente do aplicativo.' className={classes.persona}></img>
                </div>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(EmptyState)