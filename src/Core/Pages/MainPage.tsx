import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from './../Models/CoreModels';
import { IGreetingsState } from './../Models/GreetingsModel';

interface IMainPageProps {
    greetings: IGreetingsState;
}

class MainPageView extends React.Component<IMainPageProps> {

    private handleClick = (): void => {
        console.log('Click!');
    }

    public render(): JSX.Element {
        const { greetings } = this.props;
        return (
            <div className="mainPage--container">
                <h1>{greetings.title}</h1>
                <button
                    className="button is-outlined is-info is-rounded"
                    onClick={this.handleClick}
                >
                    {greetings.home ? greetings.home.label : 'Hm'}
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state: IAppState): IMainPageProps => ({
    greetings: state.greetings
});

export const MainPage = connect<{}, IMainPageProps, {}>(
    mapStateToProps,
    null
)(MainPageView);
