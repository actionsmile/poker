import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState, IGreetingsState } from 'Core/Models';

interface IMainPageProps {
    greetings: IGreetingsState;
}

class MainPageView extends React.Component<IMainPageProps> {
    private handleClick = (): void => {
        console.log('Click!');
    };

    public render(): JSX.Element {
        const { greetings } = this.props;
        return (
            <div className="hero is-dark is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">{greetings.title}</h1>
                        <button
                            className="button is-outlined is-info is-rounded subtitle"
                            onClick={this.handleClick}
                        >
                            {greetings.home ? greetings.home.label : 'Hm…'}
                        </button>
                    </div>
                </div>
                <div className="hero-foot mainPage--footer">
                    <div className="level">
                        <div className="level-left"></div>
                        <div className="level-right">
                            <a href="https://bulma.io" className="level-item">
                                <img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="128" height="24" />
                            </a>
                        </div>
                    </div>
                </div>
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
