import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  main: {
    display: 'flex',
    flexDirection: 'column'
  },
  root: {
    flexGrow: 1,
    flex: '1 0 100%',
    paddingTop: '20px',
    backgroundColor: '#efefef',
    minHeight: 'calc(100vh - 60px)',
    [theme.breakpoints.only(['xs', 'sm'])]: {
      minHeight: 'calc(100vh - 200px)',
    }
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
  }
})

class UserSettingsPage extends Component {


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
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(UserSettingsPage))