// https://github.com/jeremytenjo/super-code-generator/tree/master#component-type-properties
const files = [
  {
    path: ({ name }) => `${name}.ts`,
    template: ({ name }) => {
      return `    
    export default function ${name}() {
      console.log('hello')
    }`;
    },
  },
  {
    path: () => `run.ts`,
    template: ({ name }) => {
      return `import ${name} from './${name}.js'
      console.clear()
      ${name}()
      `;
    },
  },
];

const template = {
  type: "Script",
  files,
};

module.exports = {
  files,
  template,
};
