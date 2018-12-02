import React, { Component } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import ContactsList from '../../components/Contacts/ContactsList'

const styles = theme => ({
  main: {
    display: 'flex',
    flexDirection: 'column'
  },
  root: {
    flexGrow: 1,
    flex: '1 0 100%',
    paddingTop: '20px'
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 10,
    right: theme.spacing.unit * 4,
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  }
})

class Contacts extends Component {

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
              <ContactsList />
            </div>
          </div>
        </div>
        <Tooltip id="tooltip-icon2" title="Adicionar pessoa" placement="top">
          <Fab color="primary" aria-label="Add" size='large' className={classes.fab}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>

    )
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(Contacts))