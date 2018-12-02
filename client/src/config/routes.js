import React from 'react'
import Route from 'react-router-dom/Route';
import Dashboard from '../pages/Dashboard';
import Contacts from '../pages/Contacts';
import Settings from '../pages/Settings';

const routes = [
  <Route exact key="dashboard" path="/dashboard" name="Dashboard" component={Dashboard} />,
  <Route exact key="contacts" path="/contacts" name="Contatos" component={Contacts} />,
  <Route exact key="settings" path="/settings" name="Configurações" component={Settings} />,
]

export default routes;