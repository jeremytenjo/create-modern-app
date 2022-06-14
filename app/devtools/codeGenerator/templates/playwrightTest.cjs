// https://github.com/jeremytenjo/super-code-generator/tree/master#component-type-properties
const files = [
  {
    path: ({ name }) => `${name}.test.ts`,
    template: ({ name, helpers }) => {
      const propsName = `${helpers.changeCase
        .capitalCase(name)
        .split(" ")
        .join("")}Props`;

      return `// https://playwright.dev/docs/selectors
import { expect, type Page } from '@playwright/test'

type ${propsName} = {
  page: Page
}

export default async function ${name}({ page }: ${propsName}) {
  await page.goto('/')

  const header = await page.innerText('h1')
  expect(header).toBe('Home Page')
}

      
      `;
    },
  },
  {
    path: ({ name }) => `${name}.e2e.ts`,
    template: ({ name }) => {
      return `import { test } from '@playwright/test'

      import ${name} from './${name}.test'
      
      test('${name}', async ({ page }) => {
        await ${name}({ page })
      })
      
      `;
    },
  },
];

const template = {
  type: "Playwright test",
  files,
};

module.exports = {
  files,
  template,
};
