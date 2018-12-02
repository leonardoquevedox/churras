import React, { Component } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import EmptyState from '../../components/EmptyState'

const styles = theme => ({
  main: {
    display: 'flex',
    flexDirection: 'column'
  },
  root: {
    flexGrow: 1,
    flex: '1 0 100%',
    paddingTop: '20px'
    // height: '100%',
    // overflow: 'hidden'
  },
  hero: {
    height: '100%',
    // minHeight: '80vh',
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    color: "#666666"
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    letterSpacing: '.1rem',
    textIndent: '.7rem',
    marginTop: '10px',
    fontWeight: theme.typography.fontWeightLight,
    [theme.breakpoints.only('xs')]: {
      fontSize: 24,
      letterSpacing: '.1em',
      textIndent: '.1rem'
    },
    whiteSpace: 'wrap'
  },
  subtitle: {
    fontSize: 18,
    [theme.breakpoints.only('xs')]: {
      fontSize: 14,
      maxWidth: "200px"
    },
  },
  headline: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit,
    maxWidth: 600,
    textAlign: 'center',
    fontSize: 18
  },
  primaryColor: {
    color: theme.palette.primary.main
  },
  content: {
    height: '100%',
    // paddingTop: theme.spacing.unit * 8,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit
    }
  },
  button: {
    marginTop: theme.spacing.unit * 3
  },
  fullWidthForm: {
    width: "100%",
    maxWidth: "400px",
    padding: "16px",
    display: "inline-grid"
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 10,
    right: theme.spacing.unit * 4,
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  }
})

class Contacts extends Component {


  isAuthorised = () => {
    try {
      const key = Object.keys(localStorage).find(e => e.match(/persist:root/))
      const data = JSON.parse(localStorage.getItem(key))
      const auth = JSON.parse(data.auth)

      return auth && auth.isAuthorised

    } catch (ex) {
      return false
    }
  }

  componentDidMount() { }

  render() {
    const { classes, theme } = this.props;
    theme.palette.primary = {
      contrastText: "#fff",
      dark: "#666666",
      light: "#7986cb",
      main: "#fe1800"
    }
    return (
      <div className={classes.main}>
        <div className={classes.root}>
          <div className={classes.hero}>
            <div className={classes.content}>
              <EmptyState message='Bah! Ainda não tem ninguém por aqui. Mas não te preocupa: É só clicar no botão ali embaixo pra criar um e convidar a galera ;)' />
              <Tooltip id="tooltip-icon2" title="Adicionar pessoa" placement="top">
                <Fab color="primary" aria-label="Add" size='large' className={classes.fab}>
                  <AddIcon />
                </Fab>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(Contacts))