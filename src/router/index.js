import React from 'react';
import {Route, Routes} from 'react-router-dom';

import NoMatch from '../pages/NoMatch'
import Routers from './routers'
import Home from '../pages/Home'

const routerApp = () =>{
    return(
        <Routes>
            <Route element={<Home />} path="/" /> 
            {/* {Routers.map(route =>(
                    <Route element={<Home />}  key={route.path} />
                ))
            }*/
            <Route render={(props)=><NoMatch {...props}/>} /> }
        </Routes>
    )
}

export default routerApp;