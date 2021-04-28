import React, { useState, Children, isValidElement, cloneElement } from 'react';

export interface TabsProps {
	children: React.ReactNode;
	defaultIndex?: number;
	forceRenderTabPanel?: boolean;
	selectedIndex?: number;
	onSelect?: (index: number) => void;
}

export const Tabs: React.FC<TabsProps> = ({
	children,
	defaultIndex = 0,
	forceRenderTabPanel,
	selectedIndex,
	onSelect,
}) => {
	const [tabIndex, setTabIndex] = useState<number>(defaultIndex);

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
