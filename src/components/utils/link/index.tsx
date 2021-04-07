import React from 'react';

import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

export interface Props extends RouterLinkProps {
	useNative?: boolean;
	to: string;
	search?: string;
	hash?: string;
	state?: unknown;
}

/**
 * An anchor tag that can decide to use native <a /> or @react-router-dom <Link /> automatically.
 *
 * You also can give a boolean to `useNative` prop to force which should be used.
 */

export const Link: React.FC<Props> = ({
	to: pathname,
	search,
	hash,
	state,
	useNative,
	innerRef,
	children,
	...otherProps
}) => {
	if (
		useNative ||
		(pathname && (pathname.includes('http') || pathname.includes('mailto:') || pathname.includes('tel:+')))
	) {
		return (
			// eslint-disable-next-line react/forbid-elements
			<a href={pathname} ref={innerRef} {...otherProps}>
				{children}
			</a>
		);
	}

	return (
		<RouterLink
			to={{
				pathname,
				search,
				hash,
				state,
			}}
			{...otherProps}
		>
			{children}
		</RouterLink>
	);
};
