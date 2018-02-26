import * as React from 'react';
import {
    create,
    ReactTestInstance,
    ReactTestRenderer,
    ReactTestRendererJSON
} from 'react-test-renderer';
import * as Components from 'Components/WelcomeScreen/Components';
import { MainPage } from 'Components/WelcomeScreen/Pages/MainPage'

describe('MainPage component', () => {
    const wrapper: ReactTestRenderer = create(<MainPage />);
    const mainPage: ReactTestInstance = wrapper.root;

    const json: ReactTestRendererJSON = wrapper.toJSON();

    it('Matches Snapshot', () => {
        expect(json).toMatchSnapshot();
    });

    it('MainPage renders without crashes', () => {
        expect(mainPage.type).toBe(MainPage);
    });

    it('Contains just one <PageHeader /> element', () => {
        expect(mainPage.findAllByType(Components.Header).length).toEqual(1);
    });

    it('Contains just one <PageBody /> element', () => {
        expect(mainPage.findAllByType(Components.Body).length).toEqual(1);
    });

    it('Contains just one <PageFooter /> element', () => {
        expect(mainPage.findAllByType(Components.Footer).length).toEqual(1);
    });
});
