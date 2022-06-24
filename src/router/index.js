import React from 'react';
import  {Switch, Route, Routes} from 'react-router';

import Routes from '../pages/NoMatch'

export default Router = () =>{
    <Switch>
        {
            Routes.map(route =>(
                <Route {...route} key={route.path} />
            ))
        }
        <Route render={(props) => <NoMatch {...props} />} />
    </Switch>
};