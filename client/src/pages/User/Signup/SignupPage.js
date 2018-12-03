import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Input, FormControl, InputAdornment } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock'
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';

const styles = theme => ({
  main: {
    display: 'flex',
    flexDirection: 'column'
  },
  root: {
    flexGrow: 1,
    flex: '1 0 100%',
    padding: '20px',
    height: '100%',
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
    fontSize: 24,
    fontWeight: theme.typography.fontWeightLight,
    [theme.breakpoints.only('xs')]: {
      fontSize: 22,
      letterSpacing: '.1em',
      textIndent: '.1rem'
    },
    whiteSpace: 'wrap'
  },
  subtitle: {
    fontSize: 14,
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
  }
})

class SigninPage extends Component {

  componentDidMount() { }

  render() {
    const { classes, history, theme } = this.props;
    return (
      <div className={classes.main}>
        <Helmet>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta name="apple-mobile-web-app-status-bar-style" content={theme.palette.primary.main} />
          <meta name="msapplication-navbutton-color" content={theme.palette.primary.main} />
          <title>Cadastro</title>
        </Helmet>
        <AppBar color="primary" position='static'>
          <Toolbar disableGutters>
            <Typography align='center'
              component='h1'
              color='inherit'
              gutterBottom
              className={classes.headline}>
              Cadastro
            </Typography>
            <div style={{ flex: 1 }} />
          </Toolbar>
        </AppBar>
        <div className={classes.root}>
          <div className={classes.hero}>
            <div className={classes.content}>
              <div className={classes.text}>
                <Typography
                  align='center'
                  component='h1'
                  color='inherit'
                  gutterBottom
                  className={classes.title}
                >
                  {'Show! Se cadastrar é barbada: Só preencher tuas informações abaixo:'}
                </Typography>
                <form className={classes.fullWidthForm}>
                  <FormControl fullWidth className={classes.margin}>
                    <Input
                      type="text"
                      style={{ padding: "10px" }}
                      placeholder="Teu nome"
                      autoComplete="true"
                      autoCapitalize="true"
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
                      type="e-mail"
                      style={{ padding: "10px" }}
                      placeholder="Teu e-mail"
                      autoComplete="true"
                      startAdornment={
                        <InputAdornment
                          position="start"
                          className={classes.primaryColor}
                        >
                          <EmailIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.margin}>
                    <Input
                      type="password"
                      style={{ padding: "10px" }}
                      placeholder="Tua senha"
                      autoComplete="true"
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
                  <FormControl fullWidth className={classes.margin}>
                    <Input
                      type="password"
                      style={{ padding: "10px" }}
                      placeholder="Confirmação da senha"
                      autoComplete="true"
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
                    onClick={() => { history.push('/home') }}
                    className={classes.button}
                    variant='contained'
                    color='primary'
                  >
                    {'Cadastrar!'}
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

export default withRouter(withStyles(styles, { withTheme: true })(SigninPage))
