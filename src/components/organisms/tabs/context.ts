import { createContext } from 'react';

export interface ITabsContext {
	tabIndex: number | undefined;
	onChangeTabIndex: (index: number) => void;
}

export const TabsContext = createContext({} as ITabsContext);
