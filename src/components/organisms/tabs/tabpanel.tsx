import React from 'react';

import { mapModifiers } from 'helpers/component';

import './index.scss';

export interface TabPanelProps {
	children?: React.ReactNode;
	selected?: boolean;
	forceRender?: boolean;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, forceRender, selected }) => {
	if (forceRender || selected) {
		return <div className={mapModifiers('o-tab_panel', selected && 'selected')}>{children}</div>;
	} else {
		return null;
	}
};

export default TabPanel;
