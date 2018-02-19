import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import { createStore } from 'redux';

import { MainPage } from 'Components/WelcomeScreen/Pages/MainPage';
import { appReducers } from 'Core/Reducers/AppReducers';

export class IndexComponent extends React.Component {

    private history = createBrowserHistory();
    private store = createStore(appReducers);

    public render(): JSX.Element {
        return (
            <Provider store={this.store}>
                <Router history={this.history}>
                    <Route
                        path="/"
                        component={MainPage}
                    />
                </Router>
            </Provider>
        );
    }
}
