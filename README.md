# Welcome to VC Project Management

## Repository

<https://github.com/VC-Team/project-management>

## Design Workspace

<https://drive.google.com/file/d/1ASQ5hdqdvm9lLP2e5wncs401sDUb3ln4/view>

## Documents

No documents available at this time...

## Languages and Frameworks

- Vite ^2.1.5
- React ^7.13.14
- React-router-dom v5
- SCSS (node-sass) ^4
- TypeScript ^4.1.2
- Babel ^7.13.14
- Storybook v6
- Husky ^6.0.0
- Lint-staged
- Hygen
- ESLint
- Stylelint
- Prettier
- Commitizen
- Cz-emoji
- Commitlint - Commitlint-config-gitmoji
- ...

## Files/Directories

| Path                    | Purpose                                                     |
| ----------------------- | ----------------------------------------------------------- |
| /.storybook/            | contains Storybook config files                               |
| /.editorconfig           | settings for `Editorconfig`                                  |
| /.eslintrc              | settings for `ESLint`                                       |
| /.hygen.js              | settings for `Hygen`                                        |
| /\_templates/           | contains scaffolding templates based on `Hygen`             |
| /.stylelintrc.js        | settings for `Stylelint`                                    |
| /.vscode/               | settings for `Visual Studio Code` workspace                 |
| /package.json           | manifest file for Node.js projects                           |
| /tsconfig.json           | settings for `TypeScript`                                   |
| /dist/                  | contains production build codes                             |
| /commitlint.config.js    | settings for `Commitlint`                                   |
| /src/components/        | contains Atomic Design components                           |
| /src/pages/             | contains pages                                              |
| /src/assets/            | contains images, movies, fonts                              |
| /src/helpers/           | contains shared helpers                                     |
| /src/store/             | contains shared store                                       |
| /src/services/          | contains shared services                                    |
| /index.html             | contains root `HTML` file                                    |
| /src/index.tsx/         | contains root file                                           |
| /src/app.tsx            | contains application page index                             |
| /src/`**`/routes.tsx    | contains application page routes                            |
| /src/index.scss         | contains shared styles                                      |
---

## Command Line

**Note: About the package manager. We prefer to use <a href="https://pnpm.io/" target="_blank">pnpm</a> over anything else.**

| Path                       | Purpose                                                     |
| ---------------------------| ----------------------------------------------------------- |
| pnpm start                 | start the project                                           |
| pnpm buid                  | build the project                                           |
| pnpm serve                 | run the built in source code                                |
| pnpm gen:component:atom    | generate new `atomic` component                             |
| pnpm gen:component:molecule| generate new `molecule` component                           |
| pnpm gen:component:organism| generate new `organism` component                           |
| pnpm gen:component:page    | generate new `page` component                               |
| pnpm gen:component:template| generate new `template` component                           |
| pnpm gen:component:util    | generate new `util` component                               |
| pnpm storybook             | run the storybook                                           |
| pnpm lint:script           | run `Eslint` to check the syntax                            |
| pnpm lint:style            | run `Stylelint` to check the syntax                         |
| pnpm lint                  | run linter to check the syntax of both `Eslint & Stylelint` |
| pnpm format:script         | auto-fixes for the syntax of `Eslint`                        |
| pnpm format:style          | auto-fixes for the syntax of `Stylelint`                     |
| pnpm format                | auto-fixes for the syntax of both `Eslint & Stylelint`       |
---

### `Abem`

<https://css-tricks.com/abem-useful-adaptation-bem/>

**Note: Use only the `lowercase` format for `className`.**

```tsx
  //GOOD 🏆🏆🏆
  export const Sample:React.FC = props => (
    <div className="a-sample">{props.children}</div>
  );


  //NOT GOOD 💩💩💩
  export const Sample:React.FC = props => (
    <div className="a-Sample">{props.children}</div>
  );
```

**Note: Use only the `Single_Underscore(_) && Single-Dash(-)` format for `className`.**

```tsx
  //GOOD 🏆🏆🏆
  export const Sample = () => (
    <div className="a-sample">
      <span className="a-sample_title">Title</span>
    </div>
  );


  //NOT GOOD 💩💩💩
  export const Sample = () => (
    <div className="a--sample">
      <span className="a--sample__title">Title</span>
    </div>
  );
```

**Note: The `className` must be formatted as `block_element-modifier`. But `Sometimes` it will be formatted as `block_element_element-modifier`.**

```tsx
  //GOOD 🏆🏆🏆
  export const Sample = () => (
    <div className="a-sample">
      <span className="a-sample_element">One Element</span>
    </div>
  );

  export const Sample = () => (
    <div className="a-sample">
      <span className="a-sample_element1_element2">Two elements</span>
    </div>
  );


  //NOT GOOD 💩💩💩
  export const Sample = () => (
    <div className="a-sample">
      <span className="a-sample_element1_element2_element3">Greater than 2 elements</span>
    </div>
  );
```

### `Atomic`

<https://bradfrost.com/blog/post/atomic-web-design/>

### `Components`

