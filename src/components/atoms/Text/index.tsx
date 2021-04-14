import React from 'react';

import { mapModifiers } from 'helpers/component';

import './index.scss';

type Modifier = 'foo' | 'bar';

export interface Props {
	modifiers?: Modifier | Array<Modifier>;
	children?: React.ReactNode;
}

export const Text: React.FC<Props> = ({ modifiers, children }) => (
	<div className={mapModifiers('a-text', modifiers)}>{children}</div>
);
