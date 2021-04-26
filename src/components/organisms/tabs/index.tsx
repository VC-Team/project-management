import React, { useState, Children, isValidElement, cloneElement } from 'react';

export { default as Tab } from './tab';
export { default as TabList } from './tablist';
export { default as TabPanel } from './tabpanel';

export interface TabsProps {
	children: React.ReactNode;
	forceRenderTabPanel?: boolean;
}

export const Tabs: React.FC<TabsProps> = ({ children, forceRenderTabPanel }) => {
	const [tabIndex, setTabIndex] = useState<number>(0);

	return (
		<div className="o-tabs">
			{Children.map(children, (child, index) => {
				if (isValidElement(child)) {
					if (index === 0) {
						return cloneElement(child, { setTabIndex, tabIndex });
					}
					return cloneElement(child, { forceRender: forceRenderTabPanel, selected: index === tabIndex + 1 });
				}
			})}
		</div>
	);
};

export default Tabs;