- Use only `React-Hook`
- Follow the `rules of hook` (<https://reactjs.org/docs/hooks-rules.html>)

**Note: Use `mapModifiers` to generate `modifiers`.**

```tsx
  export const Component: React.FC<Props> = props => (
    <div className={mapModifiers('a-sample', props.modifiers)}>{props.children}</div>
  );
```

**Note: Use `// eslint-disable-next-line react-hooks/exhaustive-deps` when you want to avoid checking of the `useEffect` syntax (also on `useMemo & useCallback`)**

```tsx
  useEffect(() => {
    Todo Something...
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
```

**Note: Use simple syntax when the component has no properties.**

```tsx
  //GOOD 🏆🏆🏆
  export const Component = () => (
    <div>Without children...</div>
  );

  export const Component: React.FC = props => (
    <div>{props.children}</div>
  );


  //NOT GOOD 💩💩💩
  export const Component: React.FC = props => (
    <div>Without children...</div>
  );
```

**Note: Clearly define the data type of the property.**

```tsx
  //GOOD 🏆🏆🏆
  interface Props {
    title: string;
  }

  //NOT GOOD 💩💩💩
  interface Props {
    title: any;
  }
```

**Note: Please leave TODO when you encounter some unresolved issues immediately.**

```tsx
  export const Component = () => {

    // TODO: bla...bla...bla
    const Problems = 'Problems';

    return (
      <div>Todo Something...</div>
    );
  };
```

### `CSS/SCSS`

**Note: Instead of using `Color Variables`, do `NOT` use `Color Codes`. If the color code has not been defined. Please leave `TODO` about that.**

```scss
  .a-sample {
    // TODO: Replace with color variable
    color: rgb(0, 0, 0);
  }
```

**Note: Instead of using `Color Rgb`, do `NOT` use `Color Names | Color Hexs | ...`.**

```scss
  //GOOD 🏆🏆🏆
  .a-sample {
    // TODO: Replace with color variable
    color: rgb(0, 0, 0);
  }

  //NOT GOOD 💩💩💩
  .a-sample {
    // TODO: Replace with color variable
    color: black; /* stylelint-disable-line color-named */
  }
```

**Note: Instead of using `@minxin u-fw-*`, do `NOT` use `font-weight`.**

```scss
  //GOOD 🏆🏆🏆
  .a-sample {
    @include u-fw-b;
  }

  //NOT GOOD 💩💩💩
  .a-sample {
    font-weight: bold;
  }
```

**Note: Do `NOT` use `font-family` when it has the type `$FONTFAMILY-BASIC (E.g: Roboto, ...)`.**

```scss
  //GOOD 🏆🏆🏆
  .a-robotoregular {
    // NOTE: Please use @include u-fw-r when it has the type `Roboto-Regular`
    @include u-fw-r;
  }

  .a-robotomedium {
    // NOTE: Please use @include u-fw-m when it has the type `Roboto-Medium`
    @include u-fw-m;
  }

  .a-robotobold {
    // NOTE: Please use @include u-fw-b when it has the type `Roboto-Bold`
    @include u-fw-b;
  }

  //NOT GOOD 💩💩💩
  .a-sample {
    font-family: 'Roboto-Medium';
  }
```

**Note:  Use `font-family` only if it has a type does not match `$FONTFAMILY-BASIC (E.g: Roboto, ...)`.**

```scss
  //GOOD 🏆🏆🏆
  .a-sample {
    // TODO: Replace with font-family variable
    font-family: 'AnotherFont';
  }

  //NOT GOOD 💩💩💩
  .a-sample {
    font-family: 'AnotherFont';
  }
```

**Note: Please use `@function rem` with the properties have dynamic values (Scale-up and Scale-down). rem($SizeOnDesign)**

```scss
  //GOOD 🏆🏆🏆
  .a-sample {
    font-size: rem(16);
    border-radius: 4px;
  }

  //NOT GOOD 💩💩💩
  .a-sample {
    font-size: 16px;
    border-radius: 4px;
  }
```

**Note: Instead of using `@function z`, do `NOT` use `z-index value`. Please define the `zIndex variable` before using that function. Please follow the instructions at `assets/scss/_zIndex.scss`**

```scss
  //GOOD 🏆🏆🏆
  .a-sample {
    z-index: z('headerexam');
  }

  //NOT GOOD 💩💩💩
  .a-sample {
    z-index: 4;
  }
```

### `Storybook`

**Note: Make sure that you have included all instances of the component in the storybook when building it.**

### `Unit Test`

- enzyme: <https://enzymejs.github.io/enzyme/docs/api/>
- jest: <https://jestjs.io/docs/en/25.x/getting-started.html>
- testing-library/react-hooks: <https://react-hooks-testing-library.com/usage/basic-hooks>

**Note: Make full test coverage for the component. If `NOT`, please notify your Leader.**

### `VanillaJS`

<http://vanilla-js.com/>

### `Typescript`

<https://www.typescriptlang.org/index.htm>

### `React-router-dom`

<https://reactrouter.com/web/guides/quick-start>

### `Git`

- Merge: <https://git-scm.com/docs/git-merge>
- Rebase: <https://git-scm.com/docs/git-rebase>
- Git branch format: <http://karma-runner.github.io/5.0/dev/git-commit-msg.html>

**Note: There are all types that should be used in this project: `perf | prune | fix | feat | docs | deploy | test | release | wip | downgrade | upgrade | refactor | revert | merge | review | experiment`**

**Note: When creating a new branch.**

```ssh
  git checkout -b type/feature-name
```

**Note: When committed.**

```ssh
  pnpm commit
```

**Note: When creating a component, the `feature-name` must be prefixed.**

```ssh
  //GOOD 🏆🏆🏆
  git checkout -b feat/a-text

  //NOT GOOD 💩💩💩
  git checkout -b feat/text
```

**Note: The commit style muse be in format**

```ssh
  :gitmoji: type(scope): subject
  body?
  footer?
```
