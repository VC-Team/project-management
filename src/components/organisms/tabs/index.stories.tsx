import { Story, Meta } from '@storybook/react/types-6-0';

import { Tabs, Tab, TabList, TabPanel, TabsProps } from '.';

// This default export determines where your story goes in the story list
export default {
	title: 'Components|organisms/Tabs',
	component: Tabs,
} as Meta;

const Template: Story<TabsProps> = ({ ...otherProps }) => {
	return (
		<div style={{ margin: 100, width: 800, height: 300, backgroundColor: '#EEEBE5' }}>
			<Tabs {...otherProps}>
				<TabList>
					<Tab index={1}>Tab 1</Tab>
					<Tab index={2}>Tab 2</Tab>
					<Tab index={3}>Tab 3</Tab>
				</TabList>
				<TabPanel index={1}>TabPanel 1</TabPanel>
				<TabPanel index={2}>TabPanel 2</TabPanel>
				<TabPanel index={3}>TabPanel 3</TabPanel>
			</Tabs>
		</div>
	);
};

export const Normal = Template.bind({});

Normal.args = {
	forceRenderTabPanel: false,
};
