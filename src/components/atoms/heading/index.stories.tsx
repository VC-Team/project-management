import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Heading, Props } from '.';

// This default export determines where your story goes in the story list
export default {
	title: 'Components|atoms/Heading',
	component: Heading,
} as Meta;

const Template: Story<Props> = ({ modifiers, children }) => <Heading modifiers={modifiers}>{children}</Heading>;

export const Normal = Template.bind({});

Normal.args = {};
