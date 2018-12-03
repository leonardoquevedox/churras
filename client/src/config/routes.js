import React from 'react'
import Route from 'react-router-dom/Route';

import EventsDashboard from '../pages/Events/EventsDashboard';
import EventDetails from '../pages/Events/EventDetails';

import ContactsDashboard from '../pages/Contacts/ContactsDashboard';
import ContactDetails from '../pages/Contacts/ContactDetails';

import UserInformation from '../pages/User/Information';
import UserSettings from '../pages/User/Settings';
import PasswordUpdate from '../pages/User/PasswordUpdate';

const routes = [
  <Route exact key="me" path="/me" name="Meus dados" component={UserInformation} />,
  <Route exact key="settings" path="/settings" name="Configurações" component={UserSettings} />,
  // ---------- Password Routes
  <Route exact key="password-update" path="/settings" name="Alterar senha" component={PasswordUpdate} />,
  // ---------- Events Routes
  <Route exact key="home" path="/home" name="Churrascos" component={EventsDashboard} />,
  <Route exact key="event" path="/event" name="Churrasco" component={EventDetails} />,
  // ---------- Contacts Routes
  <Route exact key="contacts" path="/contacts" name="Galera" component={ContactsDashboard} />,
  <Route exact key="contact" path="/contact" name="Galera" component={ContactDetails} />,
]

export default routes;