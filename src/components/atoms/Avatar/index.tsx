import React from 'react';

import { mapModifiers } from 'helpers/component';

import './index.scss';
export interface Props {
	alt?: string;
	borderColor?: 'transparent' | 'white';
	borderOn?: ('always' | 'hover' | 'active' | 'focus')[];
	borderWidth?: 'small' | 'normal' | 'large';
	size?: 'small' | 'normal' | 'large';
	src: string;
}

export const Avatar: React.FC<Props> = ({
	alt,
	borderColor = 'white',
	borderOn,
	borderWidth = 'normal',
	size = 'normal',
	src,
}) => {
	return (
		<div
			className={mapModifiers(
				'a-avatar',
				borderColor !== 'white' && `border-${borderColor}`,
				borderOn && borderOn.map(type => `border-${type}`),
				borderWidth !== 'normal' && `border-${borderWidth}`,
				size !== 'normal' && size
			)}
		>
			<img className="a-avatar_image" src={src} alt={alt} />
		</div>
	);
};
