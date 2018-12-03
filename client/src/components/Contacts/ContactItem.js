import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Avatar } from '@material-ui/core';

const styles = theme => ({
    card: {
        display: 'block',
        maxWidth: 400,
        height: '100%'
    },
    media: {
        height: 0,
        backgroundPosition: 'top',
        paddingTop: '150px', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
        opacity: 0.8
    },
    textCenter: {
        textAlign: 'center',
        marginBottom: '0px'
    },
    cardHeader: {
        paddingBottom: '0px'
    },
    cardContent: {
        paddingTop: '0px',
    },
    link: {
        color: theme.palette.primary.main
    },
    cardTitle: {
        color: '#444444',
        textTransform: 'uppercase'
    }
})

class EventItem extends React.Component {

    render() {
        const { classes, contact } = this.props;
        return (
            <Card className={classes.card}>
                <CardHeader
                    className={classes.cardHeader}
                    classes={{ title: classes.cardTitle }}
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            {contact.name[0]}
                        </Avatar>
                    }
                    title={contact.name}
                    subheader={contact.email}
                />
                <CardContent className={classes.cardContent}>
                    <div className={classes.textCenter}>
                        <Button className={classes.link}>
                            Ver mais
                    </Button>
                    </div>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles, { withTheme: true })(EventItem)