import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Link, Props } from '.';

// This default export determines where your story goes in the story list
export default {
	title: 'Components|utils/Link',
	component: Link,
} as Meta;

const Template: Story<Props> = args => <Link {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	children: 'Link (depends on here is MPA or SPA)',
	to: '/somewhere',
	state: { a: 123 },
};
