import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';

function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/results" component={Results} />
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;