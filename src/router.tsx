import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/Main';

import Home from './pages/Home';
import None from './pages/None';

function Routes() {
    return (
        <BrowserRouter>
            <Main>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/search" exact>
                        <None />
                    </Route>
                    <Route path="/calendar" exact>
                        <None />
                    </Route>
                </Switch>
            </Main>
        </BrowserRouter>
    );
}

export default Routes;
