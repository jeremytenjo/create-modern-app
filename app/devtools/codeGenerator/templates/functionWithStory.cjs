const functions = require('./function.cjs')
const story = require('./story.cjs')

const template = {
  type: 'Function with story',
  files: [...functions.files, ...story.functionStoryFiles],
}

module.exports = {
  template,
}
