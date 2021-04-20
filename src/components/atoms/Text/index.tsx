import React from 'react';

import { mapModifiers } from 'helpers/component';

import './index.scss';
export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
	align?: 'left' | 'center' | 'right' | 'justify';
	as?: 'p' | 'i' | 'u' | 'abbr' | 'cite' | 'del' | 'em' | 'ins' | 'kbd' | 'mark' | 's' | 'samp' | 'sub' | 'sup';
	color?: 'primary' | 'secondary';
	display?: 'block' | 'inline';
	isTruncated?: boolean;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Text: React.FC<Props> = ({
	align,
	children,
	className,
	color,
	display,
	isTruncated,
	size = 'md',
	as = 'p',
	...otherProps
}) => {
	return React.createElement(
		as,
		{
			className: `${mapModifiers(
				'a-text',
				align && align,
				color && color,
				display && display,
				isTruncated && 'truncated',
				size !== 'md' && size
			)} ${className || ''}`,
			...otherProps,
		},
		children
	);
};

export default Text;
