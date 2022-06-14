// templates for the `Super Code Generator` vscode plugin
// https://marketplace.visualstudio.com/items?itemName=tenjojeremy.super-code-generator

const component = require("./templates/component.cjs");
const componentStory = require("./templates/componentStory.cjs");
const componentWithStory = require("./templates/componentWithStory.cjs");
const functions = require("./templates/function.cjs");
const functionStory = require("./templates/functionStory.cjs");
const functionWithStory = require("./templates/functionWithStory.cjs");
const container = require("./templates/container.cjs");
const page = require("./templates/page.cjs");
const globalState = require("./templates/globalState.cjs");
const asyncHook = require("./templates/asyncHook.cjs");
const cloudFunction = require("./templates/cloudFunction.cjs");
const muiOverride = require("./templates/muiOverride.cjs");
const muiOverrideWithStory = require("./templates/muiOverrideWithStory.cjs");
const playwrightTest = require("./templates/playwrightTest.cjs");
const data = require("./templates/data.cjs");
const vitestTest = require("./templates/vitestTest.cjs");
const script = require("./templates/script.cjs");

module.exports = [
  container.template,

  component.template,
  componentStory.template,
  componentWithStory.template,

  functions.template,
  functionStory.template,
  functionWithStory.template,

  cloudFunction.template,

  data.template,
  globalState.template,

  playwrightTest.template,
  vitestTest.template,

  page.template,

  muiOverride.template,
  muiOverrideWithStory.template,

  asyncHook.template,
  script.template,
];
