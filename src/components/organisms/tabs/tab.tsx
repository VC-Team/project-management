import React, { memo } from 'react';

import Text from '@atoms/Text';
export interface TabProps {
	children: React.ReactNode;
	index?: number;
	isActive?: boolean;
	setTabIndex?: (index: number) => void;
}

export const Tab: React.FC<TabProps> = memo(({ children, index = 0, isActive, setTabIndex }) => {
	const onHandleClick = () => setTabIndex && setTabIndex(index);

	return (
		<div className="o-tab" role="button" onClick={onHandleClick}>
			<Text as="b" color={isActive ? 'primary' : 'secondary'}>
				{children}
			</Text>
		</div>
	);
});
