import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState, IGreetingsState } from 'Core/Models';
import { PageFooter } from './../Components/PageFooter';

interface IMainPageProps {
    greetings: IGreetingsState;
}

class MainPageView extends React.Component<IMainPageProps> {

    public render(): JSX.Element {
        return (
            <div className="hero is-dark is-fullheight">
                <div className="hero-body"></div>
                <PageFooter />
            </div>
        );
    }
}

const mapStateToProps = (state: IAppState): IMainPageProps => ({
    greetings: state.greetings
});

export const MainPage = connect<{}, IMainPageProps, {}>(mapStateToProps, null)(
    MainPageView
);
