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
import { Input, FormControl, InputAdornment, CircularProgress } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Link from 'react-router-dom/Link';

import AuthUtils from '../../../utils/AuthUtils';
import StringUtils from '../../../utils/StringUtils';
import ObjectUtils from '../../../utils/ObjectUtils';
import API from '../../../api';

import SimpleAlertDialog from "../../../components/Interaction/SimpleAlert";

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
    fontSize: 28,
    fontWeight: theme.typography.fontWeightLight,
    [theme.breakpoints.only('xs')]: {
      fontSize: 24,
      letterSpacing: '.1em',
      textIndent: '.1rem'
    },
    whiteSpace: 'wrap'
  },
  subtitle: {
    fontSize: 14,
    [theme.breakpoints.only('xs')]: {
      fontSize: 14,
      maxWidth: "300px"
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
  buttonProgress: {
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
})

class SigninPage extends Component {

  state = {
    user: {
      email: "",
      password: ""
    },
    isLoading: false,
    authError: { show: false, title: "", message: "" }
  }

  componentDidMount() { }

  isValidSignupForm() {
    return ObjectUtils.hasKeys(this.state.user, ['email', 'password']) && StringUtils.isValidEmail(this.state.user.email);
  }

  authenticate() {
    this.setState({ isLoading: true }); // Sets loading state 
    API.authenticateUser({ user: this.state.user }).then((response) => { // In case of success...
      AuthUtils.storeProfile(response.data);
      this.props.history.push('/');
    }).catch((error) => {  // In case of error...
      this.setState({ // Shows error message
        authError: {
          ...this.state.authError,
          show: true,
          title: 'Ops! Houve um erro no processo de autenticação.',
          message: 'Verifique suas credenciais e tente novamente ;)'
        },
        isLoading: false
      });
    });
  }

  render() {
    const { classes, theme } = this.props;
    const { user, isLoading, authError } = this.state;
    return (
      <div className={classes.main}>
        {/* Head */}
        <Helmet>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta name="apple-mobile-web-app-status-bar-style" content={theme.palette.primary.main} />
          <meta name="msapplication-navbutton-color" content={theme.palette.primary.main} />
          <title>Churras</title>
        </Helmet>
        {/* View header */}
        <AppBar color="primary" position='static'>
          <Toolbar disableGutters>
            {/* Application name */}
            <Typography align='center'
              component='h1'
              color='inherit'
              gutterBottom
              className={classes.headline}>
              Churras
            </Typography>
            <div style={{ flex: 1 }} />
            {/* Github icon */}
            <Tooltip id="tooltip-icon2" title="GitHub repository">
              <IconButton name='github' aria-label='Open Github' color='inherit' href='https://github.com/leopq/churras' target='_blank' rel='noopener'>
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
        {/* View content */}
        <div className={classes.root}>
          <div className={classes.hero}>
            <div className={classes.content}>
              {/* Project icon */}
              <img
                src='/icon.png'
                alt='Material-UI Logo'
                width="125"
                height="125"
                style={{ margin: "auto", display: "block" }}
              />
              {/* View text content */}
              <div className={classes.text}>
                {/* Welcome message */}
                <Typography
                  align='center'
                  component='h1'
                  color='inherit'
                  gutterBottom
                  className={classes.title}
                >
                  {'E aí, partiu um churras?'}
                </Typography>
                {/* Input your data below message */}
                <Typography
                  align='center'
                  component='div'
                  color='inherit'
                  className={classes.subtitle}
                >
                  {'Insere tuas informações abaixo e vem com a gente:'}
                </Typography>
                {/* Sign in form */}
                <form className={classes.fullWidthForm}>
                  <FormControl fullWidth className={classes.margin}>
                    {/* E-mail input */}
                    <Input
                      type="e-mail"
                      value={user.email}
                      onChange={(e) => {
                        this.setState({
                          user: { ...user, email: e.target.value }
                        })
                      }}
                      placeholder="Teu e-mail"
                      autoComplete="true"
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
                  {/* Password input */}
                  <FormControl fullWidth className={classes.margin}>
                    <Input
                      type="password"
                      onChange={(e) => {
                        this.setState({
                          user: { ...user, password: e.target.value }
                        })
                      }}
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
                  {/* Sign in button */}
                  <Button
                    fullWidth
                    onClick={() => { this.authenticate() }}
                    className={classes.button}
                    variant='contained'
                    color='primary'
                    disabled={this.state.isLoading || !this.isValidSignupForm()}
                  >
                    {!isLoading && 'Partiu!'}
                    {isLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
                  </Button>
                </form>
                <div>
                  {/* Sign up call to action */}
                  <Typography
                    align='center'
                    component='div'
                    color='inherit'
                    className={classes.subtitle}
                  >
                    {'Ainda não tem uma conta?'}&nbsp;
                    <Link className={classes.primaryColor} to="signup">Cadastre-se</Link>
                  </Typography>
                </div>
                {/* Password Recovery */}
                <div>
                  <Typography
                    align='center'
                    component='div'
                    color='inherit'
                    className={classes.subtitle}>
                    {'Esqueceu sua senha?'}&nbsp;
                    <Link className={classes.primaryColor} to="password-recovery">Clique aqui</Link>
                  </Typography>
                </div>
                {/* Error dialog */}
                <SimpleAlertDialog
                  isOpen={authError.show}
                  title={authError.title}
                  message={authError.message}
                  onAccept={(e) => { this.setState({ authError: { ...authError, show: false } }) }}
                />
              </div>
            </div>
          </div>
        </div>
      </div >

    )
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(SigninPage))
