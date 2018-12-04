import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Input, FormControl, InputAdornment, CircularProgress } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock'
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';

import ObjectUtils from '../../../utils/ObjectUtils';
import SimpleAlertDialog from '../../../components/Interaction/SimpleAlert';
import * as API from '../../../api/ApiClient';

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
    color: '#666666'
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
      maxWidth: '200px'
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
    width: '100%',
    maxWidth: '400px',
    padding: '16px',
    display: 'inline-grid'
  }
})

class SigninPage extends Component {

  state = {
    user: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    isLoading: false,
    responseError: { show: false, title: '', message: '' }
  }

  componentDidMount() { }

  isValidSignupForm(){
   return ObjectUtils.hasKeys(this.state.user, ['name', 'email', 'password', 'passwordConfirmation']);
  }

  signup() {
    this.setState({ isLoading: true }); // Sets loading state 
    API.createUser({ user: this.state.user }).then((response) => { // In case of success...
      console.log(response.data);
      this.props.history.push('/home');
    }).catch((error) => {  // In case of error...
      let message = '';
      switch (error.response.status) {
        default:
          message = 'Por favor, tente novamente mais tarde.';
          break;
        case 409:
          message = 'Já existe um usuário com este e-mail. Por favor, tente com outro endereço ou efetue o login.';
          break;
        case 400:
          message = 'Por favor, verifique as informações preenchidas e tente novamente ;)';
          break;
      }
      this.setState({ // Shows error message
        responseError: {
          ...this.state.responseError,
          show: true,
          title: 'Ops! Houve um erro no cadastro.',
          message: message
        },
        isLoading: false
      });
    });
  }

  render() {
    const { classes, theme } = this.props;
    const { user, isLoading, responseError } = this.state;
    return (
      <div className={classes.main}>
        <Helmet>
          <meta name='theme-color' content={theme.palette.primary.main} />
          <meta name='apple-mobile-web-app-status-bar-style' content={theme.palette.primary.main} />
          <meta name='msapplication-navbutton-color' content={theme.palette.primary.main} />
          <title>Cadastro</title>
        </Helmet>
        <AppBar color='primary' position='static'>
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
                      type='text'
                      onChange={(e) => {
                        this.setState({
                          user: { ...user, name: e.target.value }
                        })
                      }}
                      style={{ padding: '10px' }}
                      placeholder='Teu nome'
                      autoComplete='true'
                      autoCapitalize='true'
                      startAdornment={
                        <InputAdornment
                          position='start'
                          className={classes.primaryColor}
                        >
                          <AccountCircle />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.margin}>
                    <Input
                      type='e-mail'
                      onChange={(e) => {
                        this.setState({
                          user: { ...user, email: e.target.value }
                        })
                      }}
                      style={{ padding: '10px' }}
                      placeholder='Teu e-mail'
                      autoComplete='true'
                      startAdornment={
                        <InputAdornment
                          position='start'
                          className={classes.primaryColor}
                        >
                          <EmailIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.margin}>
                    <Input
                      type='password'
                      onChange={(e) => {
                        this.setState({
                          user: { ...user, password: e.target.value }
                        })
                      }}
                      style={{ padding: '10px' }}
                      placeholder='Tua senha'
                      autoComplete='true'
                      startAdornment={
                        <InputAdornment
                          position='start'
                          className={classes.primaryColor}
                        >
                          <LockIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.margin}>
                    <Input
                      type='password'
                      onChange={(e) => {
                        this.setState({
                          user: { ...user, passwordConfirmation: e.target.value }
                        })
                      }}
                      style={{ padding: '10px' }}
                      placeholder='Confirmação da senha'
                      autoComplete='true'
                      startAdornment={
                        <InputAdornment
                          position='start'
                          className={classes.primaryColor}
                        >
                          <LockIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <Button
                    fullWidth
                    onClick={() => { this.signup() }}
                    disabled={!this.isValidSignupForm()}
                    className={classes.button}
                    variant='contained'
                    color='primary'
                  >
                    {!isLoading && 'Cadastrar!'}
                    {isLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
                  </Button>
                </form>
              </div>
              <SimpleAlertDialog
                isOpen={responseError.show}
                title={responseError.title}
                message={responseError.message}
                onAccept={(e) => { this.setState({ responseError: { ...responseError, show: false } }) }}
              />
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(SigninPage))
