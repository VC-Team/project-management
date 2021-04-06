import React from "react";

import { DecoratorFunction } from "@storybook/addons";
import { StaticRouter } from "react-router-dom";

// @see https://github.com/storybookjs/storybook/issues/769#issuecomment-294082103
const StorybookReactRouter: DecoratorFunction<React.ReactElement> = (story) => (
	<StaticRouter basename="/">{story()}</StaticRouter>
);

export default StorybookReactRouter;
