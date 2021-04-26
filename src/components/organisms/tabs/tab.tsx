import React from 'react';

import { mapModifiers } from 'helpers/component';

export interface TabProps {
	children: React.ReactNode;
	index?: number;
	isActive?: boolean;
	setTabIndex?: (index: number) => void;
}

const Tab: React.FC<TabProps> = ({ children, index = 0, isActive, setTabIndex }) => {
	return (
		<div
			className={mapModifiers('o-tab', isActive && 'active')}
			role="button"
			onClick={() => setTabIndex && setTabIndex(index)}
		>
			{children}
		</div>
	);
};

export default Tab;
