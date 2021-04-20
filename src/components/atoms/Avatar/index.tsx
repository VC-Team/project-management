import React from 'react';

import { mapModifiers } from 'helpers/component';

export interface Props {
	alt?: string;
	bordered?: boolean;
	children?: React.ReactNode;
	size?: 'small' | 'normal' | 'large';
	src?: string;
}

import './index.scss';

export const Avatar: React.FC<Props> = ({ alt, bordered, children, size, src }) => {
	return (
		<div className={mapModifiers('a-avatar', bordered && 'bordered', size !== 'normal' && size)}>
			{src ? (
				<img className="a-avatar_image" src={src} alt={alt} />
			) : (
				<span className="a-avatar_name">
					{typeof children === 'string' ? children?.charAt(0).toLocaleUpperCase() : children}
				</span>
			)}
		</div>
	);
};
