import React, { Children, isValidElement, cloneElement } from 'react';

import './index.scss';

export interface TabListProps {
	children: React.ReactNode;
	onChangeTabIndex?: (index: number) => void;
}

const TabList: React.FC<TabListProps> = ({ children, onChangeTabIndex }) => {
	return (
		<div className="o-tab_list">
			{Children.map(children, (child, index) => {
				if (isValidElement(child)) {
					return cloneElement(child, { index, onChangeTabIndex });
				}
			})}
		</div>
	);
};

export default TabList;
