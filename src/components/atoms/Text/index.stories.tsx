import { Story, Meta } from '@storybook/react/types-6-0';

import { Text, Props } from '.';

import '../../../index.scss';

// This default export determines where your story goes in the story list
export default {
	title: 'Components|atoms/Text',
	component: Text,
} as Meta;

const Template: Story<Props> = props => <Text {...props} />;

export const Normal = Template.bind({});

Normal.args = {
	children: 'Text',
};
