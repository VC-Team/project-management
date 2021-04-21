import React from 'react';

import { mapModifiers } from 'helpers/component';

import './index.scss';
export interface Props {
	alt?: string;
	borderColor?: 'transparent' | 'white';
	borderOn?: ('always' | 'hover' | 'active' | 'focus')[];
	borderWidth?: 1 | 2 | 3 | 5;
	size?: 'small' | 'normal' | 'large';
	src: string;
}

export const Avatar: React.FC<Props> = ({
	alt,
	borderColor = 'transparent',
	borderOn,
	borderWidth,
	size = 'normal',
	src,
}) => {
	return (
		<div
			className={mapModifiers(
				'a-avatar',
				borderColor !== 'transparent' && `border-${borderColor}`,
				borderOn && borderOn.map(type => `border-${type}`),
				borderWidth && `border-${borderWidth}`,
				size !== 'normal' && size
			)}
		>
			<img className="a-avatar_image" src={src} alt={alt} />
		</div>
	);
};
