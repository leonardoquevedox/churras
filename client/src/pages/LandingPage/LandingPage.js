import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import { GitHubIcon } from 'rmw-shell/lib/components/Icons'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Input,FormControl, InputAdornment } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock'
import AccountCircle from '@material-ui/icons/AccountCircle';


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
    [theme.breakpoints.only('xs')]: {
      fontSize: 18
    }
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
  logo: {
    color: 'red',
    margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 4}px`,
    width: '100%',
    height: '40vw',
    maxHeight: 250
  },
  steps: {
    maxWidth: theme.spacing.unit * 130,
    margin: 'auto'
  },
  step: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`
  },
  stepIcon: {
    marginBottom: theme.spacing.unit
  },
  markdownElement: {},
  cardsContent: {
    padding: 15,
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      padding: 0,
      paddingTop: 15
    }

  },
  card: {
    minWidth: 275,
    maxWidth: 350,
    margin: 15,
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      margin: 0,
      marginTop: 7
    }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  cardTitle: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  fullWidthForm: {
    width: "100%",
    maxWidth: "400px",
    padding: "16px",
    display: "inline-grid"
  }
})

class LandingPage extends Component {


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

  componentDidMount() {
    const { history } = this.props

    if (this.isAuthorised()) {
      history.push('/signin')
    }
  }


  render() {
    const { classes, history, theme } = this.props;
    theme.palette.primary = {
      contrastText: "#fff",
      dark: "#666666",
      light: "#7986cb",
      main: "#fe1800"
    }
    return (
      <div className={classes.main}>
        <Helmet>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta name="apple-mobile-web-app-status-bar-style" content={theme.palette.primary.main} />
          <meta name="msapplication-navbutton-color" content={theme.palette.primary.main} />
          <title>Churras</title>
        </Helmet>
        <AppBar color="primary" position='static'>
          <Toolbar disableGutters>
            <div style={{ flex: 1 }} />
            <Tooltip id="tooltip-icon2" title="GitHub repository">
              <IconButton
                name='github'
                aria-label='Open Github'
                color='inherit'
                href='https://github.com/leopq/churras'
                target='_blank'
                rel='noopener'
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <div className={classes.root}>
          <div className={classes.hero}>
            <div className={classes.content}>
              <img
                src='/icon.png'
                alt='Material-UI Logo'
                width="200"
                height="200"
                style={{ margin: "auto", display: "block" }}
              />
              <div className={classes.text}>
                <Typography
                  align='center'
                  component='h1'
                  color='inherit'
                  gutterBottom
                  className={classes.title}
                >
                  {'E aí, partiu um churras?'}
                </Typography>
                <Typography
                  align='center'
                  component='div'
                  color='inherit'
                  className={classes.subtitle}
                >
                  {'Insere tuas informações abaixo e vem com a gente:'}
                </Typography>
                <form className={classes.fullWidthForm}>
                  <FormControl fullWidth className={classes.margin}>
                    <Input
                      type="e-mail"
                      style={{ padding: "10px" }}
                      placeholder="Teu e-mail"
                      startAdornment={
                        <InputAdornment
                          position="start"
                          className={classes.primaryColor}
                        >
                          <AccountCircle />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.margin}>
                    <Input
                      type="password"
                      style={{ padding: "10px" }}
                      placeholder="Tua senha"
                      className={classes.primaryColor}
                      startAdornment={
                        <InputAdornment
                          position="start"
                          className={classes.primaryColor}
                        >
                          <LockIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <Button
                    fullWidth
                    onClick={() => { history.push('/signin') }}
                    className={classes.button}
                    variant='outlined'
                    color='primary'
                  >
                    {'Partiu!'}
                  </Button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(LandingPage))
