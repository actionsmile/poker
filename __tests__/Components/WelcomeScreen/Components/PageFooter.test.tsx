import * as React from 'react';
import {
    create,
    ReactTestInstance,
    ReactTestRenderer,
    ReactTestRendererJSON
} from 'react-test-renderer';

import { Footer } from 'Components/WelcomeScreen/Components';

describe('PageFooter component', () => {
    const wrapper: ReactTestRenderer = create(<Footer />);
    const footer: ReactTestInstance = wrapper.root;
    const json: ReactTestRendererJSON = wrapper.toJSON();

    it('Matches Snapshot', () => {
        expect(json).toMatchSnapshot();
    });

    it('Contains BULMA mention', () => {
        expect(footer.findByType('a').props.href).toContain('https://bulma');
    });
});
