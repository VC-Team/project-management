import React, { Children, isValidElement, cloneElement } from 'react';

import './index.scss';

export interface TabListProps {
	children: React.ReactNode;
	onChangeTabIndex?: (index: number) => void;
	tabIndex?: number;
}

const TabList: React.FC<TabListProps> = ({ children, tabIndex, onChangeTabIndex }) => {
	return (
		<div className="o-tab_list">
			{Children.map(children, (child, index) => {
				if (isValidElement(child)) {
					return cloneElement(child, { index, isActive: index === tabIndex, onChangeTabIndex });
				}
			})}
		</div>
	);
};

export default TabList;
