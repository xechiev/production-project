import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'Some text lorem ipsum',
    title: 'Some title lorem ipsum',
};

export const Error = Template.bind({});
Error.args = {
    text: 'Some text lorem ipsum',
    title: 'Some title lorem ipsum',
    theme: TextTheme.ERROR,
};


export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Some title lorem ipsum',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Some text lorem ipsum',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    text: 'Some text lorem ipsum',
    title: 'Some title lorem ipsum',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Some title lorem ipsum',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Some text lorem ipsum',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
