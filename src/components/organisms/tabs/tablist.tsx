import React from 'react';

import './index.scss';

export interface TabListProps {
	children?: React.ReactNode;
}

const TabList: React.FC<TabListProps> = ({ children }) => {
	return <div className="o-tab_list">{children}</div>;
};

export default TabList;
