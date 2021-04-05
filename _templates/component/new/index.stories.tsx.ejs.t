---
to: src/components/<%= level %>/<%= name %>/index.stories.tsx
---
import { Story, Meta } from "@storybook/react/types-6-0";

import { <%= h.toPascalCase(name) %>, Props } from ".";

// This default export determines where your story goes in the story list
export default {
	title: "Components|<%= level %>/<%= h.toPascalCase(name) %>",
	component: <%= h.toPascalCase(name) %>,
} as Meta;

const Template: Story<Props> = ({ modifiers, children }) => (
	<<%= h.toPascalCase(name) %> modifiers={modifiers}>{children}</<%= h.toPascalCase(name) %>>
);

export const Normal = Template.bind({});

Normal.args = {};
