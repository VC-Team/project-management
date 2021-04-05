---
to: src/components/<%= level %>/<%= name %>/index.tsx
---
import React from "react";

import { mapModifiers } from "helpers/component";

type Modifier = "foo" | "bar";

export interface Props {
	modifiers?: Modifier | Array<Modifier>;
	children?: React.ReactNode;
}

export const <%= h.toPascalCase(name) %>: React.FC<Props> = ({ modifiers, children }) => (
	<div className={mapModifiers("<%= h.createBaseClassName(level, name) %>", modifiers)}>{children}</div>
);
