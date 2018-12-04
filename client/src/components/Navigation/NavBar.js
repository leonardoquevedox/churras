import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CalendarIcon from '@material-ui/icons/CalendarToday'
import SettingsIcon from '@material-ui/icons/Settings'
import { Hidden } from '@material-ui/core'
import withRouter from 'react-router-dom/withRouter'

import routes from '../../config/routes'

const drawerWidth = 240

const styles = theme => ({
    root: {
        display: 'flex',
        marginBottom: '40px',
    },
    appBar: {
        paddingLeft: '16px',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9 + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
})

class MiniDrawer extends React.Component {
    state = {
        open: false,
        title: 'Churras'
    }

    toggleDrawer = () => {
        if (this.state.open) this.setState({ open: false })
        else this.setState({ open: true })
    }

    componentDidMount() {
        this.onRouteChanged()
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged()
        }
    }

    onRouteChanged() {
        routes.protected.forEach((route) => {
            if (route.props.path === this.props.location.pathname) {
                this.setState({ title: route.props.name })
            }
        })
    }

    render() {
        const { classes, theme, history, location } = this.props
        return (
            <div className={classes.root}>
                <AppBar
                    position='fixed'
                    className={classes.appBar}
                >
                    <Toolbar disableGutters>
                        <Hidden only={['xs']}>
                            <IconButton
                                color='inherit'
                                aria-label='Open drawer'
                                onClick={this.toggleDrawer}
                                className={classes.menuButton}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                        <Typography variant='h6' color='inherit' noWrap>
                            {this.state.title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Hidden only={['xs']}>
                    <Drawer
                        variant='permanent'
                        className={classes.drawer}
                        classes={{
                            paper: classNames({
                                [classes.drawerOpen]: this.state.open,
                                [classes.drawerClose]: !this.state.open,
                            }),
                        }}
                        open={this.state.open}
                    >
                        <div className={classes.toolbar}>
                            <IconButton onClick={this.handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </div>
                        <Divider />
                        <List>
                            <ListItem button onClick={(e) => {
                                if (location.pathname.indexOf('event') === -1) history.push('/')
                            }}>
                                <ListItemIcon>
                                    <CalendarIcon color={location.pathname === '/' ? 'primary' : 'error'} />
                                </ListItemIcon>
                                <ListItemText primary='Churrascos' />
                            </ListItem>
                        </List>
                        <Divider />
                        <List>
                            <ListItem button onClick={(e) => { history.push('/settings') }}>
                                <ListItemIcon>
                                    <SettingsIcon color={location.pathname === '/settings' ? 'primary' : 'error'} />
                                </ListItemIcon>
                                <ListItemText primary='Configurações' />
                            </ListItem>
                        </List>
                    </Drawer>
                </Hidden>
            </div>
        )
    }
}

MiniDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
}

export default withRouter(withStyles(styles, { withTheme: true })(MiniDrawer))