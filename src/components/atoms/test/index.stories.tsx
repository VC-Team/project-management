import { Story, Meta } from '@storybook/react/types-6-0';

import { Test, Props } from '.';

// This default export determines where your story goes in the story list
export default {
	title: 'Components|atoms/Test',
	component: Test,
} as Meta;

const Template: Story<Props> = ({ modifiers, children }) => <Test modifiers={modifiers}>{children}</Test>;

export const Normal = Template.bind({});

Normal.args = {
	children: 'Test',
};
