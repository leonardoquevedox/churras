import React from 'react'
import Route from 'react-router-dom/Route';

import Landing from '../pages/Landing';
import UserSignup from '../pages/User/Signup';
import UserSignin from '../pages/User/Signin';
import PasswordRecovery from '../pages/User/PasswordRecovery';

import EventsDashboard from '../pages/Events/EventsDashboard';
import EventDetails from '../pages/Events/EventDetails';

import ContactsDashboard from '../pages/Contacts/ContactsDashboard';
import ContactDetails from '../pages/Contacts/ContactDetails';

import UserInformation from '../pages/User/Information';
import UserSettings from '../pages/User/Settings';
import PasswordUpdate from '../pages/User/PasswordUpdate';

const unprotectedRoutes = [
  // ---------- Unprotected General Routes
  <Route exact key="landing" path="/" component={Landing} />,
  <Route exact key="signup" path="/signup" component={UserSignup} />,
  <Route exact key="signin" path="/signin" component={UserSignin} />,
  <Route exact key="password-recovery" path="/password-recovery" component={PasswordRecovery} />
];

const protectedRoutes = [
  // ---------- Events Routes
  <Route exact key="home" path="/" name="Churrascos" component={EventsDashboard} />,
  <Route key="event" path="/event" name="Churrasco" component={EventDetails} />,
  // ---------- User Routes
  <Route exact key="me" path="/me" name="Meus dados" component={UserInformation} />,
  <Route exact key="settings" path="/settings" name="Configurações" component={UserSettings} />,
  // ---------- Password Routes
  <Route exact key="password-update" path="/password-update" name="Alterar senha" component={PasswordUpdate} />,
  // ---------- Contacts Routes
  <Route exact key="contacts" path="/contacts" name="Galera" component={ContactsDashboard} />,
  <Route exact key="contact" path="/contact" name="Galera" component={ContactDetails} />,
];

const routes = {
  protected: protectedRoutes,
  unprotected: unprotectedRoutes
};

export default routes;