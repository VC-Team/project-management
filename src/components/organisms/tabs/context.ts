import { createContext } from 'react';

export interface ITabsContext {
	tabIndex: number;
	setTabIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const TabsContext = createContext({} as ITabsContext);
