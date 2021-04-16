import React from 'react';

import { mapModifiers } from 'helpers/component';

import './index.scss';
export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
	align?: 'left' | 'center' | 'right' | 'justify';
	color?: 'primary' | 'secondary';
	isTruncated?: boolean;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	tag?: keyof JSX.IntrinsicElements;
}

export const Text: React.FC<Props> = ({
	align,
	children,
	className,
	color,
	isTruncated,
	size = 'md',
	tag = 'p',
	...otherProps
}) => {
	return React.createElement(
		tag,
		{
			className: `${mapModifiers(
				'a-text',
				align && align,
				color && color,
				isTruncated && 'truncated',
				size !== 'md' && size
			)} ${className || ''}`,
			...otherProps,
		},
		children
	);
};

export default Text;
