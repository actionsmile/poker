import * as React from 'react';
import { render } from 'react-dom';

import { IndexComponent } from 'Core/IndexComponent';

describe('Render app', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        render(<IndexComponent />, div);
    });
});
