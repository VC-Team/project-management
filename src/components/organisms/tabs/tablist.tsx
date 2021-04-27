import React, { useRef, Children, isValidElement, cloneElement, useEffect } from 'react';

import './index.scss';

export interface TabListProps {
	children: React.ReactNode;
	setTabIndex?: (index: number) => void;
	tabIndex?: number;
}

const TabList: React.FC<TabListProps> = ({ children, tabIndex = 0, setTabIndex }) => {
	const ref: React.LegacyRef<HTMLDivElement> = useRef(null);

	const onHandleClick = (index: number) => {
		setTabIndex && setTabIndex(index);
	};

	useEffect(() => {
		if (ref.current) {
			const child = ref.current.children[tabIndex] as HTMLDivElement;
			const lastChild = ref.current.children[ref.current.childElementCount - 1] as HTMLDivElement;

			lastChild.style.left = `${child.offsetLeft}px`;
			lastChild.style.width = `${child.offsetWidth}px`;
		}
	}, [tabIndex]);

	return (
		<div className="o-tab_list" ref={ref}>
			{Children.map(children, (child, index) => {
				if (isValidElement(child)) {
					return cloneElement(child, { index, isActive: index === tabIndex, setTabIndex: onHandleClick });
				}
			})}
			<div className="o-tab_list_divider" />
		</div>
	);
};

export default TabList;
