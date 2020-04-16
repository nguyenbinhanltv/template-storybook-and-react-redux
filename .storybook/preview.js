import {
    addParameters,
    addDecorator
} from '@storybook/react';
import {
    withInfo
} from '@storybook/addon-info';

addDecorator(withInfo);

addParameters({
    notes: 'global notes',
});

addParameters({
    themes: [{
            name: 'twitter',
            class: 'theme-twt',
            color: '#00aced',
            default: true
        },
        {
            name: 'facebook',
            class: 'theme-fb',
            color: '#3b5998'
        },
    ],
});