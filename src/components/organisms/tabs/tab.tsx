import React, { useContext } from 'react';

import { mapModifiers } from 'helpers/component';

import { TabsContext } from './context';

export interface TabProps {
	children?: React.ReactNode;
	index: number;
}

const Tab: React.FC<TabProps> = ({ children, index }) => {
	const { tabIndex, setTabIndex } = useContext(TabsContext);

	return (
		<div
			className={mapModifiers('o-tab', tabIndex === index && 'active')}
			role="button"
			onClick={() => setTabIndex(index)}
		>
			{children}
		</div>
	);
};

export default Tab;
