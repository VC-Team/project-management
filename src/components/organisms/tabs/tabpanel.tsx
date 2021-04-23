import React from 'react';

import './index.scss';

export interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
	return <div className="o-tab_panel">{children}</div>;
};

export default TabPanel;
