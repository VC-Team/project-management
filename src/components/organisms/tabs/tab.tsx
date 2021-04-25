import React from 'react';

import { mapModifiers } from 'helpers/component';

export interface TabProps {
	children: React.ReactNode;
	index?: number;
	onChangeTabIndex?: (index: number) => void;
}

const Tab: React.FC<TabProps> = ({ children, index = 0, onChangeTabIndex }) => {
	const onHandleClick = () => {
		if (onChangeTabIndex) onChangeTabIndex(index);
	};

	return (
		<div className={mapModifiers('o-tab')} role="button" onClick={onHandleClick}>
			{children}
		</div>
	);
};

export default Tab;
