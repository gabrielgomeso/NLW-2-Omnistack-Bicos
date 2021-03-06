import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import WorkerList from './pages/WorkerList';
import WorkerForm from './pages/WorkerForm';

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={WorkerList} />
            <Route path="/give-classes" component={WorkerForm} />
        </BrowserRouter>
    )
}

export default Routes;