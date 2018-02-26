import * as React from 'react';
import * as Components from './../Components';

export class MainPage extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="hero is-dark is-fullheight">
                <Components.Header />
                <Components.Body />
                <Components.Footer />
            </div>
        );
    }
}
