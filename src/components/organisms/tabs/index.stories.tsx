import { Story, Meta } from '@storybook/react/types-6-0';

import { Tabs, Tab, TabList, TabPanel, TabsProps } from '.';

// This default export determines where your story goes in the story list
export default {
	title: 'Components|organisms/Tabs',
	component: Tabs,
} as Meta;

const Template: Story<TabsProps> = ({ ...otherProps }) => {
	return (
		<div style={{ margin: 100, width: 800, height: 300 }}>
			<Tabs {...otherProps}>
				<TabList>
					<Tab>Tab 1</Tab>
					<Tab>Tab 2</Tab>
					<Tab>Tab 3</Tab>
				</TabList>
				<TabPanel>TabPanel 1</TabPanel>
				<TabPanel>TabPanel 2</TabPanel>
				<TabPanel>TabPanel 3</TabPanel>
			</Tabs>
		</div>
	);
};

export const Normal = Template.bind({});

Normal.args = {
	forceRenderTabPanel: false,
	selectedIndex: undefined,
};
