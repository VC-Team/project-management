import React, { useState, Children, useMemo } from 'react';

import { mapModifiers } from 'helpers/component';

import { TabsContext, ITabsContext } from './context';

export interface TabsProps {
	children: React.ReactNode;
	forceRenderTabPanel?: boolean;
}

export const Tabs: React.FC<TabsProps> = ({ children, forceRenderTabPanel }) => {
	const [tabIndex, setTabIndex] = useState<number>(1);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const child = Children.map(children, (child: any, index) => {
		if (index === 0 || child.props.index === tabIndex) return child;
	});

	const exportValue = useMemo<ITabsContext>(() => {
		return {
			tabIndex,
			setTabIndex,
		};
	}, [tabIndex]);

	return (
		<TabsContext.Provider value={exportValue}>
			<div className={mapModifiers('o-tabs')}>{forceRenderTabPanel ? children : child}</div>
		</TabsContext.Provider>
	);
};

export { default as Tab } from './tab';
export { default as TabList } from './tablist';
export { default as TabPanel } from './tabpanel';
