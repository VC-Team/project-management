import { Story, Meta } from '@storybook/react/types-6-0';

import { Avatar, Props } from '.';

// This default export determines where your story goes in the story list
export default {
	title: 'Components|atoms/Avatar',
	component: Avatar,
} as Meta;

const Template: Story<Props> = ({ ...props }) => <Avatar {...props} />;

export const Normal = Template.bind({});

Normal.args = {
	src: 'https://picsum.photos/32/32',
	borderOn: ['hover'],
};
