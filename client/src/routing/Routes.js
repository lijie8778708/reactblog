import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Blog from '../blog/Blog';
import Login from '../auth/Login';
import Resume from '../resume/Resume';
import BlogDetail from '../blog/BlogDetail';
import PrivateRoute from './PrivateRoute';
import Main from '../dashboard/Main';
const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Blog} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/blogdetail/:id' component={BlogDetail} />
            <PrivateRoute exact path='/dashboard' component={Main} />
            <Route component={Login} />
        </Switch>
    )
}
export default Routes; 