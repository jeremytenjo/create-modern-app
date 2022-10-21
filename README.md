<p align="center">
  <a href="https://jeremytenjo.com/" rel="noopener" target="_blank"><img width="200" src="https://github.com/jeremytenjo/create-modern-app/blob/main/public/images/logo.png" alt="Create Modern App Logo"></a></p>
</p>

<h1 align="center">Create Modern App</h1>

Quickly create [webapps](https://github.com/jeremytenjo/starter-webapp) and [websites](https://github.com/jeremytenjo/starter-website) from the terminal

## Usage

```sh
npx create-modern-app
```

## Options

**name** default `app`

```sh
npx create-modern-app --name newApp
```

**type** `website` | `webapp` default `website`

```sh
npx create-modern-app --name newApp --type website
```

`website`

Creates a Nextjs project with React, Storybook, MUI, Vitest, Playwright, Prettier, ESLint, useweb configured

`webapp`

Creates a Vite project with React, Storybook, MUI, Firebase, Vitest, Playwright, Prettier, ESLint useweb configured

**force** default `false`

If true, it will override existing output folder

```sh
npx create-modern-app --force
```
