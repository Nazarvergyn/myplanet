
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Activate from './Screens/Activate';
import Private from './Screens/Private';
import Admin from './Screens/Admin';
import ForgetPassword from './Screens/ForgetPassword';
import ResetPassword from './Screens/ResetPassword';

import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
import 'react-toastify/dist/ReactToastify.css';

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route path='/' exact render={props => <App {...props} />} />
          <Route path='/register' exact render={props => <Register {...props} />} />
          <Route path='/login' exact render={props => <Login {...props} />} />
          <Route path='/users/password/forget' exact render={props => <ForgetPassword {...props} />} />
          <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
          <Route path='/users/password/reset/:token' exact render={props => <ResetPassword {...props} />} />
          <PrivateRoute path="/private" exact component={Private} />
          <AdminRoute path="/admin" exact component={Admin} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



// reportWebVitals();
