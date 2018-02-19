import * as React from 'react';

export class PageFooter extends React.Component {

    public render(): JSX.Element {
        return (
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
        );
    }
}
