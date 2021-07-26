import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroCliente from './pages/CadastroCliente';
import CadastroProdutos from './pages/CadastroProdutos';

export default function Routes() {
    return(
        <Switch>
            <Route exact path={'', '/'} component= { Home } />
            <Route exact path='/cadastro' component = { CadastroCliente } />
            <Route exact path='/produto' component = { CadastroProdutos } />
        </Switch>      
    );
};