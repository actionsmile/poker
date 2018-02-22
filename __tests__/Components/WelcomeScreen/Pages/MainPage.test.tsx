import * as React from 'react';
import { create } from 'react-test-renderer';
import { PageFooter } from 'Components/WelcomeScreen/Components/PageFooter';
import { MainPage } from 'Components/WelcomeScreen/Pages/MainPage'

describe('MainPage component', () => {
    const wrapper = create(<MainPage />);
    const mainPage = wrapper.root;
    it('MainPage renders without crashes', () => {
        expect(mainPage.type).toBe(MainPage);
    });

    it('Contains just one <PageFooter /> element', () => {
        expect(mainPage.findAllByType(PageFooter).length).toEqual(1);
    });
});
