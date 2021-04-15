import React from 'react';

import { mapModifiers } from '../../../helpers/component';

import './index.scss';

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
	children?: React.ReactNode;
	color?: 'primary' | 'secondary';
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	tag?: keyof JSX.IntrinsicElements;
}

export const Text: React.FC<Props> = props => {
	const { children, className, color = 'primary', size = 'md', tag = 'span', ...otherProps } = props;

	return React.createElement(
		tag,
		{
			className: `${mapModifiers('a-text', color !== 'primary' && color, size !== 'md' && size)} ${className}`,
			...otherProps,
		},
		children
	);
};

export default Text;
