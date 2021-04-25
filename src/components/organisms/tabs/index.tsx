import React, { useState, Children, isValidElement, cloneElement } from 'react';

export interface TabsProps {
	children: React.ReactNode;
	forceRenderTabPanel?: boolean;
}

export const Tabs: React.FC<TabsProps> = ({ children, forceRenderTabPanel }) => {
	const [tabIndex, setTabIndex] = useState<number>(0);

	const onChangeTabIndex = (index: number) => setTabIndex(index);

	const child = Children.map(children, (child, index) => {
		if (index === 0 && isValidElement(child)) {
			return cloneElement(child, { onChangeTabIndex });
		}
		if (index === tabIndex + 1) return child;
	});

	return <div className="o-tabs">{forceRenderTabPanel ? children : child}</div>;
};

export { default as Tab } from './tab';
export { default as TabList } from './tablist';
export { default as TabPanel } from './tabpanel';
