import * as React from 'react';
import { PageFooter } from './../Components/PageFooter';

export class MainPage extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="hero is-dark is-fullheight">
                <div className="hero-body"></div>
                <PageFooter />
            </div>
        );
    }
}
