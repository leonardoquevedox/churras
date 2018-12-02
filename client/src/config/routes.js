import React from 'react'
import Route from 'react-router-dom/Route';
import Dashboard from '../pages/Dashboard';

const routes = [
  <Route key="dashboard" path="/dashboard" exact component={Dashboard} />
]

export default routes;