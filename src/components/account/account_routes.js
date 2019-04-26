import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../404';
import Orders from './orders';
import Profile from './profile';
import SignIn from './sign_in';
import SignOut from './sign_out';
import SignUp from './sign_up';
import auth from '../../hoc/auth';


export default props => {
    const { match } = props;

    return (
        <Switch>
            <Route path={`${match.path}/orders`} component={auth(Orders)}/>
            <Route path={`${match.path}/profile`} component={auth(Profile}/>
            <Route path={`${match.path}/sign-in`} component={auth(SignIn, '/account/orders', false)}/>
            <Route path={`${match.path}/sign-out`} component={auth(SignOut, '/')}/>
            <Route path={`${match.path}/sign-up`} component={auth(SignUp, '/products', false)}/>
            <Route component={NotFound}/>
        </Switch>
    );
}