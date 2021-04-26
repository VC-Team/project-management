import React, { Children, isValidElement, cloneElement } from 'react';

import './index.scss';

export interface TabListProps {
	children: React.ReactNode;
	setTabIndex?: (index: number) => void;
	tabIndex?: number;
}

const TabList: React.FC<TabListProps> = ({ children, tabIndex, setTabIndex }) => {
	return (
		<div className="o-tab_list">
			{Children.map(children, (child, index) => {
				if (isValidElement(child)) {
					return cloneElement(child, { index, isActive: index === tabIndex, setTabIndex });
				}
			})}
		</div>
	);
};

export default TabList;
