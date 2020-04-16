module.exports = {
    stories: ['../src/stories/**/*.stories.[tj]s'],
    addons: [
        '@storybook/addon-actions/register',
        '@storybook/addon-knobs/register',
        '@storybook/addon-notes/register',
        'storybook-addon-themes'
    ],
};