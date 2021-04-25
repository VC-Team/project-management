import React from 'react';

import './index.scss';

export interface TabPanelProps {
	children?: React.ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
	return <div className="o-tab_panel">{children}</div>;
};

export default TabPanel;
