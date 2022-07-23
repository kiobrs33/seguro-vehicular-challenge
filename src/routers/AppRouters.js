import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from "react-router-dom";

import { CarScreen } from '../components/car/CarScreen';
import { Thanks } from '../components/thanks/Thanks';
import { Navbar } from '../components/navbar/Navbar';
import { PlanScreen } from '../components/plan/PlanScreen';
import { UserScreen } from '../components/user/UserScreen';

export const AppRouters = () => {
    return (
        <Router >
            <Navbar />
            <Switch>
                <Route  exact path="/car" component={CarScreen} />
                <Route  exact path="/plan" component={PlanScreen} />
                <Route  exact path="/thanks" component={Thanks} />
                <Route  path="/" component={UserScreen} />
                <Redirect  to="/" />
            </Switch>
        </Router>
    )
}
