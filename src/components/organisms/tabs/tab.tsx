import React from 'react';

import { mapModifiers } from 'helpers/component';

export interface TabProps {
	children: React.ReactNode;
	index?: number;
	isActive?: boolean;
	onChangeTabIndex?: (index: number) => void;
}

const Tab: React.FC<TabProps> = ({ children, index = 0, isActive, onChangeTabIndex }) => {
	const onHandleClick = () => {
		if (onChangeTabIndex) onChangeTabIndex(index);
	};

	return (
		<div className={mapModifiers('o-tab', isActive && 'active')} role="button" onClick={onHandleClick}>
			{children}
		</div>
	);
};

export default Tab;
