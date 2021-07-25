import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Produtos from './pages/Produtos';

export default function Router() {
    return(
        <Switch>
            <Route exact path={'', '/'} component= { Home } />
            <Route exact path='/sign-in' component = { SignIn } />
            <Route exact path='/product' component = { Produtos } />
        </Switch>
    )
}