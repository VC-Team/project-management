import React, { useState, Children, isValidElement, cloneElement } from 'react';

export { default as Tab } from './tab';
export { default as TabList } from './tablist';
export { default as TabPanel } from './tabpanel';

export interface TabsProps {
	children: React.ReactNode;
	forceRenderTabPanel?: boolean;
	selectedIndex?: number;
	onSelect?: (index: number) => void;
}

export const Tabs: React.FC<TabsProps> = ({ children, forceRenderTabPanel, selectedIndex, onSelect }) => {
	const [tabIndex, setTabIndex] = useState<number>(0);

	return (
		<div className="o-tabs">
			{Children.map(children, (child, index) => {
				if (isValidElement(child)) {
					if (index === 0) {
						return cloneElement(child, {
							setTabIndex: selectedIndex === undefined ? setTabIndex : onSelect,
							tabIndex: selectedIndex || tabIndex,
						});
					}
					return cloneElement(child, {
						forceRender: forceRenderTabPanel,
						selected: index === (selectedIndex || tabIndex) + 1,
					});
				}
			})}
		</div>
	);
};

export default Tabs;
