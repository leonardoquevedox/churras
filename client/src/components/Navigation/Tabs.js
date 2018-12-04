import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SettingsIcon from '@material-ui/icons/Settings';
import CalendarIcon from '@material-ui/icons/CalendarTodayOutlined'
import ContactsIcon from '@material-ui/icons/Contacts';
import { Hidden } from '@material-ui/core';
import withRouter from 'react-router-dom/withRouter';

const styles = {
  root: {
    flexGrow: 1,
    position: 'fixed',
    bottom: '0px',
    width: '100%'
  },
};

class IconLabelTabs extends React.Component {
  state = {
    value: 0,
  };

  tabs = [
    { value: '/', icon: <CalendarIcon />, onClick: (e) => { this.props.history.push('/'); } },
    { value: '/contacts', icon: <ContactsIcon />, onClick: (e) => { this.props.history.push('/contacts'); } },
    { value: '/settings', icon: <SettingsIcon />, onClick: (e) => { this.props.history.push('/settings'); } }
  ]

  tabValues = this.tabs.map((x) => x.value)

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, location } = this.props;
    return (
      <Hidden only={['sm', 'md', 'lg', 'xl']}>
        <Paper square className={classes.root}>
          <Tabs
            onChange={this.handleChange}
            fullWidth
            indicatorColor="primary"
            textColor="primary"
            value={(this.tabValues.indexOf(location.pathname) > -1) ? location.pathname : '/'}
          >
            {this.tabs.map((tab, index) =>
              <Tab key={index} value={tab.value} icon={tab.icon} onClick={(e) => { tab.onClick() }} />
            )}
          </Tabs>
        </Paper>
      </Hidden>
    );
  }
}

IconLabelTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(IconLabelTabs));